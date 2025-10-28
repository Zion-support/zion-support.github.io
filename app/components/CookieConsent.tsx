import React from 'react';

interface CookieConsentProps {
  className?: string;
  children?: React.ReactNode;
}

const CookieConsent: React.FC<CookieConsentProps> = (_{ className = '', _children }) => {
  return (
    <div className={`cookieconsent-component ${className}`}>
      {children}
    </div>
  );
};

CookieConsent.displayName = 'CookieConsent';

export default CookieConsent;