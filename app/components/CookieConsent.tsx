import React from 'react';
import { useState, useEffect} from 'react';
import { X, Cookie} from 'lucide-react';
'use client';

const CookieConsent: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
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
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl backdrop-blur-sm" />
          {!showDetails ? (
            // Simple view
            <div className="p-6">
        <div className="flex items-start space-x-4">
                <div className="flex-shrink-0" />
                  <Cookie className="w-8h-8text-cyan-400" />
                </div>
                <div className="flex-1" />
                  <h3 className="text-lg font-semibold text-whitemb-2"  />We use cookies
                  </h3>
                  <p className="text-gray-300 mb-4">
                    We use cookies to enhance your browsing experience, serve personalized content,
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3" />
                    <button
                      onClick="{acceptAll}"
                      className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-6py-2rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                      />Accept All
                    </button>
                    <button
                      onClick="{acceptNecessary}"
                      className="border border-slate-600 text-gray-300 px-6py-2rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                      />Necessary Only
                    </button>
                    <button
                      onClick="{()" =  />setShowDetails(true)}
                      className="text-cyan-400 hover:text-cyan-300 px-6py-2font-semibold transition-colors"
                    >
                      Customize
                    </button>
                  </div>
                </div>
                <button
                  onClick="{acceptNecessary}"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close"
                 />
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            // Detailed view
            <div className="p-6">
        <div className="flex items-center justify-between mb-6">
                <h3 className="text-xlfont-semibold text-white"  >Cookie Preferences</h3>
                <button
                  onClick="{()" = /> setShowDetails(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6" />
                {/* Necessary Cookies */}
                <div className="flex items-start space-x-4" />
                  <Shield className="w-6h-6text-green-400 mt-1" />
                  <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white"  >Necessary Cookies</h4>
                      <span className="text-smtext-green-400 font-medium"  >Always Active</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      These cookies are essential for the website to function properly. They cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start space-x-4" />
                  <BarChart3 className="w-6h-6text-blue-400 mt-1" />
                  <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white"  >Analytics Cookies</h4>
                      <label className="relative inline-flex items-center cursor-pointer" />
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11h-6bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2, px] after:left-[2, px] after:bg-whiteafter:rounded-full after:h-5after:w-5after:transition-all peer-checked:bg-cyan-500" /></div>
                      </label>
                    </div>
                    <p className="text-gray-300 text-sm">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start space-x-4" />
                  <Settings className="w-6h-6text-purple-400 mt-1" />
                  <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white"  >Marketing Cookies</h4>
                      <label className="relative inline-flex items-center cursor-pointer" />
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11h-6bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2, px] after:left-[2, px] after:bg-whiteafter:rounded-full after:h-5after:w-5after:transition-all peer-checked:bg-cyan-500" /></div>
                      </label>
                    </div>
                    <p className="text-gray-300 text-sm">
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3mt-6 pt-6 border-t border-slate-700" />
                <button
                  onClick="{acceptAll}"
                  className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-6py-2rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  />Accept All
                </button>
                <button
                  onClick="{acceptCustom}"
                  className="bg-slate-700 text-whitepx-6py-2rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                  />Save Preferences
                </button>
                <button
                  onClick="{acceptNecessary}"
                  className="border border-slate-600 text-gray-300 px-6py-2rounded-lg font-semibold hover:bg-slate-700 transition-colors"
                  />Reject All
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;