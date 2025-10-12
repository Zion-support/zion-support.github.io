import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie } from 'lucide-react';

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
    <>
      <Helmet>
        <title>Cookie Consent - Zion Tech Group</title>
        <meta name="description" content="We use cookies to enhance your experience on our website." />
      </Helmet>
      
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Cookie className="w-6 h-6 text-yellow-400" />
            <div>
              <p className="text-sm font-medium">
                We use cookies to enhance your experience and analyze our traffic.
              </p>
              <p className="text-xs text-gray-300">
                By clicking "Accept", you consent to our use of cookies. 
                <a href="/privacy" className="underline hover:no-underline ml-1">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}