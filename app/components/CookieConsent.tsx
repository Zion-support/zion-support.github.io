'use client'
import React from 'react';

interface CookieConsentProps {
  className?: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Cookie Consent</h2>
      <p className="text-gray-600">This is a placeholder component for Cookie Consent.</p>
    </div>
  );
};

export default CookieConsent;
