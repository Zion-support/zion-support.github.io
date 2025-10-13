import React, { useEffect, useState, useCallback } from 'react';
import { Shield, AlertTriangle, CheckCircle, Lock, Eye, EyeOff } from 'lucide-react';

interface SecuritySettings {
  cspEnabled: boolean;
  xssProtection: boolean;
  clickjackingProtection: boolean;
  hstsEnabled: boolean;
  secureCookies: boolean;
  contentSecurityPolicy: string;
  referrerPolicy: string;
  permissionsPolicy: string;
}

interface SecurityEnhancerProps {
  children: React.ReactNode;
  showSecurityInfo?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ 
  children, 
  showSecurityInfo = false 
}) => {
  const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
    cspEnabled: true,
    xssProtection: true,
    clickjackingProtection: true,
    hstsEnabled: true,
    secureCookies: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com; frame-ancestors 'none';",
    referrerPolicy: "strict-origin-when-cross-origin",
    permissionsPolicy: "camera=(), microphone=(), geolocation=(), payment=()"
  });

  const [securityStatus, setSecurityStatus] = useState({
    isSecure: false,
    vulnerabilities: [] as string[],
    recommendations: [] as string[]
  });

  const [isVisible, setIsVisible] = useState(false);

  // Apply security headers
  const applySecurityHeaders = useCallback(() => {
    // Content Security Policy
    if (securitySettings.cspEnabled) {
      const metaCSP = document.createElement('meta');
      metaCSP.httpEquiv = 'Content-Security-Policy';
      metaCSP.content = securitySettings.contentSecurityPolicy;
      document.head.appendChild(metaCSP);
    }

    // X-Frame-Options
    if (securitySettings.clickjackingProtection) {
      const metaFrame = document.createElement('meta');
      metaFrame.httpEquiv = 'X-Frame-Options';
      metaFrame.content = 'DENY';
      document.head.appendChild(metaFrame);
    }

    // X-Content-Type-Options
    const metaContentType = document.createElement('meta');
    metaContentType.httpEquiv = 'X-Content-Type-Options';
    metaContentType.content = 'nosniff';
    document.head.appendChild(metaContentType);

    // Referrer Policy
    const metaReferrer = document.createElement('meta');
    metaReferrer.name = 'referrer';
    metaReferrer.content = securitySettings.referrerPolicy;
    document.head.appendChild(metaReferrer);

    // Permissions Policy
    const metaPermissions = document.createElement('meta');
    metaPermissions.httpEquiv = 'Permissions-Policy';
    metaPermissions.content = securitySettings.permissionsPolicy;
    document.head.appendChild(metaPermissions);
  }, [securitySettings]);

  // Security audit
  const performSecurityAudit = useCallback(() => {
    const vulnerabilities: string[] = [];
    const recommendations: string[] = [];

    // Check HTTPS
    if (location.protocol !== 'https:') {
      vulnerabilities.push('Site is not using HTTPS');
      recommendations.push('Enable HTTPS for secure communication');
    }

    // Check for mixed content
    const images = document.querySelectorAll('img[src^="http:"]');
    if (images.length > 0) {
      vulnerabilities.push('Mixed content detected (HTTP images on HTTPS page)');
      recommendations.push('Use HTTPS for all resources');
    }

    // Check for external scripts without integrity
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      if (!script.hasAttribute('integrity') && !script.src.startsWith(location.origin)) {
        vulnerabilities.push('External script without integrity hash');
        recommendations.push('Add integrity hashes to external scripts');
      }
    });

    // Check for inline scripts
    const inlineScripts = document.querySelectorAll('script:not([src])');
    if (inlineScripts.length > 0) {
      vulnerabilities.push('Inline scripts detected');
      recommendations.push('Move inline scripts to external files or use nonces');
    }

    // Check for form without CSRF protection
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      if (!form.querySelector('input[name="_token"], input[name="csrf_token"]')) {
        vulnerabilities.push('Form without CSRF protection');
        recommendations.push('Implement CSRF tokens for all forms');
      }
    });

    // Check for password fields without proper attributes
    const passwordFields = document.querySelectorAll('input[type="password"]');
    passwordFields.forEach(field => {
      if (!field.hasAttribute('autocomplete')) {
        vulnerabilities.push('Password field without autocomplete attribute');
        recommendations.push('Add autocomplete="current-password" to password fields');
      }
    });

    setSecurityStatus({
      isSecure: vulnerabilities.length === 0,
      vulnerabilities,
      recommendations
    });
  }, []);

  // Initialize security
  useEffect(() => {
    applySecurityHeaders();
    performSecurityAudit();

    // Re-audit on DOM changes
    const observer = new MutationObserver(() => {
      performSecurityAudit();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    return () => {
      observer.disconnect();
    };
  }, [applySecurityHeaders, performSecurityAudit]);

  // Toggle security info visibility
  const toggleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  // Update security settings
  const updateSecuritySetting = useCallback((key: keyof SecuritySettings, value: any) => {
    setSecuritySettings(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  return (
    <div className="security-enhancer">
      {children}
      
      {showSecurityInfo && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={toggleVisibility}
            className="mb-2 w-12 h-12 bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center justify-center transition-colors"
            title="Security Status"
          >
            <Shield className="w-5 h-5" />
          </button>
          
          {isVisible && (
            <div className="bg-slate-800 rounded-lg p-4 shadow-2xl border border-slate-700 min-w-80 max-w-96">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Security Status
                </h3>
                <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${
                  securityStatus.isSecure 
                    ? 'bg-green-600 text-white' 
                    : 'bg-red-600 text-white'
                }`}>
                  {securityStatus.isSecure ? (
                    <CheckCircle className="w-3 h-3" />
                  ) : (
                    <AlertTriangle className="w-3 h-3" />
                  )}
                  {securityStatus.isSecure ? 'Secure' : 'Issues Found'}
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Security Settings */}
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Security Settings</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">CSP Enabled</span>
                      <button
                        onClick={() => updateSecuritySetting('cspEnabled', !securitySettings.cspEnabled)}
                        className={`w-8 h-4 rounded-full transition-colors ${
                          securitySettings.cspEnabled ? 'bg-green-600' : 'bg-slate-600'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                          securitySettings.cspEnabled ? 'translate-x-4' : 'translate-x-0.5'
                        }`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">XSS Protection</span>
                      <button
                        onClick={() => updateSecuritySetting('xssProtection', !securitySettings.xssProtection)}
                        className={`w-8 h-4 rounded-full transition-colors ${
                          securitySettings.xssProtection ? 'bg-green-600' : 'bg-slate-600'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                          securitySettings.xssProtection ? 'translate-x-4' : 'translate-x-0.5'
                        }`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Clickjacking Protection</span>
                      <button
                        onClick={() => updateSecuritySetting('clickjackingProtection', !securitySettings.clickjackingProtection)}
                        className={`w-8 h-4 rounded-full transition-colors ${
                          securitySettings.clickjackingProtection ? 'bg-green-600' : 'bg-slate-600'
                        }`}
                      >
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                          securitySettings.clickjackingProtection ? 'translate-x-4' : 'translate-x-0.5'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Vulnerabilities */}
                {securityStatus.vulnerabilities.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-red-400 mb-2 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Vulnerabilities ({securityStatus.vulnerabilities.length})
                    </h4>
                    <ul className="space-y-1">
                      {securityStatus.vulnerabilities.map((vuln, index) => (
                        <li key={index} className="text-xs text-red-300">
                          • {vuln}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Recommendations */}
                {securityStatus.recommendations.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-yellow-400 mb-2 flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      Recommendations ({securityStatus.recommendations.length})
                    </h4>
                    <ul className="space-y-1">
                      {securityStatus.recommendations.map((rec, index) => (
                        <li key={index} className="text-xs text-yellow-300">
                          • {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Security Score */}
                <div className="pt-2 border-t border-slate-700">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Security Score</span>
                    <span className={`font-semibold ${
                      securityStatus.isSecure ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {securityStatus.isSecure ? '100%' : `${Math.max(0, 100 - securityStatus.vulnerabilities.length * 20)}%`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SecurityEnhancer;