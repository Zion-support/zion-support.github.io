import { useState, useEffect} from 'react', { X, Cookie} from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

    localStorage.setItem('analytics-consent', 'accepted');
    localStorage.setItem('marketing-consent', 'accepted');
    setIsVisible(false);
  };

    localStorage.setItem('analytics-consent', 'declined');
    localStorage.setItem('marketing-consent', 'declined');
    setIsVisible(false);
  };

    setIsVisible(false);
  };

  if (!isVisible) return null;

export default function CookieConsent() {
  return (

          {!showDetails ? (
            // Simple view;
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <Cookie className="w-5h-5ml-2" /></Cookie>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <h3 className="w-5h-5ml-2" />We use cookies;</h3>
                  </h3>
                  <p className="w-5h-5ml-2">We use cookies to enhance your browsing experience, serve personalized content,</p>
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
                  </p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <button;
                      onClick="{acceptAll}"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-all duration-300"
                      />Accept All;</button>
                    </button>
                    <button;
                      onClick="{acceptNecessary}"
                      className="border border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700 transition-colors"
                      />Necessary Only;</button>
                    </button>
                    <button;
                      onClick="{()" =  />setShowDetails(true)}
                      className="text-cyan-400 hover:text-cyan-300 px-6 py-2font-semibold transition-colors"</button>
                    ></button>
                      Customize;</button>
                    </button>
                  </div>
                <button;
                  onClick="{acceptNecessary}"
                  className="text-gray-400hover:text-white transition-colors"
                  aria-label="Close" /></button>
                  <X className="w-5h-5ml-2" /></X>
                </button>
              </div>
          ) : (
            // Detailed view;
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <h3 className="text-xlfont-semibold text-white"  >Cookie Preferences</h3>
                <button;
                  onClick="{()" = />setShowDetails(false)}
                  className="text-gray-400hover:text-white transition-colors"</button>
                  aria-label="Close details"</button>
                ></button>
                  <X className="w-5h-5ml-2" /></X>
                </button>
              </div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                {/* Necessary Cookies */}
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <Shield className="w-5h-5ml-2" /></Shield>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <h4 className="font-semibold text-white"  >Necessary Cookies</h4>
                      <span className="text-smtext-green-400font-medium"  >Always Active</span>
                    </div>
                    <p className="w-5h-5ml-2">These cookies are essential for the website to function properly. They cannot be disabled.</p>
                    </p>
                  </div>
                {/* Analytics Cookies */}
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <BarChart3 className="w-5h-5ml-2" /></BarChart3>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <h4 className="font-semibold text-white"  >Analytics Cookies</h4>
                      <label className="w-5h-5ml-2" /></label>
                        <input type="checkbox" className="sr-onlypeer" defaultChecked  /></input>
                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      </label>
                    </div>
                    <p className="w-5h-5ml-2">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                    </p>
                  </div>
                {/* Marketing Cookies */}
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <Settings className="w-5h-5ml-2" /></Settings>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <h4 className="font-semibold text-white"  >Marketing Cookies</h4>
                      <label className="w-5h-5ml-2" /></label>
                        <input type="checkbox" className="sr-onlypeer"  /></input>
                        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      </label>
                    </div>
                    <p className="w-5h-5ml-2">These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
                    </p>
                  </div>
              </div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <button;
                  onClick="{acceptAll}"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-all duration-300"
                  />Accept All;</button>
                </button>
                <button;
                  onClick="{acceptCustom}"
                  className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semiboldhover:bg-slate-600 transition-colors"
                  />Save Preferences;</button>
                </button>
                <button;
                  onClick="{acceptNecessary}"
                  className="border border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700 transition-colors"
                  />Reject All;</button>
                </button>
              </div>
          )}
        </div>
    </div>
  );
};

export default CookieConsent;

}