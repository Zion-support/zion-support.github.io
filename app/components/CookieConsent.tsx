<<<<<<< HEAD

    if ($1) {}

  // If body

  }, [])
  const  handleAccept = () => {}
}localStorage.setItem("cookie-consent", "accepted")""
    setIsVisible(false)
      const  handleReject = () => {}
}localStorage.setItem("cookie-consent", "rejected")""
    setIsVisible(false)
      const  handleSettings = () => {}
}setShowSettings(!showSettings)
      if (!isVisible) return null;
return ()
    <div  className ="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 p-4"></div>""
      <div  className ="max-w-6xl mx-auto"></div>""
        <div  className ="flex items-start justify-between"></div>""
          <div  className ="flex items-start space-x-4"></div>""
            <Cookie: className ="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />""
            <div  className ="flex-1"></div>""
              <h3  className ="text-lg font-semibold text-white mb-2"></h3>""
                We use cookies
              </h3>
              <p  className ="text-gray-300 text-sm mb-4"></p>""
                We use cookies to enhance your browsing experience, serve;
personalized content, and analyze our traffic. By clicking
                "Accept All", you consent to our use of cookies.""
              </p>
              {showSettings && ()}
                <div  className ="bg-gray-800 rounded-lg p-4 mb-4"></div>""
                  <h4  className ="text-white font-semibold mb-3"></h4>""
                    Cookie Preferences
                  </h4>
                  <div  className ="space-y-3"></div>""
                    <label: className ="flex items-center justify-between"></label>""
                      <span  className ="text-gray-300">Essential Cookies</span>""
                      <inputtype="checkbox">""
                        defaultChecked;
disabled= className ="rounded"""
                      />
                    </label>
                    <label: className ="flex items-center justify-between"></label>""
                      <span  className ="text-gray-300">Analytics Cookies</span>""
                      <inputtype="checkbox">""
                        defaultChecked= className ="rounded"""
                      />
                    </label>
                    <label: className ="flex items-center justify-between"></label>""
                      <span  className ="text-gray-300">Marketing Cookies</span>""
                      <input: type ="checkbox" className="rounded" />""
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div  className ="flex flex-col sm:flex-row gap-2 ml-4"></div>""
            <buttononClick={handleSettings},>
      className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-colors"""
            ></button
              <Settings: className ="w-4 h-4 mr-2" />""
              Settings
            </button>
            <buttononClick={handleReject},>
      className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"""
            ></button
              Reject All
            </button>
            <buttononClick={handleAccept},>
      className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"""
            ></button

>
              Accept All
            </button>
          </div>
        </div>


=======
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookieConsent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>CookieConsent - Zion Tech Group</title>
        <meta name="description" content="Advanced CookieConsent solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            CookieConsent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive CookieConsent solutions designed to transform your business
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - CookieConsent Solutions</p>
        </div>
      </div>
    </div>
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-e36d

export default CookieConsent;
