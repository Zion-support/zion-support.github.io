'use client';
import React, { useEffect } from 'react';

const SecurityEnhancer: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add security headers
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';";
      document.head.appendChild(cspMeta);
    }
  }, []);

  return null;
};

export default SecurityEnhancer;