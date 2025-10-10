import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableContentTypeSniffing?: boolean;
  enableReferrerPolicy?: boolean;
  enableFeaturePolicy?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableContentTypeSniffing = true,
  enableReferrerPolicy = true,
  enableFeaturePolicy = true
}) => {
  useEffect(() => {
    if (enableCSP) {
      setupContentSecurityPolicy();
    }
    if (enableXSSProtection) {
      setupXSSProtection();
    }
    if (enableClickjackingProtection) {
      setupClickjackingProtection();
    }
    if (enableContentTypeSniffing) {
      setupContentTypeSniffing();
    }
    if (enableReferrerPolicy) {
      setupReferrerPolicy();
    }
    if (enableFeaturePolicy) {
      setupFeaturePolicy();
    }

    // Setup security monitoring
    setupSecurityMonitoring();
  }, [enableCSP, enableHSTS, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffing, enableReferrerPolicy, enableFeaturePolicy]);

  const setupContentSecurityPolicy = () => {
    // Content Security Policy
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://connect.facebook.net",
      "frame-src 'self' https://www.googletagmanager.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  };

  const setupXSSProtection = () => {
    // XSS Protection
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-XSS-Protection';
    meta.content = '1; mode=block';
    document.head.appendChild(meta);
  };

  const setupClickjackingProtection = () => {
    // Clickjacking Protection
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);
  };

  const setupContentTypeSniffing = () => {
    // Content Type Sniffing Protection
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);
  };

  const setupReferrerPolicy = () => {
    // Referrer Policy
    const meta = document.createElement('meta');
    meta.name = 'referrer';
    meta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(meta);
  };

  const setupFeaturePolicy = () => {
    // Feature Policy
    const features = [
      "camera 'none'",
      "microphone 'none'",
      "geolocation 'none'",
      "payment 'none'",
      "usb 'none'",
      "magnetometer 'none'",
      "gyroscope 'none'",
      "accelerometer 'none'",
      "ambient-light-sensor 'none'"
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Feature-Policy';
    meta.content = features;
    document.head.appendChild(meta);
  };

  const setupSecurityMonitoring = () => {
    // Monitor for suspicious activities
    let suspiciousActivityCount = 0;
    const maxSuspiciousActivities = 10;

    // Monitor for rapid clicks (potential bot activity)
    let clickCount = 0;
    let lastClickTime = 0;
    const clickThreshold = 5; // 5 clicks per second
    const timeWindow = 1000; // 1 second

    document.addEventListener('click', (event) => {
      const now = Date.now();
      
      if (now - lastClickTime < timeWindow) {
        clickCount++;
      } else {
        clickCount = 1;
      }
      
      lastClickTime = now;

      if (clickCount > clickThreshold) {
        suspiciousActivityCount++;
        trackSecurityEvent('rapid_clicks', {
          click_count: clickCount,
          time_window: timeWindow,
          page_url: window.location.href
        });
      }
    });

    // Monitor for form spam
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Check for common spam patterns
      const email = formData.get('email') as string;
      if (email && isSpamEmail(email)) {
        trackSecurityEvent('spam_form_submission', {
          email: email,
          page_url: window.location.href
        });
      }
    });

    // Monitor for suspicious navigation patterns
    let navigationCount = 0;
    let lastNavigationTime = 0;
    const navigationThreshold = 10; // 10 navigations per minute
    const navigationTimeWindow = 60000; // 1 minute

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      navigationCount++;
      const now = Date.now();
      
      if (now - lastNavigationTime < navigationTimeWindow) {
        if (navigationCount > navigationThreshold) {
          trackSecurityEvent('suspicious_navigation', {
            navigation_count: navigationCount,
            time_window: navigationTimeWindow,
            page_url: window.location.href
          });
        }
      } else {
        navigationCount = 1;
      }
      
      lastNavigationTime = now;
      return originalPushState.apply(this, args);
    };

    history.replaceState = function(...args) {
      navigationCount++;
      const now = Date.now();
      
      if (now - lastNavigationTime < navigationTimeWindow) {
        if (navigationCount > navigationThreshold) {
          trackSecurityEvent('suspicious_navigation', {
            navigation_count: navigationCount,
            time_window: navigationTimeWindow,
            page_url: window.location.href
          });
        }
      } else {
        navigationCount = 1;
      }
      
      lastNavigationTime = now;
      return originalReplaceState.apply(this, args);
    };

    // Monitor for suspicious user agent
    const userAgent = navigator.userAgent;
    if (isSuspiciousUserAgent(userAgent)) {
      trackSecurityEvent('suspicious_user_agent', {
        user_agent: userAgent,
        page_url: window.location.href
      });
    }

    // Monitor for suspicious referrer
    if (document.referrer && isSuspiciousReferrer(document.referrer)) {
      trackSecurityEvent('suspicious_referrer', {
        referrer: document.referrer,
        page_url: window.location.href
      });
    }

    // Block suspicious activities if threshold is exceeded
    if (suspiciousActivityCount > maxSuspiciousActivities) {
      blockSuspiciousActivity();
    }
  };

  const isSpamEmail = (email: string): boolean => {
    const spamPatterns = [
      /test@test\.com/i,
      /spam@spam\.com/i,
      /fake@fake\.com/i,
      /noreply@/i,
      /no-reply@/i,
      /donotreply@/i
    ];
    
    return spamPatterns.some(pattern => pattern.test(email));
  };

  const isSuspiciousUserAgent = (userAgent: string): boolean => {
    const suspiciousPatterns = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i,
      /curl/i,
      /wget/i,
      /python/i,
      /php/i,
      /java/i
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(userAgent));
  };

  const isSuspiciousReferrer = (referrer: string): boolean => {
    const suspiciousDomains = [
      'spam.com',
      'malicious.com',
      'suspicious.com'
    ];
    
    return suspiciousDomains.some(domain => referrer.includes(domain));
  };

  const trackSecurityEvent = (eventType: string, data: Record<string, any>) => {
    // Send security event to monitoring service
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/security-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_type: eventType,
          data,
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          ip_address: 'client-side', // Will be filled by server
          page_url: window.location.href
        })
      }).catch(() => {
        // Silently fail in case of network issues
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Event:', eventType, data);
    }
  };

  const blockSuspiciousActivity = () => {
    // Show security warning
    const warning = document.createElement('div');
    warning.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      font-family: Arial, sans-serif;
    `;
    warning.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <h2>Security Alert</h2>
        <p>We've detected suspicious activity on this page.</p>
        <p>Please refresh the page and try again.</p>
        <button onclick="window.location.reload()" style="padding: 10px 20px; margin-top: 20px; background: #00ffff; color: black; border: none; border-radius: 4px; cursor: pointer;">
          Refresh Page
        </button>
      </div>
    `;
    document.body.appendChild(warning);
  };

  return null;
};

export default SecurityEnhancer;