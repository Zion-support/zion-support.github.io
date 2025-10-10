'use client';

import React, { useEffect } from 'react';

const SecurityEnhancer: React.FC = () => {
  useEffect(() => {
    // Add security headers
    const addSecurityHeaders = () => {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';";
      document.head.appendChild(meta);
    };

    // Add XSS protection
    const addXSSProtection = () => {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-XSS-Protection';
      meta.content = '1; mode=block';
      document.head.appendChild(meta);
    };

    // Add frame options
    const addFrameOptions = () => {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Frame-Options';
      meta.content = 'DENY';
      document.head.appendChild(meta);
    };

    addSecurityHeaders();
    addXSSProtection();
    addFrameOptions();
  }, []);

  return null;
};

export default SecurityEnhancer;
