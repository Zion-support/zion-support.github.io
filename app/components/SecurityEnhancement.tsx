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
    httpsEnabled: false,
    securityHeadersPresent: false
  });

  const checkSecurityHeaders = useCallback(() => {
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
      // // console.warn('Security enhancement error:', error);
    }
  }, []);

  useEffect(() => {
    checkSecurityHeaders();
  }, [checkSecurityHeaders]);

  useEffect(() => {
    const checkSecurityStatus = () => {
      setSecurityStatus({
        cspEnabled: !!document.querySelector('meta[http-equiv="Content-Security-Policy"]'),
        httpsEnabled: window.location.protocol === 'https:',
        securityHeadersPresent: !!document.querySelector('meta[http-equiv="X-Content-Type-Options"]')
      });
    };

    checkSecurityStatus();
  }, []);

  const enableCSP = useCallback(() => {
    try {
      const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!cspMeta) {
        const meta = document.createElement('meta');
        meta.setAttribute('http-equiv', 'Content-Security-Policy');
        meta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';");
        document.head.appendChild(meta);
        setSecurityStatus(prev => ({ ...prev, cspEnabled: true }));
      }
    } catch (error) {
      console.error('CSP enablement error:', error);
    }
  }, []);

  const enableHTTPS = useCallback(() => {
    if (window.location.protocol !== 'https:') {
      const httpsUrl = window.location.href.replace('http:', 'https:');
      window.location.href = httpsUrl;
    }
  }, []);

  return (
    <div className={`security-enhancement ${className}`}>
      <div className="security-status">
        <h3>Security Status</h3>
        <ul>
          <li>CSP Enabled: {securityStatus.cspEnabled ? '✅' : '❌'}</li>
          <li>HTTPS Enabled: {securityStatus.httpsEnabled ? '✅' : '❌'}</li>
          <li>Security Headers: {securityStatus.securityHeadersPresent ? '✅' : '❌'}</li>
        </ul>
      </div>
      
      <div className="security-actions">
        <button onClick={enableCSP} disabled={securityStatus.cspEnabled}>
          Enable CSP
        </button>
        <button onClick={enableHTTPS} disabled={securityStatus.httpsEnabled}>
          Enable HTTPS
        </button>
      </div>
    </div>
  );
});

SecurityEnhancement.displayName = 'SecurityEnhancement';

export default SecurityEnhancement;