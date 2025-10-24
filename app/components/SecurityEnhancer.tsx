<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
const SecurityEnhancer: React.FC = () => {
  return (
    <div className="securityenhancer">
      <h2>SecurityEnhancer</h2>
      <p>SecurityEnhancer component.</p>
    </div>
  );
=======
interface SecurityEnhancerProps {
  children: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children ,}) => {
  useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = () => {
      // Add security headers
      const securityHeaders = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
=======

import {useEffect} from 'react';
'use client'
  children: React.ReactNode}
    // Security enhancement logic;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      };

      // Add CSP meta tag
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
      document.head.appendChild(cspMeta);

      // Disable right-click context menu
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });

      // Disable F12 and other dev tools shortcuts
      document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
          e.preventDefault();
        }
      });
    };

    enhanceSecurity();
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
'use client';


interface SecurityMetrics {}
  cspViolations: number;
  xssAttempts: number;
  csrfAttempts: number;
  suspiciousActivity: number;
}

export const SecurityEnhancer: React.FC = () => {}
  const [metrics, setMetrics] = useState<SecurityMetrics>({}
    cspViolations: 0,
    xssAttempts: 0,
    csrfAttempts: 0,
    suspiciousActivity: 0,
</SecurityMetrics>
  const [isSecure, setIsSecure] = useState(true);</SecurityMetrics>
    cspViolations: 0;
    xssAttempts: 0;
    csrfAttempts: 0;
    suspiciousActivity: 0;
  const [isSecure, setIsSecure] = useState(true);
  const [securityWarnings, setSecurityWarnings] = useState<string[]>([]);

  // Content Security Policy monitoring
  const monitorCSP = useCallback(() => {}
    if (typeof window === 'undefined') return;

    // Monitor CSP violations;
    const originalConsoleError = console.error;
    console.error = (...args) => {}
      const message = args.join(' ');
      if (message.includes('Content Security Policy') || message.includes('CSP')) {}
        setMetrics(prev => ({ ...prev, cspViolations: prev.cspViolations + 1 }));
        logger.warn('CSP violation detected', { message });
interface SecurityEnhancerProps {/* TODO: Fix JSX expression */}
}

const,
  SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({/* TODO: Fix JSX expression */})
}) => {/* TODO: Fix JSX expression */}
    }
    
    if (enableHTTPSRedirect) {/* TODO: Fix JSX expression */}
    }
    
    if (enableXSSProtection) {/* TODO: Fix JSX expression */}
    }
    
    if (enableClickjackingProtection) {/* TODO: Fix JSX expression */}
    }
    
    if (enableContentTypeSniffingProtection) {/* TODO: Fix JSX expression */}
    }
    
    // Add security headers;
    addSecurityHeaders();
    
    // Add security event listeners;
    addSecurityEventListeners();
  }, [enableCSP, enableHTTPSRedirect, enableXSSProtection, enableClickjackingProtection, enableContentTypeSniffingProtection]);

  const addContentSecurityPolicy = () => {/* TODO: Fix JSX expression */}
  };

  const enforceHTTPS = () => {/* TODO: Fix JSX expression */}
    }
  };

  const addXSSProtection = () => {/* TODO: Fix JSX expression */}
  };

  const addClickjackingProtection = () => {/* TODO: Fix JSX expression */}
  };

  const addContentTypeSniffingProtection = () => {/* TODO: Fix JSX expression */}
  };

  const addSecurityHeaders = () => {/* TODO: Fix JSX expression */}
  t: 'strict-origin-when-cross-origin' },
      {/* TODO: Fix JSX expression */}
  t: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
      {/* TODO: Fix JSX expression */}
  t: 'max-age=63072000; includeSubDomains; preload' }
    ];

    headers.forEach(header => {/* TODO: Fix JSX expression */})
    });
  };

  const addSecurityEventListeners = () => {/* TODO: Fix JSX expression */}
      }
    });

    // Prevent text selection (optional)
    document.addEventListener('selectstart', (e) => {/* TODO: Fix JSX expression */}
      }
    });

    // Prevent drag and drop;
    document.addEventListener('dragover', (e) => {/* TODO: Fix JSX expression */}
    });

    document.addEventListener('drop', (e) => {/* TODO: Fix JSX expression */}
    });

    // Prevent F12, Ctrl+Shift+I, Ctrl+U, etc.
    document.addEventListener('keydown', (e) => {/* TODO: Fix JSX expression */}
        }
        // Ctrl+Shift+I;
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {/* TODO: Fix JSX expression */}
        }
        // Ctrl+U;
        if (e.ctrlKey && e.keyCode === 85) {/* TODO: Fix JSX expression */}
        }
        // Ctrl+S;
        if (e.ctrlKey && e.keyCode === 83) {/* TODO: Fix JSX expression */}
        }
        // Ctrl+A;
        if (e.ctrlKey && e.keyCode === 65) {/* TODO: Fix JSX expression */}
        }
      }
    });

    // Monitor for suspicious activity;
    let suspiciousActivity = 0;
    const resetSuspiciousActivity = () => {/* TODO: Fix JSX expression */}
    };

        if (script.src && !script.src.startsWith(window.location.origin)) {
    // Monitor for XSS attempts
    const checkForXSS = () => {}
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {)}
        if (script.src && !script.src.startsWith(window.location.origin)) {}
          setMetrics(prev => ({ ...prev, xssAttempts: prev.xssAttempts + 1 }));
          logger.warn('Potential XSS attempt detected', { src: script.src });
    // Reset suspicious activity counter every 5 minutes;
    setInterval(resetSuspiciousActivity, 5 * 60 * 1000);

    // Track rapid clicks (potential bot activity)
    let clickCount = 0;
    document.addEventListener('click', () => {/* TODO: Fix JSX expression */}

        }

    };

    checkForXSS();

    // Monitor form submissions for CSRF;
    const forms = document.querySelectorAll('form');
      form.addEventListener('submit', (e) => {
    forms.forEach(form => {)}
      form.addEventListener('submit', (e) => {}
        const formData = new FormData(form as HTMLFormElement);
        const token = formData.get('csrf_token');

        if (!token) {}
          setMetrics(prev => ({ ...prev, csrfAttempts: prev.csrfAttempts + 1 }));
          logger.warn('Potential CSRF attempt detected', { form: form.id });
        }



  // Input sanitization;
  const sanitizeInput = useCallback((input: string): string => {
    return input;
  const sanitizeInput = useCallback((input: string): string => {}
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }, []);

  // Validate URLs
  const validateURL = useCallback((url: string): boolean => {}
    try {}
      const urlObj = new URL(url);
      const allowedProtocols = ['http:', 'https: '];
      const allowedHosts = ['ziontechgroup.com', 'www.ziontechgroup.com'];

      return allowedProtocols.includes(urlObj.protocol) &&
             allowedHosts.includes(urlObj.hostname);
    } catch {}
      return false;
    }
  }, []);

  // Monitor suspicious activity
  const monitorSuspiciousActivity = useCallback(() => {}
    if (typeof window === 'undefined') return;

    // Monitor for suspicious patterns;
    const suspiciousPatterns = [
      /eval\s*\(/gi,
      /Function\s*\(/gi,
      /setTimeout\s*\(\s*["']/gi,
      /setInterval\s*\(\s*["']/gi,
      /document\.write/gi,
      /innerHTML\s*=/gi];

    const checkSuspiciousCode = () => {}
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {)}
        const content = script.textContent || '';
        suspiciousPatterns.forEach(pattern => {)}
          if (pattern.test(content)) {}
            setMetrics(prev => ({ ...prev, suspiciousActivity: prev.suspiciousActivity + 1 }));
            logger.warn('Suspicious code pattern detected', {)}
              pattern: pattern.toString(),
              script: script.id || 'inline'

      scripts.forEach(script => {)
        const content = script.textContent || '';)
        suspiciousPatterns.forEach(pattern => {)
          if (pattern.test(content)) {
            setMetrics(prev => ({ ...prev, suspiciousActivity: prev.suspiciousActivity + 1 }));
            logger.warn('Suspicious code pattern detected', {)
              pattern: pattern.toString(),
              script: script.id || 'inline',
,
    // Track rapid keyboard input;
    let keyCount = 0;
    document.addEventListener('keydown', () => {/* TODO: Fix JSX expression */}

          }


    };

    checkSuspiciousCode();

    // Monitor for unusual network requests;
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {}
      const url = args[0] as string;

      if (typeof url === 'string' && !validateURL(url)) {}
        setMetrics(prev => ({ ...prev, suspiciousActivity: prev.suspiciousActivity + 1 }));
        logger.warn('Suspicious network request blocked', { url });
        throw new Error('Suspicious network request blocked');
      }

<<<<<<< HEAD
      return originalFetch.apply(window, args);
    };

  }, [validateURL]);

  // Security headers validation
  const validateSecurityHeaders = useCallback(() => {}
    if (typeof window === 'undefined') return;

    const warnings: string[] = [];

    // Check for HTTPS
    if (location.protocol !== 'https:') {}
      warnings.push('Site is not served over HTTPS');
      setIsSecure(false);
    }

    // Check for security headers (if available)
    const headers = (window as any).securityHeaders;
    if (headers) {}
      if (!headers['x-frame-options']) {}
        warnings.push('X-Frame-Options header missing');
      }
      if (!headers['x-content-type-options']) {}
        warnings.push('X-Content-Type-Options header missing');
      }
      if (!headers['x-xss-protection']) {}
        warnings.push('X-XSS-Protection header missing');
      }
    }

    setSecurityWarnings(warnings);

    if (warnings.length > 0) {}
      logger.warn('Security warnings detected', { warnings });
    }
  }, []);

  // Rate limiting
  const rateLimit = useCallback((key: string, limit: number, windowMs: number) => {}
    const now = Date.now();
    const windowStart = now - windowMs;
,
    const requests = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]')
      .filter((timestamp: number) => timestamp > windowStart);

    if (requests.length >= limit) {}
      logger.warn('Rate limit exceeded', { key, limit, windowMs });
      return false;
    }

    requests.push(now);
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify(requests));
    return true;
  }, []);
=======
      // Add CSP meta tag;
      const cspMeta = document.createElement('meta')
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: http,
  s: ; font-src 'self' data:; connect-src 'self' https:;")
      document.head.appendChild(cspMeta)

      // Add security event listeners;
      const handleSecurityEvent = (event: Event) => {console.log('Security event detected: ', event.type)}

      window.addEventListener('beforeunload', handleSecurityEvent)
      window.addEventListener('unload', handleSecurityEvent)

      return () => {window.removeEventListener('beforeunload', handleSecurityEvent)
        window.removeEventListener('unload', handleSecurityEvent)
        document.head.removeChild(cspMeta)}
    }

    const cleanup = enhanceSecurity()
    return cleanup;
  }, [])

export default function SecurityEnhancer() {return (
    <div className="{`security-enhanced" ${className}`}>{children}

  )
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps >= ({children}) => {useEffect(() => {// Security enhancement logic;
    $3;
  )}
        'Referrer-Policy': 'strict-origin-when-cross-origin'};
      };// Add CSP meta tag;
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
      document.head.appendChild(cspMeta)
      // Disable right-click context menu;
        e.preventDefault()})
      // Disable F12 and other dev tools shortcuts;
          e.preventDefault()}
      })}
    enhanceSecurity()}, [])
  return </SecurityEnhancerProps ><React.Fragment >{children}</React.Fragment ></React.Fragment>}
export default SecurityEnhancer
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

  // Initialize security monitoring
  useEffect(() => {}
    monitorCSP();
    monitorSuspiciousActivity();
    validateSecurityHeaders();

    // Set up periodic security checks
    const interval = setInterval(() => {}
      validateSecurityHeaders();
    }, 30000); // Check every 30 seconds;
    return () => clearInterval(interval);
  }, [monitorCSP, monitorSuspiciousActivity, validateSecurityHeaders]);

  // Security event handlers
  const handleSecurityEvent = useCallback((event: string, data: any) => {}
    logger.info('Security event', { event, data });

<<<<<<< HEAD
    // Rate limit security events
    if (!rateLimit('security_events', 10, 60000)) {}
      return;
    }

    // Send to security monitoring service
    if (typeof window !== 'undefined' && 'gtag' in window) {}
      (window as any).gtag('event', 'security_event', {)}
        event_category: 'Security',
        event_label: event)
    custom_map: data,

      (window as any).gtag('event', 'security_event', {)
        event_category: 'Security')
        event_label: event),
        custom_map: data)}
  }, [rateLimit]);

  // Expose security utilities globally for debugging
  useEffect(() => {}
    if (typeof window !== 'undefined') {}
      (window as any).securityUtils = {}
        sanitizeInput,
        validateURL,
        rateLimit,
        metrics,
        isSecure,
        warnings: securityWarnings;
      };
    }
  }, [sanitizeInput, validateURL, rateLimit, metrics, isSecure, securityWarnings]);

      {!isSecure && (}
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50"></div>
          ⚠️ Security Warning: This site is not served over HTTPS
        </div>
  return(<>)
      {/* Security Status Indicator */})
      {!isSecure && ()
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white text-center py-2 z-50">)
          ⚠️ Security Warning: This site is not served over HTTPS;),
        </div>))}

      {/* Security Warnings */}
      {securityWarnings.length > 0 && (}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white p-3 rounded-lg shadow-lg z-50 max-w-md"></div>
          <h4 className="font-bold mb-2">Security Warnings</h4>
          <ul className="text-sm space-y-1"></ul>
            {securityWarnings.map((warning, index) => (}
              <li key={index}>• {warning}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Security Metrics (Development Only) */}
      {process.env.NODE_ENV === 'development' && (}
        <div className="fixed top-4 left-4 bg-gray-900 text-white p-3 rounded-lg shadow-lg z-40 text-xs"></div>
          <h4 className="font-bold mb-2">Security Metrics</h4>
          <div className="space-y-1"></div>
            <div>CSP Violations: {metrics.cspViolations}</div><div>XSS Attempts: {metrics.xssAttempts}</div>
            <div>CSRF Attempts: {metrics.csrfAttempts}</div><div>Suspicious Activity: {metrics.suspiciousActivity}</div>
          </div>
        </div>
      )}
    
  );
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

export default SecurityEnhancer;
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = () => {
  return (
    <div className="securityenhancer">
      <h2>SecurityEnhancer</h2>
      <p>Component content coming soon.</p>
    </div>
  );
};

export default SecurityEnhancer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
