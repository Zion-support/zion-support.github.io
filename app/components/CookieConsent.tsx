'use client';
import { use State, use Effect} from 'react';
import { X, Cookie} from 'lucide-react';

const Cookie Consent: React.F C = () => {
  const [show Details, set Show Details] = use State(false);
  use Effect(() => {
    const consent = local Storage.get Item('cookie-consent');
    if (!consent) {
      set Is Visible(true);
    }
  }, []);

  const accept All = () => {
    local Storage.set Item('cookie-consent', 'accepted');
    local Storage.set Item('analytics-consent', 'accepted');
    local Storage.set Item('marketing-consent', 'accepted');
    set Is Visible(false);
  };

  const accept Necessary = () => {
    local Storage.set Item('cookie-consent', 'necessary');
    local Storage.set Item('analytics-consent', 'declined');
    local Storage.set Item('marketing-consent', 'declined');
    set Is Visible(false);
  };

  const accept Custom = () => {
    local Storage.set Item('cookie-consent', 'custom');
    set Is Visible(false);
  };

  if (!is Visible) return null;

  return (

    <d iv class Name="f ixed bottom-0 left-0 right-0z-50p-4">
        </d iv>
      <d iv class Name="m ax-w-4xlmx-auto">
        </d iv>
        <d iv class Name="b g-slate-800 border border-slate-700 rounded-xl shadow-2xlbackdrop-blur-sm">
        </d iv>
          {!show Details ? (
            // Simple view

            <d iv class Name="p-6">
        </d iv>
              <d iv class Name="f lexitems-startspace-x-4">
        </d iv>
                <d iv class Name="f lex-shrink-0">
        </d iv>
                  <C ookie class Name="w-8h-8t ext-cyan-400" / />
                </d iv>
                <d iv class Name="f lex-1">
        </d iv>
                  <h3 c lass Name="t ext-lg font-semiboldtext-whitemb-2">We use cookies
                  </h3>
                  <p c lass Name="t ext-gray-300 mb-4">
              We use cookies to enhance your browsing experience, serve personalized content,
                    and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.

                  </p>
                  <d iv class Name="f lex flex-colsm:flex-rowgap-3">
        </d iv>
                    <b utton
                      on Click="{accept All}"
                      class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Accept All
                    </b utton>
                    <b utton
                      on Click="{accept Necessary}"
                      class Name="b order border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700transition-colors">Necessary Only
                    </b utton>
                    <b utton
                      on Click="{()" =  />set Show Details(true)}
                      class Name="t ext-cyan-400 hover:text-cyan-300 px-6 py-2font-semiboldtransition-colors"
                    >
                      Customize

                    </b utton>
                  </d iv>
                <b utton
                  on Click="{accept Necessary}"
                  class Name="t ext-gray-400hover:text-whitetransition-colors"
                  aria-label="Close" />

                  <X c lass Name="w-5h-5" / />
                </b utton>
              </d iv>
          ) : (
            // Detailed view

            <d iv class Name="p-6">
        </d iv>
              <d iv class Name="f lex items-centerjustify-betweenmb-6">
        </d iv>
                <h3 c lass Name="t ext-xlfont-semiboldtext-white">Cookie Preferences</h3>
                <b utton
                  on Click="{()" = /> set Show Details(false)}
                  class Name="t ext-gray-400hover:text-whitetransition-colors"
                  aria-label="Close details"
                >

                  <X c lass Name="w-5h-5" / />
                </b utton>
              </d iv>

              <d iv class Name="s pace-y-6">
        </d iv>
                {/* Necessary Cookies */}

                <d iv class Name="f lexitems-startspace-x-4">
        </d iv>
                  <S hield class Name="w-6 h-6t ext-green-400mt-1" / />
                  <d iv class Name="f lex-1">
        </d iv>
                    <d iv class Name="f lex items-centerjustify-betweenmb-2">
        </d iv>
                      <h4 c lass Name="f ont-semiboldtext-white">Necessary Cookies</h4>
                      <s pan class Name="t ext-smtext-green-400font-medium">Always Active</s pan>
                    </d iv>
                    <p c lass Name="t ext-gray-300text-sm" />
                      These cookies are essential for the website to function properly. They cannot be disabled.

                    </p>
                  </d iv>

                {/* Analytics Cookies */}

                <d iv class Name="f lexitems-startspace-x-4">
        </d iv>
                  <B ar Chart3 class Name="w-6 h-6t ext-blue-400mt-1" / />
                  <d iv class Name="f lex-1">
        </d iv>
                    <d iv class Name="f lex items-centerjustify-betweenmb-2">
        </d iv>
                      <h4 c lass Name="f ont-semiboldtext-white">Analytics Cookies</h4>
                      <l abel class Name="r elative inline-flexitems-centercursor-pointer" />
                        <i nput type="checkbox" class Name="s r-onlypeer" default Checked / />
                        <d iv class Name="w-11 h-6 b g-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2, px] after:left-[2, px] after:bg-white after:rounded-full after:h-5 after:w-5after:transition-allpeer-checked:bg-cyan-500">
        </d iv></d iv>
                      </l abel>
                    </d iv>
                    <p c lass Name="t ext-gray-300text-sm" />
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.

                    </p>
                  </d iv>

                {/* Marketing Cookies */}

                <d iv class Name="f lexitems-startspace-x-4">
        </d iv>
                  <S ettings class Name="w-6 h-6t ext-purple-400mt-1" / />
                  <d iv class Name="f lex-1">
        </d iv>
                    <d iv class Name="f lex items-centerjustify-betweenmb-2">
        </d iv>
                      <h4 c lass Name="f ont-semiboldtext-white">Marketing Cookies</h4>
                      <l abel class Name="r elative inline-flexitems-centercursor-pointer" />
                        <i nput type="checkbox" class Name="s r-onlypeer" / />
                        <d iv class Name="w-11 h-6 b g-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-500/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2, px] after:left-[2, px] after:bg-white after:rounded-full after:h-5 after:w-5after:transition-allpeer-checked:bg-cyan-500">
        </d iv></d iv>
                      </l abel>
                    </d iv>
                    <p c lass Name="t ext-gray-300text-sm" />
                      These cookies are used to track visitors across websites to display relevant and engaging advertisements.

                    </p>
                  </d iv>
              </d iv>

              <d iv class Name="f lex flex-col sm:flex-row gap-3 mt-6 pt-6border-tborder-slate-700">
        </d iv>
                <b utton
                  on Click="{accept All}"
                  class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Accept All
                </b utton>
                <b utton
                  on Click="{accept Custom}"
                  class Name="b g-slate-700 text-white px-6 py-2 rounded-lg font-semiboldhover:bg-slate-600transition-colors">Save Preferences
                </b utton>
                <b utton
                  on Click="{accept Necessary}"
                  class Name="b order border-slate-600 text-gray-300 px-6 py-2 rounded-lg font-semiboldhover:bg-slate-700transition-colors"
                  />Reject All

                </b utton>
              </d iv>
          )}

        </d iv>
    </d iv>
  );
};

export default Cookie Consent;
