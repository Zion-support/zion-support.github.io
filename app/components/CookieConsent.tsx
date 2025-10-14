'use client';
import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-consent', 'accepted');
    localStorage.setItem('marketing-consent', 'accepted');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    localStorage.setItem('analytics-consent', 'declined');
    localStorage.setItem('marketing-consent', 'declined');
    setIsVisible(false);
  };

  const acceptCustom = () => {
    localStorage.setItem('cookie-consent', 'custom');
    localStorage.setItem('analytics-consent', analyticsConsent ? 'accepted' : 'declined');
    localStorage.setItem('marketing-consent', marketingConsent ? 'accepted' : 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-6 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Cookie className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                We use cookies to enhance your experience
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                We use cookies to analyze site usage, personalize content, and improve our services. 
                You can choose which cookies to accept.
              </p>
              
              {!showDetails ? (
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Necessary Only
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                  >
                    Customize
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Analytics Cookies</h4>
                        <p className="text-gray-400 text-sm">Help us understand how visitors interact with our website</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={analyticsConsent}
                          onChange={(e) => setAnalyticsConsent(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-white font-medium">Marketing Cookies</h4>
                        <p className="text-gray-400 text-sm">Used to track visitors across websites for marketing purposes</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={marketingConsent}
                          onChange={(e) => setMarketingConsent(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={acceptCustom}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Save Preferences
                    </button>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Back
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <button
            onClick={acceptNecessary}
            className="text-gray-400 hover:text-white transition-colors ml-4"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;