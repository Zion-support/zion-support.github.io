'use client';
import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(allPreferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(minimalPreferences);
    localStorage.setItem('cookie-consent', JSON.stringify(minimalPreferences));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Cookie className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
            </div>
            <button
              onClick={handleRejectAll}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            We use cookies to enhance your browsing experience, serve personalized content, 
            and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                  <p className="text-sm text-gray-600">Required for basic website functionality</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.necessary}
                disabled
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Settings className="h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                  <p className="text-sm text-gray-600">Help us understand how you use our website</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handlePreferenceChange('analytics')}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Settings className="h-5 w-5 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                  <p className="text-sm text-gray-600">Used to deliver relevant advertisements</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => handlePreferenceChange('marketing')}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Settings className="h-5 w-5 text-orange-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                  <p className="text-sm text-gray-600">Enable enhanced functionality and personalization</p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={() => handlePreferenceChange('functional')}
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRejectAll}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={handleSavePreferences}
              className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Save Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;