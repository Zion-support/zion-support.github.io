'use client';
import React, { useEffect } from 'react';
import Head from 'react-helmet-async';

interface EnhancedSecurityProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableReferrerPolicy?: boolean;
  enablePermissionsPolicy?: boolean;
  enableFeaturePolicy?: boolean;
  customCSP?: string;
}

const EnhancedSecurity: React.FC<EnhancedSecurityProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true,
  enableReferrerPolicy = true,
  enablePermissionsPolicy = true,
  enableFeaturePolicy = true,
  customCSP
}) => {
  // Content Security Policy
  const generateCSP = () => {
    if (customCSP) return customCSP;

    const directives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https: blob:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https: wss:",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
      "block-all-mixed-content"
    ];

    return directives.join('; ');
  };

  // Permissions Policy
  const generatePermissionsPolicy = () => {
    const policies = [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'interest-cohort=()',
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
      'document-domain=()',
      'encrypted-media=()',
      'execution-while-not-rendered=()',
      'execution-while-out-of-viewport=()',
      'fullscreen=(self)',
      'gamepad=()',
      'layout-animations=()',
      'legacy-image-formats=()',
      'midi=()',
      'notifications=()',
      'oversized-images=()',
      'picture-in-picture=()',
      'publickey-credentials-get=()',
      'screen-wake-lock=()',
      'sync-xhr=()',
      'unoptimized-images=()',
      'unsized-media=()',
      'vibrate=()',
      'wake-lock=()',
      'web-share=()',
      'xr-spatial-tracking=()'
    ];

    return policies.join(', ');
  };

  // Feature Policy (legacy)
  const generateFeaturePolicy = () => {
    const policies = [
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
      'document-domain \'none\'',
      'encrypted-media \'none\'',
      'execution-while-not-rendered \'none\'',
      'execution-while-out-of-viewport \'none\'',
      'fullscreen \'self\'',
      'gamepad \'none\'',
      'layout-animations \'none\'',
      'legacy-image-formats \'none\'',
      'midi \'none\'',
      'notifications \'none\'',
      'oversized-images \'none\'',
      'picture-in-picture \'none\'',
      'publickey-credentials-get \'none\'',
      'screen-wake-lock \'none\'',
      'sync-xhr \'none\'',
      'unoptimized-images \'none\'',
      'unsized-media \'none\'',
      'vibrate \'none\'',
      'wake-lock \'none\'',
      'web-share \'none\'',
      'xr-spatial-tracking \'none\''
    ];

    return policies.join('; ');
  };

  // Security monitoring
  useEffect(() => {
    const monitorSecurity = () => {
      // Monitor for potential XSS attempts
      const originalInnerHTML = Element.prototype.innerHTML;
      Element.prototype.innerHTML = function(value: string) {
        if (typeof value === 'string' && /<script/i.test(value)) {
          console.warn('Potential XSS attempt detected:', value);
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'security_violation', {
              event_category: 'Security',
              event_label: 'XSS Attempt',
              value: 1
            });
          }
        }
        return originalInnerHTML.call(this, value);
      };

      // Monitor for potential CSRF attempts
      const originalFetch = window.fetch;
      window.fetch = function(input: RequestInfo | URL, init?: RequestInit) {
        const url = typeof input === 'string' ? input : input.toString();
        
        // Check for suspicious patterns
        if (url.includes('javascript:') || url.includes('data:') || url.includes('vbscript:')) {
          console.warn('Potential CSRF attempt detected:', url);
          if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as any).gtag('event', 'security_violation', {
              event_category: 'Security',
              event_label: 'CSRF Attempt',
              value: 1
            });
          }
        }
        
        return originalFetch.call(this, input, init);
      };

      // Monitor for suspicious console access
      const originalConsole = window.console;
      const suspiciousMethods = ['log', 'warn', 'error', 'info'];
      
      suspiciousMethods.forEach(method => {
        const originalMethod = originalConsole[method as keyof Console];
        originalConsole[method as keyof Console] = function(...args: any[]) {
          // Check for suspicious patterns in console output
          const output = args.join(' ');
          if (output.includes('password') || output.includes('token') || output.includes('secret')) {
            console.warn('Potential sensitive data exposure in console');
            if (typeof window !== 'undefined' && 'gtag' in window) {
              (window as any).gtag('event', 'security_violation', {
                event_category: 'Security',
                event_label: 'Sensitive Data Exposure',
                value: 1
              });
            }
          }
          return originalMethod.call(this, ...args);
        };
      });
    };

    monitorSecurity();
  }, []);

  return (
    <Head>
      {/* Content Security Policy */}
      {enableCSP && (
        <meta httpEquiv="Content-Security-Policy" content={generateCSP()} />
      )}

      {/* HTTP Strict Transport Security */}
      {enableHSTS && (
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
      )}

      {/* X-Content-Type-Options */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />

      {/* X-Frame-Options */}
      {enableClickjackingProtection && (
        <meta httpEquiv="X-Frame-Options" content="DENY" />
      )}

      {/* X-XSS-Protection */}
      {enableXSSProtection && (
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      )}

      {/* Referrer Policy */}
      {enableReferrerPolicy && (
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      )}

      {/* Permissions Policy */}
      {enablePermissionsPolicy && (
        <meta httpEquiv="Permissions-Policy" content={generatePermissionsPolicy()} />
      )}

      {/* Feature Policy (legacy) */}
      {enableFeaturePolicy && (
        <meta httpEquiv="Feature-Policy" content={generateFeaturePolicy()} />
      )}

      {/* Additional Security Headers */}
      <meta httpEquiv="X-DNS-Prefetch-Control" content="off" />
      <meta httpEquiv="X-Download-Options" content="noopen" />
      <meta httpEquiv="X-Permitted-Cross-Domain-Policies" content="none" />
      <meta httpEquiv="Cross-Origin-Embedder-Policy" content="require-corp" />
      <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
      <meta httpEquiv="Cross-Origin-Resource-Policy" content="same-origin" />

      {/* Security-related meta tags */}
      <meta name="format-detection" content="telephone=no,address=no,email=no" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  );
};

export default EnhancedSecurity;