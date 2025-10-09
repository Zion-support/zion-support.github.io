'use client';
import React, { useEffect, useCallback } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableContentTypeOptions?: boolean;
  enableReferrerPolicy?: boolean;
  enablePermissionsPolicy?: boolean;
  enableFeaturePolicy?: boolean;
  enableCORS?: boolean;
  enableSecureCookies?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableContentTypeOptions = true,
  enableReferrerPolicy = true,
  enablePermissionsPolicy = true,
  enableFeaturePolicy = true,
  enableCORS = true,
  enableSecureCookies = true
}) => {
  // Content Security Policy
  useEffect(() => {
    if (enableCSP) {
      const csp = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
        "frame-src 'none'",
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
    }
  }, [enableCSP]);

  // HTTP Strict Transport Security
  useEffect(() => {
    if (enableHSTS && location.protocol === 'https:') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Strict-Transport-Security';
      meta.content = 'max-age=31536000; includeSubDomains; preload';
      document.head.appendChild(meta);
    }
  }, [enableHSTS]);

  // XSS Protection
  useEffect(() => {
    if (enableXSSProtection) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-XSS-Protection';
      meta.content = '1; mode=block';
      document.head.appendChild(meta);
    }
  }, [enableXSSProtection]);

  // Clickjacking Protection
  useEffect(() => {
    if (enableClickjackingProtection) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Frame-Options';
      meta.content = 'DENY';
      document.head.appendChild(meta);
    }
  }, [enableClickjackingProtection]);

  // Content Type Options
  useEffect(() => {
    if (enableContentTypeOptions) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Content-Type-Options';
      meta.content = 'nosniff';
      document.head.appendChild(meta);
    }
  }, [enableContentTypeOptions]);

  // Referrer Policy
  useEffect(() => {
    if (enableReferrerPolicy) {
      const meta = document.createElement('meta');
      meta.name = 'referrer';
      meta.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(meta);
    }
  }, [enableReferrerPolicy]);

  // Permissions Policy
  useEffect(() => {
    if (enablePermissionsPolicy) {
      const permissions = [
        'camera=()',
        'microphone=()',
        'geolocation=()',
        'payment=()',
        'usb=()',
        'magnetometer=()',
        'gyroscope=()',
        'accelerometer=()',
        'ambient-light-sensor=()',
        'autoplay=()',
        'battery=()',
        'bluetooth=()',
        'display-capture=()',
        'fullscreen=(self)',
        'gamepad=()',
        'midi=()',
        'nfc=()',
        'notifications=()',
        'persistent-storage=()',
        'push=()',
        'screen-wake-lock=()',
        'speaker=()',
        'sync-xhr=()',
        'vibrate=()',
        'web-share=()',
        'xr-spatial-tracking=()'
      ].join(', ');

      const meta = document.createElement('meta');
      meta.httpEquiv = 'Permissions-Policy';
      meta.content = permissions;
      document.head.appendChild(meta);
    }
  }, [enablePermissionsPolicy]);

  // Feature Policy (legacy)
  useEffect(() => {
    if (enableFeaturePolicy) {
      const features = [
        'camera \'none\'',
        'microphone \'none\'',
        'geolocation \'none\'',
        'payment \'none\'',
        'usb \'none\'',
        'magnetometer \'none\'',
        'gyroscope \'none\'',
        'accelerometer \'none\'',
        'ambient-light-sensor \'none\'',
        'autoplay \'none\'',
        'battery \'none\'',
        'bluetooth \'none\'',
        'display-capture \'none\'',
        'fullscreen \'self\'',
        'gamepad \'none\'',
        'midi \'none\'',
        'nfc \'none\'',
        'notifications \'none\'',
        'persistent-storage \'none\'',
        'push \'none\'',
        'screen-wake-lock \'none\'',
        'speaker \'none\'',
        'sync-xhr \'none\'',
        'vibrate \'none\'',
        'web-share \'none\'',
        'xr-spatial-tracking \'none\''
      ].join('; ');

      const meta = document.createElement('meta');
      meta.httpEquiv = 'Feature-Policy';
      meta.content = features;
      document.head.appendChild(meta);
    }
  }, [enableFeaturePolicy]);

  // CORS configuration
  useEffect(() => {
    if (enableCORS) {
      // This would typically be handled server-side
      console.log('CORS configuration would be handled server-side');
    }
  }, [enableCORS]);

  // Secure cookies
  useEffect(() => {
    if (enableSecureCookies) {
      // This would typically be handled server-side
      console.log('Secure cookies configuration would be handled server-side');
    }
  }, [enableSecureCookies]);

  // Security monitoring
  useEffect(() => {
    setupSecurityMonitoring();
  }, []);

  const setupSecurityMonitoring = useCallback(() => {
    // Monitor for potential security issues
    monitorXSSAttempts();
    monitorCSRFAttempts();
    monitorClickjackingAttempts();
    monitorDataExfiltration();
    monitorSuspiciousActivity();
  }, []);

  const monitorXSSAttempts = useCallback(() => {
    // Monitor for script injection attempts
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      
      if (tagName.toLowerCase() === 'script') {
        console.warn('Script element creation detected');
        // In a real implementation, you might want to sanitize or block this
      }
      
      return element;
    };
  }, []);

  const monitorCSRFAttempts = useCallback(() => {
    // Monitor for CSRF attempts
    const originalFetch = window.fetch;
    window.fetch = function(input: RequestInfo | URL, init?: RequestInit) {
      // Check for CSRF tokens in requests
      if (init?.method && init.method !== 'GET' && init.method !== 'HEAD') {
        const token = document.querySelector('meta[name="csrf-token"]');
        if (!token && !init.headers?.['X-CSRF-Token']) {
          console.warn('Potential CSRF attempt detected - missing CSRF token');
        }
      }
      
      return originalFetch.call(this, input, init);
    };
  }, []);

  const monitorClickjackingAttempts = useCallback(() => {
    // Monitor for clickjacking attempts
    if (window !== window.top) {
      console.warn('Potential clickjacking attempt detected - page is in iframe');
      // In a real implementation, you might want to redirect or show a warning
    }
  }, []);

  const monitorDataExfiltration = useCallback(() => {
    // Monitor for data exfiltration attempts
    const originalPostMessage = window.postMessage;
    window.postMessage = function(message: any, targetOrigin: string) {
      // Log all postMessage calls for monitoring
      console.log('PostMessage detected:', { message, targetOrigin });
      return originalPostMessage.call(this, message, targetOrigin);
    };
  }, []);

  const monitorSuspiciousActivity = useCallback(() => {
    // Monitor for suspicious activity
    let suspiciousActivityCount = 0;
    const suspiciousThreshold = 10;
    
    const monitorActivity = () => {
      // Monitor rapid DOM changes
      const observer = new MutationObserver((mutations) => {
        if (mutations.length > 50) {
          suspiciousActivityCount++;
          if (suspiciousActivityCount > suspiciousThreshold) {
            console.warn('Suspicious activity detected - excessive DOM mutations');
          }
        }
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });
    };
    
    // Start monitoring after page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', monitorActivity);
    } else {
      monitorActivity();
    }
  }, []);

  // Security headers validation
  useEffect(() => {
    validateSecurityHeaders();
  }, []);

  const validateSecurityHeaders = useCallback(() => {
    // This would typically be done server-side
    // Here we can check if security headers are properly set
    const securityHeaders = [
      'Content-Security-Policy',
      'X-Frame-Options',
      'X-Content-Type-Options',
      'X-XSS-Protection',
      'Strict-Transport-Security',
      'Referrer-Policy',
      'Permissions-Policy'
    ];
    
    console.log('Security headers validation would be done server-side');
  }, []);

  // Security event reporting
  const reportSecurityEvent = useCallback((event: string, details: any) => {
    // Report security events to monitoring service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'security_event', {
        event_category: 'Security',
        event_label: event,
        value: 1,
        custom_parameter_1: JSON.stringify(details)
      });
    }
  }, []);

  return null;
};

export default SecurityEnhancer;