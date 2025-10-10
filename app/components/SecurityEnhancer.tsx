'use client';

import React, { useEffect } from 'react';

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({
  enableCSP = true,
  enableHSTS = true,
  enableXSSProtection = true,
  enableClickjackingProtection = true
}) => {
  useEffect(() => {
    if (enableCSP) {
      // Add Content Security Policy
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;";
      document.head.appendChild(meta);
    }
  }, [enableCSP]);

  useEffect(() => {
    if (enableHSTS) {
      // Add HSTS header (this would typically be done server-side)
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Strict-Transport-Security';
      meta.content = 'max-age=31536000; includeSubDomains';
      document.head.appendChild(meta);
    }
  }, [enableHSTS]);

  useEffect(() => {
    if (enableXSSProtection) {
      // Add XSS Protection header
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-XSS-Protection';
      meta.content = '1; mode=block';
      document.head.appendChild(meta);
    }
  }, [enableXSSProtection]);

  useEffect(() => {
    if (enableClickjackingProtection) {
      // Add clickjacking protection
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Frame-Options';
      meta.content = 'DENY';
      document.head.appendChild(meta);
    }
  }, [enableClickjackingProtection]);

  useEffect(() => {
    // Add additional security measures
    const addSecurityHeaders = () => {
      // Prevent right-click context menu
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });

      // Prevent text selection
      document.addEventListener('selectstart', (e) => {
        e.preventDefault();
      });

      // Prevent drag and drop
      document.addEventListener('dragstart', (e) => {
        e.preventDefault();
      });
    };

    addSecurityHeaders();
  }, []);

  return null;
};

export default SecurityEnhancer;