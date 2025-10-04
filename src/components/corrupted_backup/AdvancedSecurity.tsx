import React, { useEffect, useState, useCallback } from 'react';

interface SecurityConfig {
  enableCSP?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  enableHTTPSRedirect?: boolean;
  enableSecureHeaders?: boolean;
  enableContentSecurityPolicy?: boolean;
  enableSubresourceIntegrity?: boolean;
  enableTrustedTypes?: boolean;
  debugMode?: boolean;
}

interface SecurityEvent {
  type:
    | 'xss_attempt'
    | 'clickjacking_attempt'
    | 'csp_violation'
    | 'sri_failure'
    | 'trusted_types_violation';
  details: unknown;
  timestamp: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

interface AdvancedSecurityProps {
  config?: SecurityConfig;
  onSecurityEvent?: (event: SecurityEvent) => void;
}

const AdvancedSecurity: React.FC<AdvancedSecurityProps> = ({
  config = {},
  onSecurityEvent,
}) => {
  const [securityStatus, setSecurityStatus] = useState({
    cspEnabled: false,
    xssProtectionEnabled: false,
    clickjackingProtectionEnabled: false,
    trustedTypesEnabled: false,
    sriEnabled: false,
  });

  const {
    enableXSSProtection: xssProtectionEnabled = true,
    enableClickjackingProtection: clickjackingProtectionEnabled = true,
    enableHTTPSRedirect: httpsRedirectEnabled = true,
    enableContentSecurityPolicy: contentSecurityPolicyEnabled = true,
    enableSubresourceIntegrity: subresourceIntegrityEnabled = true,
    enableTrustedTypes: trustedTypesEnabled = true,
    debugMode = process.env.NODE_ENV === 'development',
  } = config;

  // Log security events
  const logSecurityEvent = useCallback(
    (event: SecurityEvent) => {
      if (debugMode) {
        console.warn('Security Event:', event);
      }

      if (onSecurityEvent) {
        onSecurityEvent(event);
      }

      // In production, you would send this to your security monitoring service
      if (process.env.NODE_ENV === 'production') {
        // Example: sendToSecurityService(event);
        console.warn('Security event detected:', event.type, event.details);
      }
    },
    [debugMode, onSecurityEvent],
  );

  // Enable Content Security Policy
  const enableContentSecurityPolicy = useCallback(() => {
    if (!contentSecurityPolicyEnabled) return;

    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      'upgrade-insecure-requests',
    ].join('; ');

    // Set CSP header via meta tag
    const metaCSP = document.createElement('meta');
    metaCSP.httpEquiv = 'Content-Security-Policy';
    metaCSP.content = cspDirectives;
    document.head.appendChild(metaCSP);

    // Monitor CSP violations
    document.addEventListener('securitypolicyviolation', event => {
      logSecurityEvent({
        type: 'csp_violation',
        details: {
          violatedDirective: event.violatedDirective,
          blockedURI: event.blockedURI,
          sourceFile: event.sourceFile,
          lineNumber: event.lineNumber,
          columnNumber: event.columnNumber,
        },
        timestamp: new Date().toISOString(),
        severity: 'medium',
      });
    });

    setSecurityStatus(prev => ({ ...prev, cspEnabled: true }));

    if (debugMode) {
      console.log('Content Security Policy enabled');
    }
  }, [contentSecurityPolicyEnabled, logSecurityEvent, debugMode]);

  // Enable XSS Protection
  const enableXSSProtection = useCallback(() => {
    if (!xssProtectionEnabled) return;

    // Set X-XSS-Protection header via meta tag
    const metaXSS = document.createElement('meta');
    metaXSS.setAttribute('http-equiv', 'X-XSS-Protection');
    metaXSS.setAttribute('content', '1; mode=block');
    document.head.appendChild(metaXSS);

    // Monitor for potential XSS attempts
    const originalInnerHTML = Object.getOwnPropertyDescriptor(
      Element.prototype,
      'innerHTML',
    )?.set;
    if (originalInnerHTML) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function (value: string) {
          if (value && typeof value === 'string') {
            // Check for potential XSS patterns
            const xssPatterns = [
              /<script[^>]*>.*?<\/script>/gi,
              /javascript:/gi,
              /on\w+\s*=/gi,
              /<iframe[^>]*>/gi,
              /<object[^>]*>/gi,
              /<embed[^>]*>/gi,
            ];

            const hasXSSPattern = xssPatterns.some(pattern =>
              pattern.test(value),
            );
            if (hasXSSPattern) {
              logSecurityEvent({
                type: 'xss_attempt',
                details: {
                  suspiciousContent: value.substring(0, 200), // Truncate for logging
                  element: (this as Element).tagName,
                  method: 'innerHTML',
                },
                timestamp: new Date().toISOString(),
                severity: 'high',
              });
            }
          }
          originalInnerHTML.call(this, value);
        },
        configurable: true,
      });
    }

    setSecurityStatus(prev => ({ ...prev, xssProtectionEnabled: true }));

    if (debugMode) {
      console.log('XSS Protection enabled');
    }
  }, [xssProtectionEnabled, logSecurityEvent, debugMode]);

  // Enable Clickjacking Protection
  const enableClickjackingProtection = useCallback(() => {
    if (!clickjackingProtectionEnabled) return;

    // Set X-Frame-Options header via meta tag
    const metaFrameOptions = document.createElement('meta');
    metaFrameOptions.httpEquiv = 'X-Frame-Options';
    metaFrameOptions.content = 'DENY';
    document.head.appendChild(metaFrameOptions);

    // Monitor for iframe creation attempts
    const originalCreateElement = document.createElement;
    document.createElement = function (tagName: string) {
      const element = originalCreateElement.call(this, tagName);

      if (tagName.toLowerCase() === 'iframe') {
        logSecurityEvent({
          type: 'clickjacking_attempt',
          details: {
            element: 'iframe',
            src: element.getAttribute('src'),
            method: 'createElement',
          },
          timestamp: new Date().toISOString(),
          severity: 'medium',
        });
      }

      return element;
    };

    setSecurityStatus(prev => ({
      ...prev,
      clickjackingProtectionEnabled: true,
    }));

    if (debugMode) {
      console.log('Clickjacking Protection enabled');
    }
  }, [clickjackingProtectionEnabled, logSecurityEvent, debugMode]);

  // Enable Trusted Types
  const enableTrustedTypes = useCallback(() => {
    if (!trustedTypesEnabled || !('trustedTypes' in window)) return;

    try {
      // Create a trusted types policy
      (
        window as Window & {
          trustedTypes?: {
            createPolicy: (name: string, policy: unknown) => unknown;
          };
        }
      ).trustedTypes?.createPolicy('default', {
        createHTML: (input: string) => {
          // Sanitize HTML input
          const div = document.createElement('div');
          div.textContent = input;
          return div.innerHTML;
        },
        createScript: (input: string) => {
          // Block script creation
          logSecurityEvent({
            type: 'trusted_types_violation',
            details: {
              type: 'script',
              content: input.substring(0, 100),
            },
            timestamp: new Date().toISOString(),
            severity: 'high',
          });
          throw new Error('Script creation blocked by Trusted Types policy');
        },
      } as unknown);

      setSecurityStatus(prev => ({ ...prev, trustedTypesEnabled: true }));

      if (debugMode) {
        console.log('Trusted Types enabled');
      }
    } catch (error) {
      if (debugMode) {
        console.warn('Failed to enable Trusted Types:', error);
      }
    }
  }, [trustedTypesEnabled, logSecurityEvent, debugMode]);

  // Enable Subresource Integrity monitoring
  const enableSubresourceIntegrity = useCallback(() => {
    if (!subresourceIntegrityEnabled) return;

    // Monitor script and link elements for SRI
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;

            if (element.tagName === 'SCRIPT' || element.tagName === 'LINK') {
              const src =
                element.getAttribute('src') || element.getAttribute('href');
              const integrity = element.getAttribute('integrity');

              if (
                src &&
                !integrity &&
                !src.startsWith('data:') &&
                !src.startsWith('blob:')
              ) {
                logSecurityEvent({
                  type: 'sri_failure',
                  details: {
                    element: element.tagName,
                    src: src,
                    missingIntegrity: true,
                  },
                  timestamp: new Date().toISOString(),
                  severity: 'medium',
                });
              }
            }
          }
        });
      });
    });

    observer.observe(document.head, { childList: true, subtree: true });

    setSecurityStatus(prev => ({ ...prev, sriEnabled: true }));

    if (debugMode) {
      console.log('Subresource Integrity monitoring enabled');
    }

    return () => observer.disconnect();
  }, [subresourceIntegrityEnabled, logSecurityEvent, debugMode]);

  // Enable HTTPS redirect
  const enableHTTPSRedirect = useCallback(() => {
    if (!httpsRedirectEnabled || window.location.protocol === 'https:') return;

    // Redirect to HTTPS in production
    if (process.env.NODE_ENV === 'production') {
      window.location.replace(
        `https:${window.location.href.substring(window.location.protocol.length)}`,
      );
    }
  }, [httpsRedirectEnabled]);

  // Initialize security measures
  useEffect(() => {
    const initializeSecurity = () => {
      enableContentSecurityPolicy();
      enableXSSProtection();
      enableClickjackingProtection();
      enableTrustedTypes();
      enableHTTPSRedirect();

      const cleanupSRI = enableSubresourceIntegrity();

      return cleanupSRI;
    };

    const cleanup = initializeSecurity();
    return cleanup;
  }, [
    enableContentSecurityPolicy,
    enableXSSProtection,
    enableClickjackingProtection,
    enableTrustedTypes,
    enableHTTPSRedirect,
    enableSubresourceIntegrity,
  ]);

  // Security status indicator (development only)
  if (debugMode && process.env.NODE_ENV === 'development') {
    return (
      <div
        style={{
          position: 'fixed',
          bottom: '10px',
          left: '10px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 9999,
          fontFamily: 'monospace',
        }}
      >
        <div>🔒 Security Status:</div>
        <div>• CSP: {securityStatus.cspEnabled ? '✅' : '❌'}</div>
        <div>• XSS: {securityStatus.xssProtectionEnabled ? '✅' : '❌'}</div>
        <div>
          • Frame: {securityStatus.clickjackingProtectionEnabled ? '✅' : '❌'}
        </div>
        <div>
          • Trusted Types: {securityStatus.trustedTypesEnabled ? '✅' : '❌'}
        </div>
        <div>• SRI: {securityStatus.sriEnabled ? '✅' : '❌'}</div>
      </div>
    );
  }

  return null; // This component doesn't render anything visible in production
};

export default AdvancedSecurity;
