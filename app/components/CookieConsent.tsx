import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 z-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Cookie className="w-6 h-6 text-cyan-400 flex-shrink-0" />
            <div>
              <p className="text-white text-sm">
                We use cookies to enhance your experience and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
                  Privacy Policy
                </a>
                {' • '}
                <a href="/terms" className="text-cyan-400 hover:text-cyan-300">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm"
            >
              Accept All
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;