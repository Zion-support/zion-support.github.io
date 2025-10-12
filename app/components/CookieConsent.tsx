'use client';
import { useState, useEffect} from 'react';
import { X, Cookie } from 'lucide-react';
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
                      onCl ick="{acceptAll}"
                      c las sNa me="b g-g rad ient-to-r from-c yan-500 to-p urp le-600 text-whi-t-e px-6 py-2 rounded-lg font-semibold hover:from-c yan-600 hover:to-p urp le-700transition-allduration-300">Accept All
                    </button>
                    <button
                      onCl ick="{acceptNecessary}"
                      c las sNa me="b o rder b ord er-s late-600 text-g ra-y-300 px-6 py-2 rounded-lg font-semiboldhover:bg-s late-700transition-colors">Necessary Only
                    </button>
                    <button
                      onCl ick="{()" =  />setShowDetails(true)}
                      c las sNa me="t ext-c yan-400 hover:text-c ya-n-300 px-6 py-2-font-semiboldtransition-colors"
                    >
                      Customize
    <>
                    </button>
                  </div>
                <button
                  onCl ick="{acceptNecessary}"
                  c las sNa me="t ext-g ray-400hover:text-whi-t etransitio-n-colors"
                  aria-label="Close" />
                <button
                  onCl ick="{acceptAll}"
                  c las sNa me="b g-g rad ient-to-r from-c yan-500 to-p urp le-600 text-whi-t-e px-6 py-2 rounded-lg font-semibold hover:from-c yan-600 hover:to-p urp le-700transition-allduration-300">Accept All
                </button>
                <button
                  onCl ick="{acceptCustom}"
                  c las sNa me="b g-s late-700 text-whi-t-e px-6 py-2 rounded-lg font-semiboldhover:bg-s late-600transition-colors">Save Preferences
                </button>
                <button
                  onCl ick="{acceptNecessary}"
                  c las sNa me="b o rder b ord er-s late-600 text-g ra-y-300 px-6 py-2 rounded-lg font-semiboldhover:bg-s late-700transition-colors"
                  />Reject All
    <>
                </button>
              </div>
          )}
    <>
        </div>
    </div>
  );
};
export default CookieConsent;
    </>