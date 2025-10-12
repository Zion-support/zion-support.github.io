import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

interface CookieConsentProps {
  className?: string;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 z-50 ${className}`}>
      <div className="flex items-start gap-3">
        <Cookie className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">Cookie Consent</h3>
          <p className="text-gray-300 text-sm mb-4">
            We use cookies to enhance your experience and analyze our traffic. By continuing to use our site, you consent to our use of cookies.
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleAccept}
              className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;