import React from 'react';

interface CookieConsentProps {
  className?: string;
  children?: React.ReactNode;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ className = '', children }) => {
  return (
    <div className={`cookieconsent ${className}`}>
      {children}
    </div>
  );
};

export default CookieConsent;
