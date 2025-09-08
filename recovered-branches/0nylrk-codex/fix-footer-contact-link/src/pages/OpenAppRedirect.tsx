






          if (isAndroid) {
            window.location.href = androidAppUrl
          } else if (isiOS) {
            window.location.href = iosAppUrl



  const navigate = useNavigate(),;
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting'),;
  useEffect(() => {;
    const attemptAppOpen = async () => {;
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent),;
      const isAndroid = /Android/.test(navigator.userAgent),;
      // App scheme URLs (these would be your actual app's URL schemes);
      const appScheme = "zion: //",;
      const androidAppUrl = "market://details?id=app.zion.marketplace",;
      const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000",;
      const fallbackUrl = "/mobile-launch", // Fallback to mobile launch page;
      let timeout: number | undefined,;
      // Try to open the app;
      if (isAndroid || isiOS) {;
        // Set a timeout to redirect to app store if the app doesn't open;
        timeout = window.setTimeout(() => {;
          setStatus('timeout'),;
          if (isAndroid) {;
            window.location.href = androidAppUrl;
          } else if (isiOS) {;
            window.location.href = iosAppUrl;
          }
        }, 2500), // Wait 2.5 seconds before redirecting to store;








      }




  return (
import React, { useEffect, useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
;
// This component handles deep linking to the mobile app;
const OpenAppRedirect:React.FC = () => {;
  const navigate = useNavigate(),;
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting'),;
  ;
  useEffect(() => {;
    const attemptAppOpen = async () => {;
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent),;
      const isAndroid = /Android/.test(navigator.userAgent),;
      ;
      // App scheme URLs (these would be your actual app's URL schemes);
      const appScheme = "zion://",;
      const androidAppUrl = "market://details?id=app.zion.marketplace",;
      const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000",;
      const fallbackUrl = "/mobile-launch", // Fallback to mobile launch page;
      ;
      let timeout:number | undefined,;
      ;
      // Try to open the app;
      if (isAndroid || isiOS) {;
        // Set a timeout to redirect to app store if the app doesn't open;
        timeout = window.setTimeout(() => {;
          setStatus('timeout'),;
          if (isAndroid) {;
            window.location.href = androidAppUrl;
          } else if (isiOS) {;
            window.location.href = iosAppUrl,;
          }
        }, 2500), // Wait 2.5 seconds before redirecting to store;
        ;
        // Try to open the app;
        window.location.href = appScheme,;
      } else {;
        // Not on mobile, redirect to mobile launch page;
        setStatus('failed'),;
        setTimeout(() => {;
          navigate(fallbackUrl),;
        }, 1500),;
      }
      ;
      // Clear timeout if page visibility changes (meaning app opened successfully);
      document.addEventListener("visibilitychange", () => {;
        if (document.hidden && timeout) {;
          clearTimeout(timeout),;
        }
      }),;
    },;
    ;
    attemptAppOpen(),;
  }, [navigate]),;
  ;
  return (;
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">;
      <SEO ;
        title="Opening Zion App" ;
        description="Redirecting to the Zion AI Marketplace mobile app";


      </div>
    </div>
  )
}
export default OpenAppRedirect;


    </div>;
  );
},;





