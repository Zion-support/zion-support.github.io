import React from 'react';

interface CookieConsentProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CookieConsent({ className = '', children }: CookieConsentProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}