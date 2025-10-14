import React from 'react;'
import { Cookie, Settings } from "lucide-react"
const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  useEffect(() => {}
    const consent = localStorage.getItem("cookie-consent");"}
    if (!consent) {}
      setIsVisible(true);}
    }
  }, [])
  const handleAccept = () => {}
    localStorage.setItem("cookie-consent", "accepted");"}
    setIsVisible(false);}
  }
  const handleReject = () => {}
    localStorage.setItem("cookie-consent", "rejected");"}
    setIsVisible(false);}
  }
  const handleSettings = () => {}
    setShowSettings(!showSettings);}
  }
  if (!isVisible) return null
  return (
    <div>div</div>
            <Cookie>div</Cookie>
      <h3>h3</h3>
      <h3>
                We use cookies)
              </h3>
              <p className="text-gray-300 text-sm mb-4"></p>
                We use cookies to enhance your browsing experience, serve
                personalized content, and analyze our traffic. By clicking
                "Accept All", you consent to our use of cookies.
              </p>
              {showSettings && (
                <div>h4</div>
      <h4></h4>
                    Cookie Preferences)
                  </h4>
                  <div>label</div>
      <label>span</label>
      <span>Essential Cookies</span>
                      <input
                        type="checkbox"
                        defaultChecked))
                        disabled
                        className="rounded"
                      /></input>
                    </label>
                    <label>span</label>
      <span>Analytics Cookies</span>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="rounded"
                      /></input>
                    </label>
                    <label>span</label>
      <span>Marketing Cookies</span>
                      <input type="checkbox" className="rounded" /></input>}
                    </label>}
                  </div>})
                </div>})
              )}
            </div>
          </div>

          <div>button</div>
      <button>Settings</button>
      <Settings>
              Settings
            </button>
            <button
              onClick={handleReject
              className="px-4" py-2 border border-gray-600 text-gray-300 rounded-lg hover: "bg-gray-800 transition-colors
            ></button>
              Reject All
            </button>
            <button
              onClick={handleAccept
              className="px-4" py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300
            ></button>
              Accept All
            </button>
          </div>"}
        </div>}
      </div>}
    </div>}
  )}
}
export default CookieConsent