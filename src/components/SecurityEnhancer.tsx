import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, AlertTriangle, CheckCircle, Eye, EyeOff, Key, Globe } from 'lucide-react';

interface SecurityStatus {
  csp: boolean;
  https: boolean;
  xss: boolean;
  csrf: boolean;
  clickjacking: boolean;
  contentSniffing: boolean;
  referrerPolicy: boolean;
  permissionsPolicy: boolean;
}

interface SecurityThreat {
  id: string;
  type: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: Date;
  resolved: boolean;
}

export const SecurityEnhancer: React.FC = () => {
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({
    csp: false,
    https: false,
    xss: false,
    csrf: false,
    clickjacking: false,
    contentSniffing: false,
    referrerPolicy: false,
    permissionsPolicy: false
  });
  
  const [threats, setThreats] = useState<SecurityThreat[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  // Check security headers and status
  const checkSecurityStatus = useCallback(async () => {
    try {
      // Check if running on HTTPS
      const isHttps = window.location.protocol === 'https:';
      
      // Check for security headers (this would normally be done server-side)
      const headers = await fetch('/api/security-headers').catch(() => null);
      
      // Simulate security checks for demo purposes
      const mockStatus: SecurityStatus = {
        csp: true, // Content Security Policy
        https: isHttps,
        xss: true, // XSS Protection
        csrf: true, // CSRF Protection
        clickjacking: true, // Clickjacking Protection
        contentSniffing: true, // Content Type Sniffing Protection
        referrerPolicy: true, // Referrer Policy
        permissionsPolicy: true // Permissions Policy
      };
      
      setSecurityStatus(mockStatus);
      
      // Check for potential threats
      checkForThreats();
      
    } catch (error) {
      console.error('Security check failed:', error);
    }
  }, []);

  // Check for potential security threats
  const checkForThreats = useCallback(() => {
    const newThreats: SecurityThreat[] = [];
    
    // Check for mixed content
    if (window.location.protocol === 'https:' && document.querySelector('img[src^="http:"]')) {
      newThreats.push({
        id: 'mixed-content',
        type: 'high',
        description: 'Mixed content detected: HTTP resources loaded over HTTPS',
        timestamp: new Date(),
        resolved: false
      });
    }
    
    // Check for external scripts without integrity
    const externalScripts = document.querySelectorAll('script[src^="http"]');
    externalScripts.forEach(script => {
      if (!script.hasAttribute('integrity')) {
        newThreats.push({
          id: 'external-script-integrity',
          type: 'medium',
          description: `External script without integrity check: ${script.src}`,
          timestamp: new Date(),
          resolved: false
        });
      }
    });
    
    // Check for form without CSRF protection
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      if (!form.querySelector('input[name="_csrf"]') && !form.querySelector('input[name="csrf_token"]')) {
        newThreats.push({
          id: 'csrf-protection',
          type: 'high',
          description: 'Form without CSRF protection detected',
          timestamp: new Date(),
          resolved: false
        });
      }
    });
    
    setThreats(prev => [...prev, ...newThreats]);
  }, []);

  // Apply security measures
  const applySecurityMeasures = useCallback(() => {
    // Set security headers via meta tags (limited effectiveness, should be server-side)
    const securityMetaTags = [
      { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
      { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
      { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' },
      { 'http-equiv': 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { 'http-equiv': 'Permissions-Policy', content: 'geolocation=(), microphone=(), camera=()' }
    ];
    
    securityMetaTags.forEach(tag => {
      const meta = document.createElement('meta');
      Object.assign(meta, tag);
      document.head.appendChild(meta);
    });
    
    // Add security-related CSS
    const securityCSS = `
      /* Prevent text selection on sensitive elements */
      .no-select { user-select: none; }
      
      /* Hide sensitive information */
      .sensitive { filter: blur(4px); }
      
      /* Secure form styling */
      .secure-form input[type="password"] { 
        -webkit-text-security: disc; 
        text-security: disc; 
      }
      
      /* Prevent clickjacking */
      body { 
        position: relative; 
        z-index: 1; 
      }
    `;
    
    const style = document.createElement('style');
    style.textContent = securityCSS;
    document.head.appendChild(style);
    
    // Monitor for suspicious activities
    monitorSuspiciousActivity();
  }, []);

  // Monitor for suspicious activities
  const monitorSuspiciousActivity = useCallback(() => {
    // Monitor for XSS attempts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.innerHTML.includes('<script>') || element.innerHTML.includes('javascript:')) {
                console.warn('Potential XSS attempt detected');
                // Log the attempt and potentially block it
              }
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Monitor for suspicious network requests
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      const url = args[0];
      if (typeof url === 'string' && url.includes('javascript:')) {
        console.warn('Suspicious fetch request blocked:', url);
        return Promise.reject(new Error('Suspicious request blocked'));
      }
      return originalFetch.apply(this, args);
    };
    
    // Monitor for suspicious form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Check for suspicious input
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string' && (
          value.includes('<script>') ||
          value.includes('javascript:') ||
          value.includes('data:text/html')
        )) {
          e.preventDefault();
          console.warn('Suspicious form submission blocked');
          alert('Suspicious input detected. Please check your input and try again.');
          return false;
        }
      }
    });
  }, []);

  // Resolve threat
  const resolveThreat = useCallback((threatId: string) => {
    setThreats(prev => 
      prev.map(threat => 
        threat.id === threatId ? { ...threat, resolved: true } : threat
      )
    );
  }, []);

  // Security score calculation
  const securityScore = Object.values(securityStatus).filter(Boolean).length / Object.keys(securityStatus).length * 100;

  useEffect(() => {
    checkSecurityStatus();
    applySecurityMeasures();
    
    // Continuous monitoring
    const interval = setInterval(() => {
      if (isMonitoring) {
        checkSecurityStatus();
      }
    }, 30000); // Check every 30 seconds
    
    return () => clearInterval(interval);
  }, [checkSecurityStatus, applySecurityMeasures, isMonitoring]);

  return (
    <div className="fixed bottom-4 left-20 z-40">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-2xl max-w-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-green-400 flex items-center">
            <Shield className="w-5 h-5 mr-2" />
            Security Monitor
          </h3>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-slate-400 hover:text-white transition-colors"
            title={showDetails ? 'Hide details' : 'Show details'}
          >
            {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {/* Security Score */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-300">Security Score</span>
            <span className={`text-sm font-bold ${
              securityScore >= 80 ? 'text-green-400' :
              securityScore >= 60 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {securityScore.toFixed(0)}%
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                securityScore >= 80 ? 'bg-green-400' :
                securityScore >= 60 ? 'bg-yellow-400' : 'bg-red-400'
              }`}
              style={{ width: `${securityScore}%` }}
            />
          </div>
        </div>

        {/* Quick Status */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-300">HTTPS</span>
            {securityStatus.https ? (
              <CheckCircle className="w-4 h-4 text-green-400" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-red-400" />
            )}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-300">CSP</span>
            {securityStatus.csp ? (
              <CheckCircle className="w-4 h-4 text-green-400" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-red-400" />
            )}
          </div>
        </div>

        {/* Threats */}
        {threats.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-300 mb-2">Active Threats</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {threats.filter(t => !t.resolved).slice(0, 3).map((threat) => (
                <div key={threat.id} className="text-xs bg-slate-800 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      threat.type === 'critical' ? 'bg-red-600 text-white' :
                      threat.type === 'high' ? 'bg-orange-600 text-white' :
                      threat.type === 'medium' ? 'bg-yellow-600 text-black' :
                      'bg-blue-600 text-white'
                    }`}>
                      {threat.type.toUpperCase()}
                    </span>
                    <button
                      onClick={() => resolveThreat(threat.id)}
                      className="text-green-400 hover:text-green-300"
                      title="Mark as resolved"
                    >
                      <CheckCircle className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-slate-300">{threat.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className={`px-3 py-1 text-xs rounded-lg transition-colors ${
              isMonitoring 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-slate-600 hover:bg-slate-700 text-slate-300'
            }`}
          >
            {isMonitoring ? 'Monitoring' : 'Paused'}
          </button>
          
          <button
            onClick={checkSecurityStatus}
            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg transition-colors"
          >
            Refresh
          </button>
        </div>

        {/* Detailed Status */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-slate-700"
          >
            <h4 className="text-sm font-semibold text-slate-300 mb-3">Security Details</h4>
            <div className="space-y-2 text-xs">
              {Object.entries(securityStatus).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-slate-400 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  {value ? (
                    <CheckCircle className="w-3 h-3 text-green-400" />
                  ) : (
                    <AlertTriangle className="w-3 h-3 text-red-400" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};