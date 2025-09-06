
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
// This component handles deep linking to the mobile app

const OpenAppRedirect: React.FC = () => {

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useEffect, useState } from "react",
import { useNavigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
// This component handles deep linking to the mobile app

const OpenAppRedirect: React.FC = () => {
=======
// This component handles deep linking to the mobile app;
const OpenAppRedirect: React.FC = () => {}
import React, { useEffect, useState } from "react","
import { useNavigate } from "react-router-dom","
import { SEO } from "@/components/SEO",";
import { Button } from "@/components/ui/button";"
import { Link } from "react-router-dom";"
import { Button } from "@/components/ui/button","
import { Link } from "react-router-dom",;
// This component handles deep linking to the mobile app;
const OpenAppRedirect: React.FC = () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const navigate = useNavigate()
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting');
  useEffect(() => {}
    const attemptAppOpen = async () => {}
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
<<<<<<< HEAD
      const isAndroid = /Android/.test(navigator.userAgent);
<<<<<<< HEAD
<<<<<<< HEAD
      // App scheme URLs (these would be your actual app's URL schemes)
<<<<<<< HEAD
      const appScheme = "zion: //"
      const androidAppUrl = "market: //details?id=app.zion.marketplace";
      const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000"
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const navigate = useNavigate(),
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting'),
  
  useEffect(() => {
    const attemptAppOpen = async () => {
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
      const isAndroid = /Android/.test(navigator.userAgent),
      
      // App scheme URLs (these would be your actual app's URL schemes)
      const appScheme = "zion: //",
      const androidAppUrl = "market://details?id=app.zion.marketplace",
      const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000",
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      const fallbackUrl = "/mobile-launch", // Fallback to mobile launch page
      let timeout: number | undefined
      // Try to open the app
      if (isAndroid |isiOS) {
        // Set a timeout to redirect to app store if the app doesn't open
        timeout = window.setTimeout(() => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
      const isAndroid = /Android/.test(navigator.userAgent);'
      // App scheme URLs (these would be your actual app's URL schemes)

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
      const fallbackUrl = "/mobile-launch", // Fallback to mobile launch page;
      let timeout: number | undefined;
      // Try to open the app;
      if (isAndroid |isiOS) {'
        // Set a timeout to redirect to app store if the app doesn't open;
        timeout = window.setTimeout(() => {}
'
          setStatus('timeout');
=======
      // App scheme URLs (these would be your actual app's URL schemes)          setStatus('timeout');
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      // App scheme URLs (these would be your actual app's URL schemes)          setStatus('timeout');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          if (isAndroid) {;
            window && window.location.href = androidAppUrl;
          } else if (isiOS) {;
            window && window.location.href = iosAppUrl;
<<<<<<< HEAD
<<<<<<< HEAD
          }


'
          setStatus('timeout'),
          if (isAndroid) {}
            window.location.href = androidAppUrl;
          } else if (isiOS) {}
            window.location.href = iosAppUrl;
      }


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useEffect, useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
=======
"
import React, { useEffect, useState } from "react",;"
import { useNavigate } from "react-router-dom",;"
import { SEO } from "@/components/SEO",;"
import { Button } from "@/components/ui/button",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Link } from "react-router-dom",;
// This component handles deep linking to the mobile app;
const OpenAppRedirect: React.FC = () => {;
  const navigate = useNavigate(),;'
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting'),;
  useEffect(() => {;
    const attemptAppOpen = async () => {;
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent),;
      const isAndroid = /Android/.test(navigator.userAgent),;'
      // App scheme URLs (these would be your actual app's URL schemes);"
      const appScheme = "zion: //",;"
      const androidAppUrl = "market://details?id=app.zion.marketplace",;"
      const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000",;"
      const fallbackUrl = "/mobile-launch", // Fallback to mobile launch page;
      let timeout: number | undefined,;
      // Try to open the app;
      if (isAndroid || isiOS) {;'
        // Set a timeout to redirect to app store if the app doesn't open;
        timeout = window.setTimeout(() => {;'
          setStatus('timeout'),;
          if (isAndroid) {;
            window.location.href = androidAppUrl;
          } else if (isiOS) {;
            window.location.href = iosAppUrl;
          }
        }, 2500), // Wait 2.5 seconds before redirecting to store;



        // Try to open the app;
        window && window.location.href = appScheme;
      } else {;
<<<<<<< HEAD
        // Not on mobile, redirect to mobile launch page;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        // Not on mobile, redirect to mobile launch page;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        setStatus('failed');
        setTimeout(() => {;
          navigate(fallbackUrl);
        }, 1500);
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc




      }

      
      // Clear timeout if page visibility changes (meaning app opened successfully)"
      document.addEventListener("visibilitychange", () => {}
        if (document.hidden && timeout) {}
          clearTimeout(timeout)
        }
      })
    }
    attemptAppOpen()
  }, [navigate]);

    },
    
    attemptAppOpen()
  }, [navigate]),
  
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default OpenAppRedirect;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



  return ("
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">
      <SEO"
        title="Opening Zion App""
        description="Redirecting to the Zion AI Marketplace mobile app"
        noindex={true}
      />"
      <div className="text-center p-8">"
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>'
        {status === 'redirecting' && (
          <>"
            <h1 className="text-2xl font-bold mb-2">Opening Zion App...</h1>"
            <p className="text-gray-300">
              If nothing happens, download the app first.
            </p>
          </>
        )}'
        {status === 'timeout' && (
          <>"
            <h1 className="text-2xl font-bold mb-2">App Not Installed</h1>"
            <p className="text-gray-300 mb-6">'
              We're redirecting you to download the Zion app.
            </p>
          </>
        )}'
        {status === 'failed' && (
          <>"
            <h1 className="text-2xl font-bold mb-2">Opening App Failed</h1>"
            <p className="text-gray-300 mb-6">'
              We're taking you to our mobile app page where you can download the app.
            </p>"
            <Link to="/mobile-launch">"
              <Button className="bg-zion-cyan hover:bg-zion-cyan/80">
                Go to Mobile App Page;
              </Button>
            </Link>
          </>
        )}


      // Clear timeout if page visibility changes (meaning app opened successfully);"
      document && document.addEventListener("visibilitychange", () => {;
        if (document && document.hidden && timeout) {;
          clearTimeout(timeout);
        }
      });
    };

    attemptAppOpen();
  }, [navigate]);

  return ("
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">;
      <SEO"
        title="Opening Zion App" "
        description="Redirecting to the Zion AI Marketplace mobile app"

        noindex={true}
<<<<<<< HEAD
=======
          }    
    attemptAppOpen()
  }, [navigate]),
          noindex={true}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          }    
    attemptAppOpen()
  }, [navigate]),
          noindex={true}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      />;
      <div className="text-center p-8">;
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>;
=======
      />;"
      <div className="text-center p-8">;"
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>;
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        {status === 'redirecting' && (;
          <>;"
            <h1 className="text-2xl font-bold mb-2">Opening Zion App...</h1>;"
            <p className="text-gray-300">;
              If nothing happens, download the app first.;
            </p>;
          </>;
        )}
<<<<<<< HEAD
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        {status === 'timeout' && (;
          <>;"
            <h1 className="text-2xl font-bold mb-2">App Not Installed</h1>;"
            <p className="text-gray-300 mb-6">;'
              We're redirecting you to download the Zion app.;
            </p>;
          </>;
        )}
<<<<<<< HEAD
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        {status === 'failed' && (;
          <>;"
            <h1 className="text-2xl font-bold mb-2">Opening App Failed</h1>;"
            <p className="text-gray-300 mb-6">;'
              We're taking you to our mobile app page where you can download the app.;
            </p>;"
            <Link to="/mobile-launch">;"
              <Button className="bg-zion-cyan hover:bg-zion-cyan/80">;
                Go to Mobile App Page;
              </Button>;
            </Link>;
          </>;
        )}
      </div>;
    </div>;
<<<<<<< HEAD
  )
};      </div>;
=======


      </div>
    </div>
  )
}
export default OpenAppRedirect;




      </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    </div>;
  );
},;

<<<<<<< HEAD
      }
export default OpenAppRedirect;export default OpenAppRedirect;
      }
export default OpenAppRedirect;
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  ),;
},;
;
export default OpenAppRedirect,;   //Set a timeout to redirect to app store if the app doesn't open attemptAppOpen () 
}, [navigate]);
return (<div className="min-h-screen flex items-center justify-center bg-zion-blue" > <SEO /> <div className="text-center p-8" > <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6" ></div> {
  status === 'redirecting'&& (<> </p> </>) 
}{
  status === 'timeout'&& (<> <h1 className="text-2xl font-bold mb-2" >App Not Installed</h1> <p className="text-gray-300 mb-6" > We're redirecting you to download the Zion app. </p> </>) 
}{
  status === 'failed' && (<> <h1 className="text-2xl font-bold mb-2" >Opening App Failed</h1> <p className="text-gray-300 mb-6" > We're taking you to our mobile app page where you can download the app. </p> <Link to="/mobile-launch" > <Button className="bg-zion-cyan hover:bg-zion-cyan/80" > Go to Mobile App Page </Button> </Link> </>) 
}</div> </div>) 
};
export default OpenAppRedirect;
export default OpenAppRedirect;
export default OpenAppRedirect;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
export default OpenAppRedirect;

'
import React, { useEffect, useState } from './react';'
import { use_navigate } from './react-router-dom';'
import { SEO } from '@/components / SEO';'
import { Button } from '@/components / ui / button';'
import { Link } from './react-router-dom';
// This component handles deep linking to the mobile app;
const OpenAppRedirect: React.FC = () => {}
  const navigate = use_navigate (),'
  const [status, set_status] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting');
;
  useEffect (() => {}
    const attemptAppOpen = async () => {}
      const isiOS = /i_pad | i_phone | i_pod/.test (navigator.user_agent);
      const is_android = /Android/.test (navigator.user_agent);
;'
      // App scheme URLs (these would be your actual app's URL schemes);"
      const app_scheme = "zion: //","
      const androidAppUrl = "market: //details?id = app.zion.marketplace";"
      const iosAppUrl = "https://apps.apple.com / app / zion - ai - marketplace / id0000000000","
      const fallback_url = "/mobile - launch", // Fallback to mobile launch page;
      let timeout: number | undefined,
      // Try to open the app;
      // Check condition;
if ( {) {}
  $2;
}'
        // Set a timeout to redirect to app store if the app doesn't open;
        timeout = window.set_timeout (() => {'
          set_status ('timeout');
          // Check condition;
if ( {) {}
  $2;
}
            window.location.href = androidAppUrl;
          } else // Check condition;
if ( {) {}
  $2;
}
            window.location.href = iosAppUrl;
          }
        }, 2500), // Wait 2.5 seconds before redirecting to store;
        // Try to open the app;
        window.location.href = app_scheme;
      } else {}
        // Not on mobile, redirect to mobile launch page;'
        set_status ('failed');
        set_timeout (() => {}
          navigate (fallback_url);
        }, 1500);



      }
export default OpenAppRedirect;



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
