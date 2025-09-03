import React, { useEffect } from 'react';
import Head from 'next/head';

const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Add security headers via meta tags
    const addSecurityHeaders = () => {
      const securityMetaTags = [
        { name: 'referrer', content: 'strict-origin-when-cross-origin' },
        { name: 'x-content-type-options', content: 'nosniff' },
        { name: 'x-frame-options', content: 'DENY' },
        { name: 'x-xss-protection', content: '1; mode=block' },
        { name: 'permissions-policy', content: 'camera=(), microphone=(), geolocation=()' }
      ];

      securityMetaTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      });
    };

    // Add Content Security Policy
    const addCSP = () => {
      const csp = document.createElement('meta');
      csp.setAttribute('http-equiv', 'Content-Security-Policy');
      csp.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:;");
      document.head.appendChild(csp);
    };

    // Add nonce to inline styles
    const addNonceToStyles = () => {
      const style = document.createElement('style');
      style.setAttribute('nonce', 'csp-nonce-' + Math.random().toString(36).substr(2, 9));
      document.head.appendChild(style);
    };

    // Initialize security headers
    addSecurityHeaders();
    addCSP();
    addNonceToStyles();
  }, []);

  return (
    <Head>
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      
      {/* Content Security Policy */}
      <meta 
        httpEquiv="Content-Security-Policy" 
        content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:;" 
      />
    </Head>
  );
};

export default SecurityHeaders;