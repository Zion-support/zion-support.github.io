'use client';
import { useState, useEffect} from 'react';
import { X, Cookie} from 'lucide-react';

  const [showDetails, setShowDetails] = useState(false);
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
  }, []);

    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-consent', 'accepted');
    localStorage.setItem('marketing-consent', 'accepted');
    setIsVisible(false);
  };

    localStorage.setItem('cookie-consent', 'necessary');
    localStorage.setItem('analytics-consent', 'declined');
    localStorage.setItem('marketing-consent', 'declined');
    setIsVisible(false);
  };

    localStorage.setItem('cookie-consent', 'custom');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (

          {!showDetails ? (
            // Simple view
    
                  <h3 className="text-lg font-semiboldtext-whitemb-2">We use cookies

              We use cookies to enhance your browsing experience, serve personalized content,
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.

                      onClick="{acceptAll}"
Accept All
                    
                      onClick="{acceptNecessary}"
Necessary Only
                    
setShowDetails(true)}
                      className="text-cyan-400 hover:text-cyan-300 px-6 py-2font-semiboldtransition-colors"
                      Customize
    
          ) : (
            // Detailed view

                <h3 className="text-xlfont-semiboldtext-white">Cookie Preferences</h3>

 setShowDetails(false)}
                  className="text-gray-400hover:text-whitetransition-colors"
                  aria-label="Close details"

                {/* Necessary Cookies */}
    
                      <h4 className="font-semiboldtext-white">Necessary Cookies</h4>
                      <span className="text-smtext-green-400font-medium">Always Active</span>
                      These cookies are essential for the website to function properly. They cannot be disabled.

                {/* Analytics Cookies */}

                      <h4 className="font-semiboldtext-white">Analytics Cookies</h4>
        </div></div>
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.

                {/* Marketing Cookies */}

                      <h4 className="font-semiboldtext-white">Marketing Cookies</h4>
        </div></div>
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements.

                  onClick="{acceptAll}"
Accept All
                
                  onClick="{acceptCustom}"
Save Preferences
                
                  onClick="{acceptNecessary}"
                  className="border border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700transition-colors"
Reject All
    
          )}
    
  );
};

export default CookieConsent;
