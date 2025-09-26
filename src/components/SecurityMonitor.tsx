import React, { useEffect, useState, useCallback } from 'react';

interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableHSTS: boolean;
  enableContentTypeSniffing: boolean;
  enableReferrerPolicy: boolean;
}

interface SecurityEvent {
  type: 'xss' | 'csrf' | 'clickjacking' | 'injection' | 'suspicious';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  userAgent?: string;
  url?: string;
}

class SecurityMonitor {
  private static instance: SecurityMonitor;
  private events: SecurityEvent[] = [];
  private config: SecurityConfig;

  constructor(config: SecurityConfig) {
    this.config = config;
    this.initializeSecurityHeaders();
    this.setupEventListeners();
  }

  static getInstance(config?: SecurityConfig): SecurityMonitor {
    if (!SecurityMonitor.instance) {
      SecurityMonitor.instance = new SecurityMonitor(config || {
        enableCSP: true,
        enableXSSProtection: true,
        enableClickjackingProtection: true,
        enableHSTS: true,
        enableContentTypeSniffing: true,
        enableReferrerPolicy: true
      });
    }
    return SecurityMonitor.instance;
  }

  private initializeSecurityHeaders(): void {
    if (typeof document === 'undefined') return;

    // Content Security Policy
    if (this.config.enableCSP) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';";
      document.head.appendChild(meta);
    }

    // XSS Protection
    if (this.config.enableXSSProtection) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-XSS-Protection';
      meta.content = '1; mode=block';
      document.head.appendChild(meta);
    }

    // Clickjacking Protection
    if (this.config.enableClickjackingProtection) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Frame-Options';
      meta.content = 'DENY';
      document.head.appendChild(meta);
    }

    // Content Type Sniffing Protection
    if (this.config.enableContentTypeSniffing) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Content-Type-Options';
      meta.content = 'nosniff';
      document.head.appendChild(meta);
    }

    // Referrer Policy
    if (this.config.enableReferrerPolicy) {
      const meta = document.createElement('meta');
      meta.name = 'referrer';
      meta.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(meta);
    }
  }

  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;

    // Monitor for suspicious scripts
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      
      if (tagName.toLowerCase() === 'script') {
        SecurityMonitor.getInstance().logEvent({
          type: 'suspicious',
          severity: 'medium',
          message: 'Script element created',
          timestamp: Date.now(),
          url: window.location.href
        });
      }
      
      return element;
    };

    // Monitor for suspicious URLs
    const originalOpen = window.open;
    window.open = function(url?: string, target?: string, features?: string) {
      if (url && (url.includes('javascript:') || url.includes('data:'))) {
        SecurityMonitor.getInstance().logEvent({
          type: 'xss',
          severity: 'high',
          message: 'Suspicious URL in window.open',
          timestamp: Date.now(),
          url: url
        });
      }
      return originalOpen.call(this, url, target, features);
    };

    // Monitor for suspicious form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Check for suspicious patterns
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string' && (
          value.includes('<script') ||
          value.includes('javascript:') ||
          value.includes('onload=') ||
          value.includes('onerror=')
        )) {
          SecurityMonitor.getInstance().logEvent({
            type: 'injection',
            severity: 'critical',
            message: `Suspicious form data detected in field: ${key}`,
            timestamp: Date.now(),
            url: window.location.href
          });
        }
      }
    });
  }

  logEvent(event: SecurityEvent): void {
    this.events.push(event);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Event:', event);
    }

    // Send to security monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToSecurityService(event);
    }
  }

  private async sendToSecurityService(event: SecurityEvent): Promise<void> {
    try {
      await fetch('/api/security-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.error('Failed to send security event:', error);
    }
  }

  getEvents(): SecurityEvent[] {
    return [...this.events];
  }

  getEventsBySeverity(severity: SecurityEvent['severity']): SecurityEvent[] {
    return this.events.filter(event => event.severity === severity);
  }

  clearEvents(): void {
    this.events = [];
  }

  getSecurityScore(): number {
    const criticalEvents = this.getEventsBySeverity('critical').length;
    const highEvents = this.getEventsBySeverity('high').length;
    const mediumEvents = this.getEventsBySeverity('medium').length;
    const lowEvents = this.getEventsBySeverity('low').length;

    const score = 100 - (criticalEvents * 20) - (highEvents * 10) - (mediumEvents * 5) - (lowEvents * 1);
    return Math.max(0, score);
  }
}

// React hook for security monitoring
export const useSecurityMonitor = () => {
  const [securityScore, setSecurityScore] = useState(100);
  const [events, setEvents] = useState<SecurityEvent[]>([]);

  useEffect(() => {
    const monitor = SecurityMonitor.getInstance();
    
    const updateData = () => {
      setSecurityScore(monitor.getSecurityScore());
      setEvents(monitor.getEvents());
    };

    // Update every 5 seconds
    const interval = setInterval(updateData, 5000);
    updateData();

    return () => clearInterval(interval);
  }, []);

  const logEvent = useCallback((event: Omit<SecurityEvent, 'timestamp'>) => {
    const monitor = SecurityMonitor.getInstance();
    monitor.logEvent({
      ...event,
      timestamp: Date.now()
    });
  }, []);

  return {
    securityScore,
    events,
    logEvent,
    getEventsBySeverity: (severity: SecurityEvent['severity']) => 
      SecurityMonitor.getInstance().getEventsBySeverity(severity)
  };
};

// Security Dashboard Component
export const SecurityDashboard: React.FC = () => {
  const { securityScore, events, logEvent } = useSecurityMonitor();

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="fixed top-4 left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-w-sm">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        Security Monitor
      </h3>
      
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm text-gray-600 dark:text-gray-300">Security Score</span>
          <span className={`text-sm font-semibold ${getScoreColor(securityScore)}`}>
            {securityScore}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${
              securityScore >= 80 ? 'bg-green-500' :
              securityScore >= 60 ? 'bg-yellow-500' :
              securityScore >= 40 ? 'bg-orange-500' : 'bg-red-500'
            }`}
            style={{ width: `${securityScore}%` }}
          />
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-300">
        <div>Total Events: {events.length}</div>
        <div>Critical: {events.filter(e => e.severity === 'critical').length}</div>
        <div>High: {events.filter(e => e.severity === 'high').length}</div>
        <div>Medium: {events.filter(e => e.severity === 'medium').length}</div>
        <div>Low: {events.filter(e => e.severity === 'low').length}</div>
      </div>

      {events.length > 0 && (
        <div className="mt-3 max-h-32 overflow-y-auto">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            Recent Events
          </h4>
          {events.slice(-3).map((event, index) => (
            <div key={index} className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              <span className={`px-1 rounded text-white ${
                event.severity === 'critical' ? 'bg-red-500' :
                event.severity === 'high' ? 'bg-orange-500' :
                event.severity === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'
              }`}>
                {event.severity}
              </span>
              <span className="ml-1">{event.message}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SecurityMonitor;