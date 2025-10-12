
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Cookie className="w-6 h-6 text-blue-600" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              We use cookies
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, 
              and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

