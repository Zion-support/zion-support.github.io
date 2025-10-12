import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
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
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50">
      <div className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-lg p-4 shadow-xl">
        <div className="flex items-start gap-3">
          <Cookie className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-white font-semibold mb-2">
              Cookie Consent
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              We use cookies to enhance your experience and analyze our traffic. 
              By continuing to use our site, you consent to our use of cookies.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleAccept}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
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
    </div>
  );
}