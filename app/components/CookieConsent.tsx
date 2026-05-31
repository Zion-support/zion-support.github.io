import React from 'react';

interface CookieConsentProps {
  className?: string;
  children?: React.ReactNode;
}

const CookieConsent = ({ className = '', children }) => {
  return (
    <div className={`cookieconsent-component ${className}`}>
      {children}
    </div>
  );
};

CookieConsent.displayName = 'CookieConsent';

export default CookieConsent;