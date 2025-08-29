import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

interface SecurityStatus {
  csp: boolean;
  hsts: boolean;
  xss: boolean;
  clickjacking: boolean;
  referrerPolicy: boolean;
  permissionsPolicy: boolean;
  secureCookies: boolean;
  overall: 'secure' | 'warning' | 'insecure';
}

export const SecurityEnhancer: React.FC = () => {
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    csp: false,
    hsts: false,
    xss: false,
    clickjacking: false,
    referrerPolicy: false,
    permissionsPolicy: false,
    secureCookies: false,
    overall: 'insecure'
  });

  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check security headers and policies
    checkSecurityStatus();
    
    // Set up security monitoring
    setupSecurityMonitoring();
    
    // Apply security enhancements
    applySecurityEnhancements();
  }, []);

  const checkSecurityStatus = async () => {
    try {
      // Check CSP header
      const cspHeader = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      const csp = !!cspHeader;
      
      // Check HSTS (this would typically be done server-side)
      const hsts = window.location.protocol === 'https:';
      
      // Check XSS protection
      const xssHeader = document.querySelector('meta[http-equiv="X-XSS-Protection"]');
      const xss = !!xssHeader;
      
      // Check clickjacking protection
      const frameOptionsHeader = document.querySelector('meta[http-equiv="X-Frame-Options"]');
      const clickjacking = !!frameOptionsHeader;
      
      // Check referrer policy
      const referrerPolicyHeader = document.querySelector('meta[name="referrer"]');
      const referrerPolicy = !!referrerPolicyHeader;
      
      // Check permissions policy
      const permissionsPolicyHeader = document.querySelector('meta[http-equiv="Permissions-Policy"]');
      const permissionsPolicy = !!permissionsPolicyHeader;
      
      // Check secure cookies
      const secureCookies = document.cookie.includes('Secure') || document.cookie.includes('HttpOnly');
      
      const newStatus: SecurityStatus = {
        csp,
        hsts,
        xss,
        clickjacking,
        referrerPolicy,
        permissionsPolicy,
        secureCookies,
        overall: calculateOverallStatus({ csp, hsts, xss, clickjacking, referrerPolicy, permissionsPolicy, secureCookies })
      };
      
      setSecurityStatus(newStatus);
    } catch (error) {
      console.warn('Security status check failed:', error);
    }
  };

  const calculateOverallStatus = (status: Omit<SecurityStatus, 'overall'>): SecurityStatus['overall'] => {
    const secureCount = Object.values(status).filter(Boolean).length;
    const totalCount = Object.keys(status).length;
    const percentage = (secureCount / totalCount) * 100;
    
    if (percentage >= 80) return 'secure';
    if (percentage >= 60) return 'warning';
    return 'insecure';
  };

  const setupSecurityMonitoring = () => {
    // Monitor for potential security issues
    const securityObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Check for suspicious script injections
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'SCRIPT' && !element.hasAttribute('data-secure')) {
                console.warn('Potential unauthorized script injection detected');
                // In production, you might want to block this or report it
              }
            }
          });
        }
      });
    });

    securityObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Monitor for console errors that might indicate security issues
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const message = args.join(' ');
      if (message.includes('CSP') || message.includes('XSS') || message.includes('security')) {
        // Log security-related console errors
        console.warn('Security-related error detected:', message);
      }
      originalConsoleError.apply(console, args);
    };

    // Cleanup function
    return () => {
      securityObserver.disconnect();
      console.error = originalConsoleError;
    };
  };

  const applySecurityEnhancements = () => {
    // Add security meta tags if they don't exist
    const securityMetaTags = [
      {
        name: 'referrer',
        content: 'strict-origin-when-cross-origin'
      },
      {
        'http-equiv': 'X-Content-Type-Options',
        content: 'nosniff'
      },
      {
        'http-equiv': 'X-Frame-Options',
        content: 'DENY'
      },
      {
        'http-equiv': 'X-XSS-Protection',
        content: '1; mode=block'
      },
      {
        'http-equiv': 'Permissions-Policy',
        content: 'geolocation=(), microphone=(), camera=()'
      }
    ];

    securityMetaTags.forEach((tag) => {
      const key = Object.keys(tag)[0];
      const value = tag[key as keyof typeof tag];
      const existingTag = document.querySelector(`meta[${key}="${value}"]`);
      
      if (!existingTag) {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute(key, value);
        document.head.appendChild(metaTag);
      }
    });

    // Add CSP if not present
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const cspMeta = document.createElement('meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:; frame-ancestors 'none';");
      document.head.appendChild(cspMeta);
    }

    // Secure existing cookies
    if (document.cookie) {
      const cookies = document.cookie.split(';');
      cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name && value && !cookie.includes('Secure') && !cookie.includes('HttpOnly')) {
          // Note: This is a demonstration - in practice, cookies should be set server-side
          console.log(`Cookie ${name} should be secured with Secure and HttpOnly flags`);
        }
      });
    }
  };

  const getStatusIcon = (status: boolean) => {
    return status ? (
      <CheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <XCircle className="w-5 h-5 text-red-400" />
    );
  };

  const getOverallStatusColor = (status: SecurityStatus['overall']) => {
    switch (status) {
      case 'secure':
        return 'text-green-400';
      case 'warning':
        return 'text-yellow-400';
      case 'insecure':
        return 'text-red-400';
      default:
        return 'text-slate-400';
    }
  };

  const getOverallStatusIcon = (status: SecurityStatus['overall']) => {
    switch (status) {
      case 'secure':
        return <Shield className="w-6 h-6 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="w-6 h-6 text-yellow-400" />;
      case 'insecure':
        return <XCircle className="w-6 h-6 text-red-400" />;
      default:
        return <Shield className="w-6 h-6 text-slate-400" />;
    }
  };

  return (
    <div className="fixed bottom-4 right-20 z-50">
      {/* Security Status Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsVisible(!isVisible)}
        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300"
        aria-label="Security status"
        aria-expanded={isVisible}
      >
        <Shield className="w-6 h-6" />
      </motion.button>

      {/* Security Status Panel */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-16 right-0 w-80 bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-2xl shadow-2xl p-4"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              {getOverallStatusIcon(securityStatus.overall)}
              Security Status
            </h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              ×
            </button>
          </div>

          {/* Overall Status */}
          <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Overall Security:</span>
              <span className={`text-sm font-semibold ${getOverallStatusColor(securityStatus.overall)}`}>
                {securityStatus.overall.charAt(0).toUpperCase() + securityStatus.overall.slice(1)}
              </span>
            </div>
          </div>

          {/* Security Checks */}
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Content Security Policy</span>
              {getStatusIcon(securityStatus.csp)}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">HTTPS (HSTS)</span>
              {getStatusIcon(securityStatus.hsts)}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">XSS Protection</span>
              {getStatusIcon(securityStatus.xss)}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Clickjacking Protection</span>
              {getStatusIcon(securityStatus.clickjacking)}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Referrer Policy</span>
              {getStatusIcon(securityStatus.referrerPolicy)}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Permissions Policy</span>
              {getStatusIcon(securityStatus.permissionsPolicy)}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Secure Cookies</span>
              {getStatusIcon(securityStatus.secureCookies)}
            </div>
          </div>

          {/* Details Toggle */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full text-sm text-cyan-400 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2 mb-3"
          >
            <Eye className="w-4 h-4" />
            {showDetails ? 'Hide' : 'Show'} Details
          </button>

          {/* Detailed Information */}
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 text-xs text-slate-400 bg-slate-800/30 rounded-lg p-3 border border-slate-700"
            >
              <div>
                <strong>Content Security Policy:</strong> Controls which resources can be loaded
              </div>
              <div>
                <strong>HTTPS:</strong> Ensures encrypted communication
              </div>
              <div>
                <strong>XSS Protection:</strong> Prevents cross-site scripting attacks
              </div>
              <div>
                <strong>Clickjacking Protection:</strong> Prevents UI redressing attacks
              </div>
              <div>
                <strong>Referrer Policy:</strong> Controls referrer information
              </div>
              <div>
                <strong>Permissions Policy:</strong> Controls browser feature access
              </div>
              <div>
                <strong>Secure Cookies:</strong> Ensures cookies are transmitted securely
              </div>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={checkSecurityStatus}
              className="flex-1 px-3 py-2 text-sm bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              Refresh
            </button>
            <button
              onClick={() => window.open('/security', '_blank')}
              className="flex-1 px-3 py-2 text-sm bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};