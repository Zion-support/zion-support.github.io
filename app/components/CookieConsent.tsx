import React from 'react';

interface CookieconsentProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Cookieconsent({ className = '', children }: CookieconsentProps) {
  return (
    <div className={`CookieConsent-component ${className}`}>
      {children}
    </div>
  );
}