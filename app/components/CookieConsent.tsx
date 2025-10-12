import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

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
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-gray-800 border border-gray-700 rounded-lg p-4 shadow-lg z-50">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold">Cookie Consent</h3>
        <button
          onClick={handleDecline}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-gray-300 text-sm mb-4">
        We use cookies to enhance your experience and analyze our traffic. By continuing to use our site, you consent to our use of cookies.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-cyan-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-cyan-600 transition-colors"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="border border-gray-600 text-gray-300 px-4 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
