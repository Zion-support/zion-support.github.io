'use client';
import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Cookie className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              We use cookies
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, 
              and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptCookies}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Accept All
              </button>
              <button
                onClick={declineCookies}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Decline
              </button>
              <button
                onClick={() => setShowConsent(false)}
                className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors text-sm"
              >
                Learn More
              </button>
            </div>
          </div>
          <button
            onClick={() => setShowConsent(false)}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;