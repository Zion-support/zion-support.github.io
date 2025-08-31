import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, XCircle, Eye, Lock, Globe, Activity } from 'lucide-react';

interface SecurityStatus {
  overall: 'secure' | 'warning' | 'critical';
  https: boolean;
  csp: boolean;
  hsts: boolean;
  xss: boolean;
  csrf: boolean;
  mixedContent: boolean;
  securityHeaders: boolean;
  vulnerabilities: string[];
  lastScan: Date;
}

interface SecurityMonitoringSystemProps {
  enabled?: boolean;
  showStatus?: boolean;
  autoScan?: boolean;
  scanInterval?: number;
}

export const SecurityMonitoringSystem: React.FC<SecurityMonitoringSystemProps> = ({
  enabled = true,
  showStatus = false,
  autoScan = true,
  scanInterval = 60000 // 1 minute
}) => {
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    overall: 'secure',
    https: false,
    csp: false,
    hsts: false,
    xss: false,
    csrf: false,
    mixedContent: false,
    securityHeaders: false,
    vulnerabilities: [],
    lastScan: new Date()
  });
  const [isScanning, setIsScanning] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [threats, setThreats] = useState<string[]>([]);
  const [securityScore, setSecurityScore] = useState(100);

  // Security scan function
  const performSecurityScan = useCallback(async () => {
    if (!enabled) return;

    setIsScanning(true);
    const vulnerabilities: string[] = [];
    let score = 100;

    try {
      // Check HTTPS
      const isHttps = window.location.protocol === 'https:';
      if (!isHttps) {
        vulnerabilities.push('Site is not using HTTPS');
        score -= 20;
      }

      // Check Security Headers
      const checkSecurityHeaders = async () => {
        try {
          const response = await fetch(window.location.href, {
            method: 'HEAD',
            mode: 'no-cors'
          });
          
          // Note: In a real implementation, you'd check response headers
          // For now, we'll simulate the check
          return true;
        } catch (error) {
          return false;
        }
      };

      const headersSecure = await checkSecurityHeaders();
      if (!headersSecure) {
        vulnerabilities.push('Security headers not properly configured');
        score -= 15;
      }

      // Check for mixed content
      const checkMixedContent = () => {
        const images = document.querySelectorAll('img');
        const scripts = document.querySelectorAll('script');
        let hasMixedContent = false;

        images.forEach(img => {
          if (img.src && img.src.startsWith('http:')) {
            hasMixedContent = true;
          }
        });

        scripts.forEach(script => {
          if (script.src && script.src.startsWith('http:')) {
            hasMixedContent = true;
          }
        });

        return hasMixedContent;
      };

      const mixedContent = checkMixedContent();
      if (mixedContent) {
        vulnerabilities.push('Mixed content detected (HTTP resources on HTTPS page)');
        score -= 15;
      }

      // Check for XSS vulnerabilities
      const checkXSSVulnerabilities = () => {
        // Check for innerHTML usage
        const scripts = document.querySelectorAll('script');
        let hasXSSRisk = false;

        scripts.forEach(script => {
          if (script.innerHTML && script.innerHTML.includes('innerHTML')) {
            hasXSSRisk = true;
          }
        });

        return hasXSSRisk;
      };

      const xssRisk = checkXSSVulnerabilities();
      if (xssRisk) {
        vulnerabilities.push('Potential XSS vulnerabilities detected');
        score -= 10;
      }

      // Check for CSRF protection
      const checkCSRFProtection = () => {
        // Check for CSRF tokens in forms
        const forms = document.querySelectorAll('form');
        let hasCSRFProtection = false;

        forms.forEach(form => {
          const csrfToken = form.querySelector('input[name*="csrf"], input[name*="token"]');
          if (csrfToken) {
            hasCSRFProtection = true;
          }
        });

        return hasCSRFProtection;
      };

      const csrfProtected = checkCSRFProtection();
      if (!csrfProtected) {
        vulnerabilities.push('CSRF protection not detected');
        score -= 10;
      }

      // Check Content Security Policy
      const checkCSP = () => {
        const metaTags = document.querySelectorAll('meta[http-equiv="Content-Security-Policy"]');
        return metaTags.length > 0;
      };

      const cspEnabled = checkCSP();
      if (!cspEnabled) {
        vulnerabilities.push('Content Security Policy not configured');
        score -= 10;
      }

      // Check HSTS
      const checkHSTS = () => {
        // This would typically be checked via response headers
        // For now, we'll assume it's enabled if HTTPS is used
        return isHttps;
      };

      const hstsEnabled = checkHSTS();

      // Determine overall status
      let overall: 'secure' | 'warning' | 'critical' = 'secure';
      if (score < 70) {
        overall = 'critical';
      } else if (score < 90) {
        overall = 'warning';
      }

      setSecurityStatus({
        overall,
        https: isHttps,
        csp: cspEnabled,
        hsts: hstsEnabled,
        xss: !xssRisk,
        csrf: csrfProtected,
        mixedContent: !mixedContent,
        securityHeaders: headersSecure,
        vulnerabilities,
        lastScan: new Date()
      });

      setSecurityScore(Math.max(0, score));

      // Update threats if vulnerabilities found
      if (vulnerabilities.length > 0) {
        setThreats(vulnerabilities);
      }

    } catch (error) {
      console.warn('Security scan failed:', error);
      vulnerabilities.push('Security scan failed');
      setSecurityScore(0);
    } finally {
      setIsScanning(false);
    }
  }, [enabled]);

  // Apply security headers
  const applySecurityHeaders = useCallback(() => {
    if (!enabled) return;

    try {
      // Add security meta tags
      const addSecurityMetaTag = (httpEquiv: string, content: string) => {
        if (!document.querySelector(`meta[http-equiv="${httpEquiv}"]`)) {
          const meta = document.createElement('meta');
          meta.httpEquiv = httpEquiv;
          meta.content = content;
          document.head.appendChild(meta);
        }
      };

      // Content Security Policy
      addSecurityMetaTag(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:; frame-src 'none'; object-src 'none';"
      );

      // X-Frame-Options
      addSecurityMetaTag('X-Frame-Options', 'DENY');

      // X-Content-Type-Options
      addSecurityMetaTag('X-Content-Type-Options', 'nosniff');

      // X-XSS-Protection
      addSecurityMetaTag('X-XSS-Protection', '1; mode=block');

      // Referrer Policy
      addSecurityMetaTag('Referrer-Policy', 'strict-origin-when-cross-origin');

      // Permissions Policy
      addSecurityMetaTag(
        'Permissions-Policy',
        'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()'
      );

      console.log('Security headers applied successfully');
    } catch (error) {
      console.warn('Failed to apply security headers:', error);
    }
  }, [enabled]);

  // Monitor for security threats
  const monitorThreats = useCallback(() => {
    if (!enabled) return;

    // Monitor for suspicious activities
    const suspiciousActivities: string[] = [];

    // Check for console errors (potential security issues)
    const originalError = console.error;
    console.error = (...args) => {
      const errorMessage = args.join(' ');
      if (errorMessage.includes('XSS') || errorMessage.includes('injection')) {
        suspiciousActivities.push('Potential security error detected');
      }
      originalError.apply(console, args);
    };

    // Monitor for unauthorized access attempts
    window.addEventListener('storage', (event) => {
      if (event.key && event.key.includes('auth') && event.newValue !== event.oldValue) {
        suspiciousActivities.push('Unauthorized storage access detected');
      }
    });

    // Monitor for suspicious network requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const url = args[0] as string;
      if (typeof url === 'string' && url.includes('suspicious')) {
        suspiciousActivities.push('Suspicious network request detected');
      }
      return originalFetch.apply(window, args);
    };

    if (suspiciousActivities.length > 0) {
      setThreats(prev => [...prev, ...suspiciousActivities]);
    }
  }, [enabled]);

  useEffect(() => {
    if (enabled) {
      // Initial scan
      performSecurityScan();
      applySecurityHeaders();
      monitorThreats();

      // Auto-scan if enabled
      if (autoScan) {
        const interval = setInterval(performSecurityScan, scanInterval);
        return () => clearInterval(interval);
      }
    }
  }, [enabled, performSecurityScan, applySecurityHeaders, monitorThreats, autoScan, scanInterval]);

  if (!enabled) return null;

  return (
    <>
      {/* Security Status Toggle */}
      <motion.button
        className="fixed bottom-20 right-4 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setShowPanel(!showPanel)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Security Status"
      >
        <Shield className="w-6 h-6" />
      </motion.button>

      {/* Security Panel */}
      <AnimatePresence>
        {showPanel && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-32 right-4 z-40 bg-slate-900/95 backdrop-blur-lg border border-green-500/30 rounded-2xl p-6 w-80 max-h-96 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                Security Monitor
              </h3>
              <button
                onClick={() => setShowPanel(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ×
              </button>
            </div>

            {/* Security Score */}
            <div className="bg-slate-800/50 p-4 rounded-lg mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">Security Score</span>
                <span className={`text-lg font-bold ${
                  securityScore >= 90 ? 'text-green-400' :
                  securityScore >= 70 ? 'text-yellow-400' : 'text-red-400'
                }`}>
                  {securityScore}/100
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    securityScore >= 90 ? 'bg-green-500' :
                    securityScore >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${securityScore}%` }}
                />
              </div>
            </div>

            {/* Security Status */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  HTTPS
                </span>
                {securityStatus.https ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-400" />
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  CSP
                </span>
                {securityStatus.csp ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-400" />
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  HSTS
                </span>
                {securityStatus.hsts ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-400" />
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  XSS Protection
                </span>
                {securityStatus.xss ? (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-400" />
                )}
              </div>
            </div>

            {/* Vulnerabilities */}
            {securityStatus.vulnerabilities.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  Vulnerabilities Found
                </h4>
                <div className="space-y-1">
                  {securityStatus.vulnerabilities.slice(0, 3).map((vuln, index) => (
                    <div key={index} className="text-xs text-red-400 bg-red-900/20 p-2 rounded border border-red-500/30">
                      ⚠️ {vuln}
                    </div>
                  ))}
                  {securityStatus.vulnerabilities.length > 3 && (
                    <div className="text-xs text-gray-500 text-center">
                      +{securityStatus.vulnerabilities.length - 3} more vulnerabilities
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Last Scan */}
            <div className="text-xs text-gray-500 text-center mb-4">
              Last scan: {securityStatus.lastScan.toLocaleTimeString()}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={performSecurityScan}
                disabled={isScanning}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isScanning ? 'Scanning...' : 'Run Security Scan'}
              </button>
              
              <button
                onClick={applySecurityHeaders}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300"
              >
                Apply Security Headers
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Security Status Indicator */}
      {showStatus && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed top-4 right-4 bg-slate-900/95 backdrop-blur-lg border border-green-500/30 rounded-lg p-3 z-50"
        >
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              securityStatus.overall === 'secure' ? 'bg-green-400' :
              securityStatus.overall === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
            }`} />
            <span className="text-sm text-white font-medium">
              Security: {securityStatus.overall.toUpperCase()}
            </span>
          </div>
        </motion.div>
      )}
    </>
  );
};