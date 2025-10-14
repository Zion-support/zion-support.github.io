import React from 'react;
import { Cookie, Settings } from "lucide-react";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");"
    if (!consent) {
      setIsVisible(true);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");"
    setIsVisible(false);
  };
  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");"
    setIsVisible(false);
  };
  const handleSettings = () => {
    setShowSettings(!showSettings);
  };
  if (!isVisible) return null;
  return (
    
    <div>
    <div />
        <div>
    <div />
            <Cookie />
            <div>
    <h3 />
                We use cookies
              </h3>
              <p />
                We use cookies to enhance your browsing experience, serve
                personalized content, and analyze our traffic. By clicking
                "Accept All", you consent to our use of cookies.
              </p>
              {showSettings && (
                <div>
    <h4 />
                    Cookie Preferences
                  </h4>
                  <div>
    <label />
                      <span className="text-gray-300">Essential Cookies</span>
                      <input />
                    </label>
                    <label />
                      <span className="text-gray-300">Analytics Cookies</span>
                      <input />
                    </label>
                    <label />
                      <span className="text-gray-300">Marketing Cookies</span>
                      <input />
                    </label>
                  </div>
                </div>
              )}
            </div>
  </div>
  <div>
    <button />
              <Settings />
              Settings
            </button>
            <button />
              Reject All
            </button>
            <button />
              Accept All
            </button>
          </div>
          </div>
        </div>
      </div>
  )}
};
export default CookieConsent;