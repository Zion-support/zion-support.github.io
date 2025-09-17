import React, { useEffect, useState, useCallback } from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
interface UXOptimizerProps {
  enableA11y?: boolean;
  enablePerformance?: boolean;
  enablePersonalization?: boolean;
  enableFeedback?: boolean;
}
const UserExperienceOptimizer: React.FC<UXOptimizerProps> = ({
  enableA11y = true,
  enablePerformance = true,
  enablePersonalization = true,
  enableFeedback = true
}) => {
  const { trackInteraction, trackPerformance, trackEvent } = useAnalytics();
  const [userPreferences, setUserPreferences] = useState({
    theme: 'auto',
    fontSize: 'medium',
    reducedMotion: false,
    highContrast: false,
    language: 'en'
  });
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  // Load user preferences
  useEffect(() => {
    const saved = localStorage.getItem('user_preferences');
    if (saved) {
      setUserPreferences(JSON.parse(saved));
    }
    // Check system preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setUserPreferences(prev => ({
      ...prev,
      reducedMotion: prefersReducedMotion,
      highContrast: prefersHighContrast,
      theme: prefersDark ? 'dark' : 'light'
    }));
  }, []);
  // Save user preferences
  const saveUserPreferences = useCallback((newPreferences: Partial<typeof userPreferences>) => {
    const updated = { ...userPreferences, ...newPreferences };
    setUserPreferences(updated);
    localStorage.setItem('user_preferences', JSON.stringify(updated));
    trackEvent({
      action: 'preferences_updated',
      category: 'user_experience',
      custom_parameters: newPreferences
    });
  }, [userPreferences, trackEvent]);
  // Apply user preferences
  useEffect(() => {
    const root = document.documentElement;
    // Apply theme
    root.setAttribute('data-theme', userPreferences.theme);
    // Apply font size
    root.setAttribute('data-font-size', userPreferences.fontSize);
    // Apply reduced motion
    if (userPreferences.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    // Apply high contrast
    if (userPreferences.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [userPreferences]);
  // Monitor performance
  useEffect(() => {
    if (!enablePerformance) return;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const metrics: any = {};
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const nav = entry as PerformanceNavigationTiming;
          metrics.loadTime = nav.loadEventEnd - nav.loadEventStart;
          metrics.domContentLoaded = nav.domContentLoadedEventEnd - nav.domContentLoadedEventStart;
        } else if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = entry.startTime;
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          metrics.largestContentfulPaint = entry.startTime;
        } else if (entry.entryType === 'first-input') {
          const input = entry as any;
          metrics.firstInputDelay = input.processingStart - input.startTime;
        } else if (entry.entryType === 'layout-shift') {
          const shift = entry as any;
          if (!shift.hadRecentInput) {
            metrics.cumulativeLayoutShift = (metrics.cumulativeLayoutShift || 0) + shift.value;
          }
        }
      });
      if (Object.keys(metrics).length > 0) {
        setPerformanceMetrics(prev => ({ ...prev, ...metrics }));
        trackPerformance(metrics);
      }
    });
    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance Observer not supported:', e);
    }
    return () => observer.disconnect();
  }, [enablePerformance, trackPerformance]);
  // Monitor user interactions for optimization
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const element = target.tagName.toLowerCase();
      const className = target.className;
      const id = target.id;
      trackInteraction(`${element}${id ? `#${id}` : ''}${className ? `.${className.split(' ').join('.')}` : ''}`, 'click', {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });
    };
    const handleScroll = (e: Event) => {
      const scrollY = window.scrollY;
      const scrollPercent = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 25 && scrollPercent < 30) {
        trackEvent({
          action: 'scroll_25_percent',
          category: 'engagement',
          custom_parameters: { scroll_percent: scrollPercent }
        });
      } else if (scrollPercent > 50 && scrollPercent < 55) {
        trackEvent({
          action: 'scroll_50_percent',
          category: 'engagement',
          custom_parameters: { scroll_percent: scrollPercent }
        });
      } else if (scrollPercent > 75 && scrollPercent < 80) {
        trackEvent({
          action: 'scroll_75_percent',
          category: 'engagement',
          custom_parameters: { scroll_percent: scrollPercent }
        });
      }
    };
    const handleResize = () => {
      trackEvent({
        action: 'window_resize',
        category: 'user_interaction',
        custom_parameters: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
    };
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [trackInteraction, trackEvent]);
  // Show feedback prompt after user engagement
  useEffect(() => {
    const timer = setTimeout(() => {
      const hasInteracted = localStorage.getItem('user_has_interacted');
      if (!hasInteracted) {
        setShowFeedback(true);
        localStorage.setItem('user_has_interacted', 'true');
      }
    }, 30000); // Show after 30 seconds
    return () => clearTimeout(timer);
  }, []);
  // Feedback component
  const FeedbackModal = () => {
    if (!showFeedback || !enableFeedback) return null;
    const handleFeedback = (rating: number) => {
      trackEvent({
        action: 'feedback_submitted',
        category: 'user_experience',
        value: rating,
        custom_parameters: {
          feedback_type: 'rating',
          page: window.location.pathname
        }
      });
      setShowFeedback(false);
    };
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md mx-4">
          <h3 className="text-lg font-semibold mb-4">How was your experience?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Help us improve by rating your experience on this page.
          </p>
          <div className="flex space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleFeedback(rating)}
                className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-yellow-400 dark:hover:bg-yellow-500 flex items-center justify-center text-sm font-medium transition-colors"
              >
                {rating}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowFeedback(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Maybe later
          </button>
        </div>
      </div>
    );
  };
  // Accessibility enhancements
  useEffect(() => {
    if (!enableA11y) return;
    // Add skip links
    const skipLinks = document.querySelector('.skip-links');
    if (!skipLinks) {
      const skipLinksDiv = document.createElement('div');
      skipLinksDiv.className = 'skip-links';
      skipLinksDiv.innerHTML = `
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <a href="#navigation" class="skip-link">Skip to navigation</a>
      `;
      document.body.insertBefore(skipLinksDiv, document.body.firstChild);
    }
    // Add ARIA landmarks
    const main = document.querySelector('main');
    if (main && !main.getAttribute('role')) {
      main.setAttribute('role', 'main');
    }
    const nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('role')) {
      nav.setAttribute('role', 'navigation');
    }
    const header = document.querySelector('header');
    if (header && !header.getAttribute('role')) {
      header.setAttribute('role', 'banner');
    }
    const footer = document.querySelector('footer');
    if (footer && !footer.getAttribute('role')) {
      footer.setAttribute('role', 'contentinfo');
    }
  }, [enableA11y]);
  return (
    <>
      <FeedbackModal />
      {/* User Preferences Panel */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm z-40">
          <h3 className="text-lg font-semibold mb-3">UX Optimizer</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Theme</label>
              <select
                value={userPreferences.theme}
                onChange={(e) => saveUserPreferences({ theme: e.target.value })}
                className="w-full p-1 rounded bg-gray-700 text-white text-sm"
              >
                <option value="auto">Auto</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Font Size</label>
              <select
                value={userPreferences.fontSize}
                onChange={(e) => saveUserPreferences({ fontSize: e.target.value })}
                className="w-full p-1 rounded bg-gray-700 text-white text-sm"
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="reducedMotion"
                checked={userPreferences.reducedMotion}
                onChange={(e) => saveUserPreferences({ reducedMotion: e.target.checked })}
                className="rounded"
              />
              <label htmlFor="reducedMotion" className="text-sm">Reduced Motion</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="highContrast"
                checked={userPreferences.highContrast}
                onChange={(e) => saveUserPreferences({ highContrast: e.target.checked })}
                className="rounded"
              />
              <label htmlFor="highContrast" className="text-sm">High Contrast</label>
            </div>
          </div>
          {performanceMetrics && (
            <div className="mt-4 pt-3 border-t border-gray-600">
              <h4 className="text-sm font-semibold mb-2">Performance</h4>
              <div className="text-xs space-y-1">
                {performanceMetrics.loadTime && (
                  <div>Load: {performanceMetrics.loadTime.toFixed(0)}ms</div>
                )}
                {performanceMetrics.firstContentfulPaint && (
                  <div>FCP: {performanceMetrics.firstContentfulPaint.toFixed(0)}ms</div>
                )}
                {performanceMetrics.largestContentfulPaint && (
                  <div>LCP: {performanceMetrics.largestContentfulPaint.toFixed(0)}ms</div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default UserExperienceOptimizer;
