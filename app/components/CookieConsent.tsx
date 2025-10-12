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
    <div className="fixed bottom-0 left-0 right-0z-50p-4" />
      <div className="max-w-4xlmx-auto" />
        <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xlbackdrop-blur-sm" />
          {!showDetails ? (
            // Simple view
            <div className="p-6" />
              <div className="flexitems-startspace-x-4" />
                <div className="flex-shrink-0" />
                  <Cookie className="w-8h-8text-cyan-400" / />
                </div>
                <div className="flex-1" />
                  <h3 className="text-lg font-semiboldtext-whitemb-2"  />We use cookies
                  </h3>
                  <p className="text-gray-300mb-4" />
                    We use cookies to enhance your browsing experience, serve personalized content,
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <div className="flex flex-colsm:flex-rowgap-3" />
                    <button
                      onClick="{acceptAll}"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300"
                      />Accept All
                    </button>
                    <button
                      onClick="{acceptNecessary}"
                      className="border border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700transition-colors"
                      />Necessary Only
                    </button>
                    <button
                      onClick="{()" =  />setShowDetails(true)}
                      className="text-cyan-400 hover:text-cyan-300 px-6 py-2font-semiboldtransition-colors"
                    >
                      Customize
                    </button>
                  </div>
                </div>
                <button
                  onClick="{acceptNecessary}"
                  className="text-gray-400hover:text-whitetransition-colors"
                  aria-label="Close" />
                  <X className="w-5h-5" / />
                </button>
              </div>
            </div>
          ) : (
            // Detailed view
            <div className="p-6" />
              <div className="flex items-centerjustify-betweenmb-6" />
                <h3 className="text-xlfont-semiboldtext-white"  >Cookie Preferences</h3>
                <button
                  onClick="{()" = /> setShowDetails(false)}
                  className="text-gray-400hover:text-whitetransition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5h-5" / />
                </button>
              </div>

              <div className="space-y-6" />
                {/* Necessary Cookies */}
                <div className="flexitems-startspace-x-4" />
                  <Shield className="w-6 h-6text-green-400mt-1" / />
                  <div className="flex-1" />
                    <div className="flex items-centerjustify-betweenmb-2" />
                      <h4 className="font-semiboldtext-white"  >Necessary Cookies</h4>
                      <span className="text-smtext-green-400font-medium"  >Always Active</span>
                    </div>
                    <p className="text-gray-300text-sm" />
                      These cookies are essential for the website to function properly. They cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flexitems-startspace-x-4" />
                  <BarChart3 className="w-6 h-6text-blue-400mt-1" / />
                  <div className="flex-1" />
                    <div className="flex items-centerjustify-betweenmb-2" />
                      <h4 className="font-semiboldtext-white"  >Analytics Cookies</h4>
                      <label className="relative inline-flexitems-centercursor-pointer" />
                        <input type="checkbox" className="sr-onlypeer" defaultChecked / />
                        <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2, px] after:left-[2, px] after:bg-white after:rounded-full after:h-5 after:w-5after:transition-allpeer-checked:bg-cyan-500" /></div>
                      </label>
                    </div>
                    <p className="text-gray-300text-sm" />
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flexitems-startspace-x-4" />
                  <Settings className="w-6 h-6text-purple-400mt-1" / />
                  <div className="flex-1" />
                    <div className="flex items-centerjustify-betweenmb-2" />
                      <h4 className="font-semiboldtext-white"  >Marketing Cookies</h4>
                      <label className="relative inline-flexitems-centercursor-pointer" />
                        <input type="checkbox" className="sr-onlypeer" / />
                        <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2, px] after:left-[2, px] after:bg-white after:rounded-full after:h-5 after:w-5after:transition-allpeer-checked:bg-cyan-500" /></div>
                      </label>
                    </div>
                    <p className="text-gray-300text-sm" />
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6border-tborder-slate-700" />
                <button
                  onClick="{acceptAll}"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300"
                  />Accept All
                </button>
                <button
                  onClick="{acceptCustom}"
                  className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semiboldhover:bg-slate-600transition-colors"
                  />Save Preferences
                </button>
                <button
                  onClick="{acceptNecessary}"
                  className="border border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700transition-colors"
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