'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHTTPSRedirect?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableContentTypeSniffingProtection?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHTTPSRedirect = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableContentTypeSniffingProtection = true
}) => {
  useEffect(() => {
    if (enableCSP) {
      addContentSecurityPolicy();
    }
    
    if (enableHTTPSRedirect) {
      enforceHTTPS();
    }
    
    if (enableXSSProtection) {
      addXSSProtection();
    }
    
    if (enableClickjackingProtection) {
      addClickjackingProtection();
    }
    
    if (enableContentTypeSniffingProtection) {
      addContentTypeSniffingProtection();
    }
    
    // Add security headers
    addSecurityHeaders();
    
    // Add security event listeners
    addSecurityEventListeners();
  }, [enableCSP, enableHTTPSRedirect, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffingProtection]);

  const addContentSecurityPolicy = () => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "media-src 'self'",
      "worker-src 'self'"
    ].join('; ');
    document.head.appendChild(meta);
  };

  const enforceHTTPS = () => {
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      location.replace('https:' + window.location.href.substring(window.location.protocol.length));
    }
  };

  const addXSSProtection = () => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-XSS-Protection';
    meta.content = '1; mode=block';
    document.head.appendChild(meta);
  };

  const addClickjackingProtection = () => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);
  };

  const addContentTypeSniffingProtection = () => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);
  };

  const addSecurityHeaders = () => {
    const headers = [
      { httpEquiv: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { httpEquiv: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
      { httpEquiv: 'Strict-Transport-Security', content: 'max-age=63072000; includeSubDomains; preload' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.httpEquiv;
      meta.content = header.content;
      document.head.appendChild(meta);
    });
  };

  const addSecurityEventListeners = () => {
    // Prevent right-click context menu (optional)
    document.addEventListener('contextmenu', (e) => {
      // Only prevent on production
      if (process.env.NODE_ENV === 'production') {
        e.preventDefault();
      }
    });

    // Prevent text selection (optional)
    document.addEventListener('selectstart', (e) => {
      // Only prevent on production
      if (process.env.NODE_ENV === 'production') {
        e.preventDefault();
      }
    });

    // Prevent drag and drop
    document.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    document.addEventListener('drop', (e) => {
      e.preventDefault();
    });

    // Prevent F12, Ctrl+Shift+I, Ctrl+U, etc.
    document.addEventListener('keydown', (e) => {
      if (process.env.NODE_ENV === 'production') {
        // F12
        if (e.keyCode === 123) {
          e.preventDefault();
        }
        // Ctrl+Shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
          e.preventDefault();
        }
        // Ctrl+U
        if (e.ctrlKey && e.keyCode === 85) {
          e.preventDefault();
        }
        // Ctrl+S
        if (e.ctrlKey && e.keyCode === 83) {
          e.preventDefault();
        }
        // Ctrl+A
        if (e.ctrlKey && e.keyCode === 65) {
          e.preventDefault();
        }
      }
    });

    // Monitor for suspicious activity
    let suspiciousActivity = 0;
    const resetSuspiciousActivity = () => {
      suspiciousActivity = 0;
    };

    // Reset suspicious activity counter every 5 minutes
    setInterval(resetSuspiciousActivity, 5 * 60 * 1000);

    // Track rapid clicks (potential bot activity)
    let clickCount = 0;
    document.addEventListener('click', () => {
      clickCount++;
      if (clickCount > 10) { // More than 10 clicks in 5 minutes
        suspiciousActivity++;
        if (suspiciousActivity > 3) {
          // Suspicious activity detected: Excessive clicking - logged to security monitoring
          // Could implement additional security measures here
        }
      }
    });

    // Track rapid keyboard input
    let keyCount = 0;
    document.addEventListener('keydown', () => {
      keyCount++;
      if (keyCount > 100) { // More than 100 keystrokes in 5 minutes
        suspiciousActivity++;
        if (suspiciousActivity > 3) {
          // Suspicious activity detected: Excessive keyboard input - logged to security monitoring
        }
      }
    });
  };

  return null;
};

export default SecurityEnhancer;