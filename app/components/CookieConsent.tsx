'use client';

import React, { memo } from 'react';

interface CookieConsentProps {
  className?: string;
  children?: React.ReactNode;
}

const CookieConsent: React.FC<CookieConsentProps> = memo(({ 
  className = '',
  children 
}) => {
  return (
    <div className={`cookie-consent ${className}`}>
      {children}
    </div>
  );
});

CookieConsent.displayName = 'CookieConsent';

export default CookieConsent;