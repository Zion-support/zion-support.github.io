'use client';
import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-consent', 'accepted');
    localStorage.setItem('marketing-consent', 'accepted');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    localStorage.setItem('analytics-consent', 'declined');
    localStorage.setItem('marketing-consent', 'declined');
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        {!showDetails ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Cookie className="w-6 h-6 text-cyan-400 mr-3" />
              <div>
                <h3 className="text-lg font-semibold">We use cookies</h3>
                <p className="text-sm text-gray-300">
                  We use cookies to enhance your experience and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleCustomize}
                className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Customize
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Cookie Preferences</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Necessary Cookies</h4>
                  <p className="text-sm text-gray-300">
                    These cookies are essential for the website to function properly.
                  </p>
                </div>
                <div className="w-12 h-6 bg-cyan-600 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Analytics Cookies</h4>
                  <p className="text-sm text-gray-300">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
                <div className="w-12 h-6 bg-gray-600 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Marketing Cookies</h4>
                  <p className="text-sm text-gray-300">
                    These cookies are used to deliver relevant advertisements.
                  </p>
                </div>
                <div className="w-12 h-6 bg-gray-600 rounded-full flex items-center px-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={handleAcceptNecessary}
                className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Save Preferences
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}