import { useCallback, useEffect, useRef, useMemo } from 'react';

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

interface AnalyticsConfig {
  enabled: boolean;
  debug: boolean;
  batchSize: number;
  flushInterval: number;
}

const defaultConfig: AnalyticsConfig = {
  enabled: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'development',
  batchSize: 10,
  flushInterval: 5000
};

export function useAnalytics(config: Partial<AnalyticsConfig> = {}) {
  const finalConfig = useMemo(() => ({ ...defaultConfig, ...config }), [config]);
  const eventQueue = useRef<AnalyticsEvent[]>([]);
  const flushTimeout = useRef<NodeJS.Timeout | null>(null);

  const flush = useCallback(() => {
    if (eventQueue.current.length === 0) return;

    const events = [...eventQueue.current];
    eventQueue.current = [];

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      events.forEach(event => {
        (window as any).gtag('event', event.name, {
          event_category: 'User Interaction',
          ...event.properties
        });
      });
    }

    // Store in localStorage for debugging
    if (finalConfig.debug) {
      try {
        const existingEvents = JSON.parse(localStorage.getItem('analyticsEvents') || '[]');
        existingEvents.push(...events);
        localStorage.setItem('analyticsEvents', JSON.stringify(existingEvents.slice(-100))); // Keep last 100 events
      } catch {
        // Ignore localStorage errors
      }
    }

    if (flushTimeout.current) {
      clearTimeout(flushTimeout.current);
      flushTimeout.current = null;
    }
  }, [finalConfig]);

  const track = useCallback((eventName: string, properties?: Record<string, any>) => {
    if (!finalConfig.enabled) return;

    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: Date.now()
    };

    eventQueue.current.push(event);

    if (finalConfig.debug) {
      console.log('[Analytics] Event tracked:', event);
    }

    // Flush if batch size reached
    if (eventQueue.current.length >= finalConfig.batchSize) {
      flush();
    } else if (!flushTimeout.current) {
      // Set timeout to flush remaining events
      flushTimeout.current = setTimeout(flush, finalConfig.flushInterval);
    }
  }, [finalConfig, flush]);

  const pageView = useCallback((page: string, title?: string) => {
    track('page_view', {
      page,
      title: title || document.title,
      url: window.location.href
    });
  }, [track]);

  const flush = useCallback(() => {
    if (eventQueue.current.length === 0) return;

    const events = [...eventQueue.current];
    eventQueue.current = [];

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      events.forEach(event => {
        (window as any).gtag('event', event.name, {
          event_category: 'User Interaction',
          ...event.properties
        });
      });
    }

    // Store in localStorage for debugging
    if (finalConfig.debug) {
      try {
        const existingEvents = JSON.parse(localStorage.getItem('analyticsEvents') || '[]');
        existingEvents.push(...events);
        localStorage.setItem('analyticsEvents', JSON.stringify(existingEvents.slice(-100))); // Keep last 100 events
      } catch {
        // Ignore localStorage errors
      }
    }

    if (flushTimeout.current) {
      clearTimeout(flushTimeout.current);
      flushTimeout.current = null;
    }
  }, [finalConfig]);

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    track('identify', {
      userId,
      traits
    });
  }, [track]);

  // Flush on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      flush();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (flushTimeout.current) {
        clearTimeout(flushTimeout.current);
      }
    };
  }, [flush]);

  return {
    track,
    pageView,
    identify,
    flush
  };
}
