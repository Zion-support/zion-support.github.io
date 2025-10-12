import { useState, useEffect} from 'react';
import { X, Cookie} from 'lucide-react';
const CookieConsent: React.FC = () => {;
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);
  const acceptAll = () => {;
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-consent', 'accepted');
    localStorage.setItem('marketing-consent', 'accepted');
    setIsVisible(false);
  };
  const acceptNecessary = () => {;
    localStorage.setItem('cookie-consent', 'necessary');
    localStorage.setItem('analytics-consent', 'declined');
    localStorage.setItem('marketing-consent', 'declined');
    setIsVisible(false);
  };
  const acceptCustom = () => {;
    localStorage.setItem('cookie-consent', 'custom');
    setIsVisible(false);
  };
  if (!isVisible) return null;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function CookieConsent() {
  return (
    <div>Content</div>
  );
    <div>Component content</div>
  );
}
  return (
    <div>Content</div>
  );
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          {!showDetails ? (;
            // Simple view;
            <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <Cookie className="w-5h-5ml-2" /></Cookie>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
                  <h3 className="w-5h-5ml-2" />We use cookies;
                  </h3>
                  <p className = "w-5h-5ml-2">We use cookies to enhance your browsing experience, serve personalized content,
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
                    <button;                      />Accept All;
                      onClick = "{acceptAll}"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-all duration-300"
                    </button>;
                    <button;                      />Necessary Only;
                      onClick = "{acceptNecessary}"
                      className="border border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700 transition-colors"
                    </button>;
                    <button;                      onClick = "{()" =  />setShowDetails(true)}
                      className="text-cyan-400 hover:text-cyan-300 px-6 py-2font-semibold transition-colors"
                    >;
                      Customize;
                    </button>
                  </div>
                <button;                  aria-label = "Close" /></button>
                  onClick="{acceptNecessary}"
                  className="text-gray-400hover:text-white transition-colors"
                  <X className="w-5h-5ml-2" /></X>
                </button>
              </div>
          ) : (;
            // Detailed view;
            <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <h3 className="text-xlfont-semibold text-white"  >Cookie Preferences</h3>;
                <button;                  onClick = "{()" = /> setShowDetails(false)}
                  className="text-gray-400hover:text-white transition-colors"
                  aria-label="Close details"
                >
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
                    <p className="w-5h-5ml-2">These cookies are essential for the website to function properly. They cannot be disabled.
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
                    <p className="w-5h-5ml-2">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
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
                    <p className="w-5h-5ml-2">These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                  </div>
              </div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>;
                <button;                  />Accept All;
                  onClick = "{acceptAll}"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-all duration-300"
                </button>;
                <button;                  />Save Preferences;
                  onClick = "{acceptCustom}"
                  className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semiboldhover:bg-slate-600 transition-colors"
                </button>;
                <button;                  />Reject All;
                  onClick = "{acceptNecessary}"
                  className="border border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700 transition-colors"
                </button>
              </div>
          )}
        </div>
    </div>;
  );
};
    <>
      <Helmet >
        <title>Cookie Consent - Zion Tech Group</title>
        <meta name = "description" content="Professional cookie consent by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cookie Consent</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cookie consent coming soon.</p>
          <Link >
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>;
  );
}