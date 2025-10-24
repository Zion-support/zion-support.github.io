'use client';

import React from 'react';

interface CookieConsentProps {
  children?: React.ReactNode;
  className?: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ children, className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default CookieConsent;