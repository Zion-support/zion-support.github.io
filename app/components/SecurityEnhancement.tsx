'use client';

import React, { useCallback, useState, useEffect, memo } from 'react';

interface SecurityEnhancementProps {
  className?: string;
}

const SecurityEnhancement: React.FC<SecurityEnhancementProps> = memo(({
  className = ''
}) => {
  const [securityStatus, setSecurityStatus] = useState({
    cspEnabled: false,
    hstsEnabled: false,
    xssProtection: false,
    clickjackingProtection: false
  });

  const checkSecurityHeaders = useCallback(() => {
    if (typeof window === 'undefined') return;

    const cspEnabled = document.querySelector('meta[http-equiv="Content-Security-Policy"]') !== null;
    const hstsEnabled = document.querySelector('meta[http-equiv="Strict-Transport-Security"]') !== null;
    const xssProtection = document.querySelector('meta[http-equiv="X-XSS-Protection"]') !== null;
    const clickjackingProtection = document.querySelector('meta[name="X-Frame-Options"]') !== null;

    setSecurityStatus({
      cspEnabled,
      hstsEnabled,
      xssProtection,
      clickjackingProtection
    });
  }, []);

  const applySecurityEnhancements = useCallback(() => {
    if (typeof window === 'undefined') return;

    try {
      const securityHeaders = [
        { name: 'Content-Security-Policy', content: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" },
        { name: 'X-Content-Type-Options', content: 'nosniff' },
        { name: 'X-Frame-Options', content: 'DENY' },
        { name: 'X-XSS-Protection', content: '1; mode=block' }
      ];

      securityHeaders.forEach(header => {
        if (!document.querySelector(`meta[http-equiv="${header.name}"]`)) {
          const meta = document.createElement('meta');
          meta.setAttribute('http-equiv', header.name);
          meta.setAttribute('content', header.content);
          document.head.appendChild(meta);
        }
      });

      // // console.log('Security enhancements applied');
    } catch (error) {
      // console.warn('Security enhancement error:', error);
    }
  }, []);

  useEffect(() => {
    checkSecurityHeaders();
    applySecurityEnhancements();
  }, [checkSecurityHeaders, applySecurityEnhancements]);

  return (
    <div className={`security-enhancement ${className}`}>
      <div className="security-status">
        <h3>Security Status</h3>
        <div className="security-item">
          <span>CSP Enabled: {securityStatus.cspEnabled ? 'Yes' : 'No'}</span>
        </div>
        <div className="security-item">
          <span>HSTS Enabled: {securityStatus.hstsEnabled ? 'Yes' : 'No'}</span>
        </div>
        <div className="security-item">
          <span>XSS Protection: {securityStatus.xssProtection ? 'Yes' : 'No'}</span>
        </div>
        <div className="security-item">
          <span>Clickjacking Protection: {securityStatus.clickjackingProtection ? 'Yes' : 'No'}</span>
        </div>
      </div>
    </div>
  );
});

SecurityEnhancement.displayName = 'SecurityEnhancement';

export default SecurityEnhancement;
