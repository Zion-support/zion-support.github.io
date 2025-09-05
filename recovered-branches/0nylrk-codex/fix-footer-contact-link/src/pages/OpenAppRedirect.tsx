
<<<<<<< HEAD
import React, { useEffect, useState } from "react",
import { useNavigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
=======
import React, { useEffect, useState } from &quot;react&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
// This component handles deep linking to the mobile app
const OpenAppRedirect: React.FC = () => {
  const navigate = useNavigate(),
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting'),
  
  useEffect(() => {
    const attemptAppOpen = async () => {
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
      const isAndroid = /Android/.test(navigator.userAgent),
      
      // App scheme URLs (these would be your actual app's URL schemes)
<<<<<<< HEAD
      const appScheme = "zion: //",
      const androidAppUrl = "market://details?id=app.zion.marketplace",
      const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000",
      const fallbackUrl = "/mobile-launch", // Fallback to mobile launch page
=======
      const appScheme = &quot;zion://&quot;;
      const androidAppUrl = &quot;market://details?id=app.zion.marketplace&quot;;
      const iosAppUrl = &quot;https://apps.apple.com/app/zion-ai-marketplace/id0000000000&quot;;
      const fallbackUrl = &quot;/mobile-launch&quot;; // Fallback to mobile launch page
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      let timeout: number | undefined,
      
      // Try to open the app
      if (isAndroid || isiOS) {
        // Set a timeout to redirect to app store if the app doesn't open
        timeout = window.setTimeout(() => {
          setStatus('timeout'),
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
        setStatus('failed'),
        setTimeout(() => {
          navigate(fallbackUrl)
        }, 1500)
      }
      
      // Clear timeout if page visibility changes (meaning app opened successfully)
      document.addEventListener(&quot;visibilitychange&quot;, () => {
        if (document.hidden && timeout) {
          clearTimeout(timeout)
        }
      })
    },
    
    attemptAppOpen()
  }, [navigate]),
  
  return (
    <div className=&quot;min-h-screen flex items-center justify-center bg-zion-blue&quot;>
      <SEO 
        title=&quot;Opening Zion App&quot; 
        description=&quot;Redirecting to the Zion AI Marketplace mobile app&quot;
        noindex={true}
      />
      <div className=&quot;text-center p-8&quot;>
        <div className=&quot;w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6&quot;></div>
        
        {status === 'redirecting' && (
          <>
            <h1 className=&quot;text-2xl font-bold mb-2&quot;>Opening Zion App...</h1>
            <p className=&quot;text-gray-300&quot;>
              If nothing happens, download the app first.
            </p>
          </>
        )}
        
        {status === 'timeout' && (
          <>
            <h1 className=&quot;text-2xl font-bold mb-2&quot;>App Not Installed</h1>
            <p className=&quot;text-gray-300 mb-6&quot;>
              We're redirecting you to download the Zion app.
            </p>
          </>
        )}
        
        {status === 'failed' && (
          <>
            <h1 className=&quot;text-2xl font-bold mb-2&quot;>Opening App Failed</h1>
            <p className=&quot;text-gray-300 mb-6&quot;>
              We're taking you to our mobile app page where you can download the app.
            </p>
            <Link to=&quot;/mobile-launch&quot;>
              <Button className=&quot;bg-zion-cyan hover:bg-zion-cyan/80&quot;>
                Go to Mobile App Page
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
},

export default OpenAppRedirect,
