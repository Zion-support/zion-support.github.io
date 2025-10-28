'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface SecurityEnhancementProps {
  enableCSP?: boolean;
  enableIntegrityChecks?: boolean;
}

const SecurityEnhancement: React.FC<SecurityEnhancementProps> = memo(({ 
  enableCSP = true,
  enableIntegrityChecks = true
}) => {
  const addCSP = useCallback(() => {
    if (typeof window === 'undefined' || !enableCSP) return;

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'";
    document.head.appendChild(meta);
  }, [enableCSP]);

  const checkIntegrity = useCallback(() => {
    if (typeof window === 'undefined' || !enableIntegrityChecks) return;

    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      const src = script.getAttribute('src');
      if (src && !src.startsWith(window.location.origin) && !script.hasAttribute('integrity')) {
        console.warn('External script without integrity check:', src);
      }
    });
  }, [enableIntegrityChecks]);

  useEffect(() => {
    addCSP();
    checkIntegrity();
  }, [addCSP, checkIntegrity]);

  return null;
});

SecurityEnhancement.displayName = 'SecurityEnhancement';

export default SecurityEnhancement;