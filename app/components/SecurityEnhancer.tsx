'use client';
import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableHTTPSRedirect?: boolean;
  enableXSSProtection?: boolean;
  enableCSRFProtection?: boolean;
  enableContentSecurityPolicy?: boolean;
  children: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableHTTPSRedirect = true,
  enableXSSProtection = true,
  enableCSRFProtection = true,
  enableContentSecurityPolicy = true,
  children
}) => {
  useEffect(() => {
    if (enableHTTPSRedirect) {
      // Force HTTPS redirect
      if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        location.replace('https:' + window.location.href.substring(window.location.protocol.length));
      }
    }
    
    if (enableXSSProtection) {
      // Add XSS protection headers
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-XSS-Protection';
      meta.content = '1; mode=block';
      document.head.appendChild(meta);
    }
    
    if (enableCSRFProtection) {
      // Add CSRF token to forms
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const token = generateCSRFToken();
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'csrf_token';
        input.value = token;
        form.appendChild(input);
      });
    }
    
    if (enableContentSecurityPolicy) {
      // Add Content Security Policy
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;";
      document.head.appendChild(meta);
    }
  }, [enableHTTPSRedirect, enableXSSProtection, enableCSRFProtection, enableContentSecurityPolicy]);

  const generateCSRFToken = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  return <>{children}</>;
};

export default SecurityEnhancer;