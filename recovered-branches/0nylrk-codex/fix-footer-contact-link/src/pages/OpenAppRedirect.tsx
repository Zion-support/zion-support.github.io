import React, { useEffect, useState } from "react",
import { useNavigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// This component handles deep linking to the mobile app

const OpenAppRedirect: React.FC = () => {
  const navigate = useNavigate($2);
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting'),
  
  useEffect(() => {
    const attemptAppOpen = async () => {
      const isiOS = /iPad|iPhone|iPod/.test($2);
      const isAndroid = /Android/.test($2);
      // App scheme URLs (these would be your actual app's URL schemes)
      const appScheme = $2;
      const androidAppUrl = $2;
      const iosAppUrl = $2;
      const fallbackUrl = "/mobile-launch", // Fallback to mobile launch page
      
      let timeout: number | undefined,
      
      // Try to open the app
      if (isAndroid |isiOS) {
        // Set a timeout to redirect to app store if the app doesn't open
        timeout = window.setTimeout(() => {
      // App scheme URLs (these would be your actual app's URL schemes)          setStatus('timeout');
          if (isAndroid) {;
            window && window.location.href = androidAppUrl;
          } else if (isiOS) {;
            window && window.location.href = iosAppUrl;
          setStatus($2);
          if (isAndroid) {
            window.location.href = androidAppUrl
          } else if (isiOS) {
            window.location.href = iosAppUrl
          }
        }, 2500), // Wait 2.5 seconds before redirecting to store
        
        // Try to open the app
        window.location.href = appScheme
      } else {
        // Not on mobile, redirect to mobile launch page
        setStatus($2);
        setTimeout(() => {
          navigate(fallbackUrl)
        }, 1500)
      }
      
      // Clear timeout if page visibility changes (meaning app opened successfully)
      document.addEventListener("visibilitychange", () => {
        if (document.hidden && timeout) {
          clearTimeout(timeout)
        }
      })
    },
    
    attemptAppOpen()
  }, [navigate]),
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">
      <SEO
        title="Opening Zion App"
        description="Redirecting to the Zion AI Marketplace mobile app"
        noindex={true}
      />
      <div className="text-center p-8">
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        {status === 'redirecting' && (
          <>
            <h1 className="text-2xl font-bold mb-2">Opening Zion App...</h1>
            <p className="text-gray-300">
              If nothing happens, download the app first.
            </p>
          </>
        )}
          }    
    attemptAppOpen()
  }, [navigate]),
          noindex={true}
      />;
      <div className="text-center p-8">;
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>;
        {status === 'redirecting' && (;
          <>;
            <h1 className="text-2xl font-bold mb-2">Opening Zion App...</h1>;
            <p className="text-gray-300">;
              If nothing happens, download the app first.;
            </p>;
          </>;
        )}
        {status === 'timeout' && (;
          <>;
            <h1 className="text-2xl font-bold mb-2">App Not Installed</h1>;
            <p className="text-gray-300 mb-6">;
              We're redirecting you to download the Zion app.;
            </p>;
          </>;
        )}
        {status === 'failed' && (;
          <>;
            <h1 className="text-2xl font-bold mb-2">Opening App Failed</h1>;
            <p className="text-gray-300 mb-6">;
              We're taking you to our mobile app page where you can download the app.;
            </p>;
            <Link to="/mobile-launch">;
              <Button className="bg-zion-cyan hover:bg-zion-cyan/80">;
                Go to Mobile App Page;
              </Button>;
            </Link>;
          </>;
        )}
      </div>;
    </div>;
  )
};      </div>;
    </div>;
  );
},;

      }
export default OpenAppRedirect;export default OpenAppRedirect;
      }
export default OpenAppRedirect;
;
        
        {status = $2;
export default OpenAppRedirect,
