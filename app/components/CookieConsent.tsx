import {useState, useEffect} from 'react';
import {X, Cookie} from 'lucide-react';
'use client';

const Cookie Consent: React.FC = () => {
  const [show Details, set Show Details] = use State(false);
  use Effect(() => {
    constconsent = local Storage.get Item('cookie-consent');
    if (!consent) {
      set Is Visible(true);
    }
  }, []);

  const acceptAll = () => {
    local Storage.set Item('cookie-consent', 'accepted');
    local Storage.set Item('analytics-consent', 'accepted');
    local Storage.set Item('marketing-consent', 'accepted');
    set Is Visible(false);
  };

  const acceptNecessary = () => {
    local Storage.set Item('cookie-consent', 'necessary');
    local Storage.set Item('analytics-consent', 'declined');
    local Storage.set Item('marketing-consent', 'declined');
    set Is Visible(false);
  };

  const acceptCustom = () => {
    local Storage.set Item('cookie-consent', 'custom');
    set Is Visible(false);
  };

  if (!isVisible) return null;

  return (
    <div className ="fixedbottom-0 left-0 right-0z-50p-4" />
      <div className ="max-w-4xlmx-auto" />
        <div className ="bg-slate-800 borderborder-slate-700 rounded-xlshadow-2xlbackdrop-blur-sm" />
          {!showDetails ? (
            // Simpleview
            <div className ="p-6" />
              <div className ="flexitems-startspace-x-4" />
                <div className ="flex-shrink-0" />
                  <Cookieclass Name ="w-8h-8text-cyan-400" / />
                </div>
                <div className ="flex-1" />
                  <h3className ="text-lgfont-semiboldtext-whitemb-2"  />Weuse cookies
                  </h3>
                  <pclassName ="text-gray-300mb-4" />
                    Weuse cookiesto enhanceyour browsingexperience, servepersonalized content,
                    andanalyze ourtraffic. Byclicking "AcceptAll", youconsent toour useof cookies.
                  </p>
                  <div className ="flexflex-colsm:flex-rowgap-3" />
                    <buttononClick ="{acceptAll}"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-whitepx-6 py-2 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700transition-allduration-300"
                      />AcceptAll
                    </button>
                    <buttononClick ="{acceptNecessary}"
                      className="borderborder-slate-600 text-gray-300 px-6 py-2 rounded-lgfont-semiboldhover:bg-slate-700transition-colors"
                      />NecessaryOnly
                    </button>
                    <buttononClick ="{()" =  />set Show Details(true)}
                      className="text-cyan-400 hover:text-cyan-300 px-6 py-2font-semiboldtransition-colors"
                    >
                      Customize
                    </button>
                  </div>
                </div>
                <button
                  onClick ="{accept Necessary}"
                  className="text-gray-400hover:text-whitetransition-colors"
                  aria-label="Close" />
                  <Xclass Name ="w-5h-5" / />
                </button>
              </div>
            </div>
          ) : (
            // Detailedview
            <div className ="p-6" />
              <div className ="flexitems-centerjustify-betweenmb-6" />
                <h3className ="text-xlfont-semiboldtext-white"  >CookiePreferences</h3>
                <buttononClick ="{()" = /> set Show Details(false)}
                  className="text-gray-400hover:text-whitetransition-colors"
                  aria-label="Close details"
                >
                  <Xclass Name ="w-5h-5" / />
                </button>
              </div>

              <div className ="space-y-6" />
                {/* Necessary Cookies */}
                <div className ="flexitems-startspace-x-4" />
                  <Shieldclass Name ="w-6 h-6text-green-400mt-1" / />
                  <div className ="flex-1" />
                    <div className ="flex items-centerjustify-betweenmb-2" />
                      <h4className ="font-semiboldtext-white"  >Necessary Cookies</h4>
                      <spanclassName ="text-smtext-green-400font-medium"  >Always Active</span>
                    </div>
                    <pclassName ="text-gray-300text-sm" />
                      These cookies are essential for the website to function properly. They cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className ="flexitems-startspace-x-4" />
                  <Bar Chart3class Name="w-6 h-6text-blue-400mt-1" / />
                  <div className ="flex-1" />
                    <div className ="flex items-centerjustify-betweenmb-2" />
                      <h4className ="font-semiboldtext-white"  >Analytics Cookies</h4>
                      <labelclassName ="relative inline-flexitems-centercursor-pointer" />
                        <inputtype ="checkbox" className="sr-onlypeer" default Checked / />
                        <div className ="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2, px] after:left-[2, px] after:bg-white after:rounded-full after:h-5 after:w-5after:transition-allpeer-checked:bg-cyan-500" /></div>
                      </label>
                    </div>
                    <pclassName ="text-gray-300text-sm" />
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className ="flexitems-startspace-x-4" />
                  <Settingsclass Name ="w-6 h-6text-purple-400mt-1" / />
                  <div className ="flex-1" />
                    <div className ="flex items-centerjustify-betweenmb-2" />
                      <h4className ="font-semiboldtext-white"  >Marketing Cookies</h4>
                      <labelclassName ="relative inline-flexitems-centercursor-pointer" />
                        <inputtype ="checkbox" className="sr-onlypeer" / />
                        <div className ="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2, px] after:left-[2, px] after:bg-white after:rounded-full after:h-5 after:w-5after:transition-allpeer-checked:bg-cyan-500" /></div>
                      </label>
                    </div>
                    <pclassName ="text-gray-300text-sm" />
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                    </p>
                  </div>
                </div>
              </div>

              <div className ="flex flex-col sm:flex-row gap-3 mt-6 pt-6border-t border-slate-700" />
                <button
                  onClick ="{accept All}"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300"
                  />Accept All
                </button>
                <button
                  onClick ="{accept Custom}"
                  className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semiboldhover:bg-slate-600transition-colors"
                  />Save Preferences
                </button>
                <button
                  onClick ="{accept Necessary}"
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

export default Cookie Consent;