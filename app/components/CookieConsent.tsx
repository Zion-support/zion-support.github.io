'use client';
import { useState, useEffect} from 'react';
import { X, Cookie} from 'lucide-react';

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

                    <button
                      onClick={acceptAll}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Accept All
                    </button>
                    <button
                      onClick={acceptNecessary}
                      className="border border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700transition-colors">Necessary Only
                    </button>
                    <button
                      onClick="{()" =  />setShowDetails(true)}
                      className="text-cyan-400 hover:text-cyan-300 px-6 py-2font-semiboldtransition-colors"
                    >
                      Customize
                    </button>
                  </div>
                <button
                  onClick={acceptNecessary}
                  className="text-gray-400hover:text-whitetransition-colors"
                  aria-label="Close" />

                <button
                  onClick={acceptAll}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Accept All
                </button>
                <button
                  onClick={acceptCustom}
                  className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semiboldhover:bg-slate-600transition-colors">Save Preferences
                </button>
                <button
                  onClick={acceptNecessary}
                  className="border border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700transition-colors"
                  />Reject All
                </button>
              </div>
          )}
        </div>
    </div>
  );
};

export default CookieConsent;
