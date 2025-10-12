import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-start space-x-3">
            <Cookie className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">
                We use cookies
              </h4>
              <p className="text-sm text-gray-600">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 ml-4">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;