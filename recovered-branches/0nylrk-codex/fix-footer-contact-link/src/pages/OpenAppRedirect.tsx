

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
// This component handles deep linking to the mobile app

const OpenAppRedirect: React.FC = () => {

<<<<<<< HEAD

import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import React, { useEffect, useState } from "react",
import { useNavigate } from "react-router-dom",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
// This component handles deep linking to the mobile app

const OpenAppRedirect: React.FC = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting');
  useEffect(() => {
    const attemptAppOpen = async () => {
      const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      // App scheme URLs (these would be your actual app's URL schemes)
      const appScheme = "zion: //"
      const androidAppUrl = "market: //details?id=app.zion.marketplace";
      const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000"
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const fallbackUrl = "/mobile-launch", // Fallback to mobile launch page
      let timeout: number | undefined
      // Try to open the app
      if (isAndroid |isiOS) {
        // Set a timeout to redirect to app store if the app doesn't open
        timeout = window.setTimeout(() => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
// This component handles deep linking to the mobile app;
const OpenAppRedirect: React.FC = () => {;
  const navigate = useNavigate(),;
  const [status, setStatus] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting');

  useEffect(() => {;
    const attemptAppOpen = async () => {;
      const isiOS = /iPad|iPhone|iPod/.test(navigator && navigator.userAgent);
      const isAndroid = /Android/.test(navigator && navigator.userAgent);

      // App scheme URLs (these would be your actual app's URL schemes);
      const appScheme = "zion: //",;
      const androidAppUrl = "market: //details?id=app && app.zion.marketplace";
      const iosAppUrl = "https://apps && apps.apple.com/app/zion-ai-marketplace/id0000000000",;
      const fallbackUrl = "/mobile-launch", // Fallback to mobile launch page;

      let timeout: number | undefined,;

      // Try to open the app;
      if (isAndroid || isiOS) {;
        // Set a timeout to redirect to app store if the app doesn't open;
        timeout = window && window.setTimeout(() => {;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          setStatus('timeout');
          if (isAndroid) {;
            window && window.location.href = androidAppUrl;
          } else if (isiOS) {;
            window && window.location.href = iosAppUrl;
          }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        }, 2500), // Wait 2 && 2.5 seconds before redirecting to store;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          setStatus('timeout'),
          if (isAndroid) {
            window.location.href = androidAppUrl
          } else if (isiOS) {
            window.location.href = iosAppUrl

<<<<<<< HEAD
<<<<<<< HEAD
          }
        }, 2500), // Wait 2.5 seconds before redirecting to store
        // Try to open the app
        window.location.href = appScheme
      } else {
        // Not on mobile, redirect to mobile launch page
        setStatus('failed');
        setTimeout(() => {
          navigate(fallbackUrl)
        }, 1500)
      }
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useState } from "react",;
import { useNavigate } from "react-router-dom",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
// This component handles deep linking to the mobile app;
const OpenAppRedirect: React.FC = () => {;
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
<<<<<<< HEAD
<<<<<<< HEAD
        }, 2500), // Wait 2 && 2.5 seconds before redirecting to store;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        // Try to open the app;
        window && window.location.href = appScheme;
      } else {;
        // Not on mobile, redirect to mobile launch page;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setStatus('failed');
        setTimeout(() => {;
          navigate(fallbackUrl);
        }, 1500);
<<<<<<< HEAD
<<<<<<< HEAD
        // Try to open the app;
        window.location.href = appScheme;
      } else {;
        // Not on mobile, redirect to mobile launch page;
        setStatus('failed'),;
        setTimeout(() => {;
          navigate(fallbackUrl);
        }, 1500);
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
      
      // Clear timeout if page visibility changes (meaning app opened successfully)
      document.addEventListener("visibilitychange", () => {
        if (document.hidden && timeout) {
          clearTimeout(timeout)
        }
      })
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



      }


<<<<<<< HEAD
    }
    attemptAppOpen()
  }, [navigate]);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    attemptAppOpen()
  }, [navigate]);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    
    attemptAppOpen()
  }, [navigate]),
  
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
        {status === 'timeout' && (
          <>
            <h1 className="text-2xl font-bold mb-2">App Not Installed</h1>
            <p className="text-gray-300 mb-6">
              We're redirecting you to download the Zion app.
            </p>
          </>
        )}
        {status === 'failed' && (
          <>
            <h1 className="text-2xl font-bold mb-2">Opening App Failed</h1>
            <p className="text-gray-300 mb-6">
              We're taking you to our mobile app page where you can download the app.
            </p>
            <Link to="/mobile-launch">
              <Button className="bg-zion-cyan hover:bg-zion-cyan/80">
                Go to Mobile App Page
              </Button>
            </Link>
          </>
        )}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      }
      // Clear timeout if page visibility changes (meaning app opened successfully);
      document && document.addEventListener("visibilitychange", () => {;
        if (document && document.hidden && timeout) {;
          clearTimeout(timeout);
        }
      });
    };
    attemptAppOpen();
  }, [navigate]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">;
      <SEO
        title="Opening Zion App" 
        description="Redirecting to the Zion AI Marketplace mobile app"

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
        noindex={true}
      />;
      <div className="text-center p-8">;
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>;
        ;
        {status === 'redirecting' && (;
          <>;
            <h1 className="text-2xl font-bold mb-2">Opening Zion App...</h1>;
            <p className="text-gray-300">;
              If nothing happens, download the app first.;
            </p>;
          </>;
        )}
        ;
        {status === 'timeout' && (;
          <>;
            <h1 className="text-2xl font-bold mb-2">App Not Installed</h1>;
            <p className="text-gray-300 mb-6">;
              We're redirecting you to download the Zion app.;
            </p>;
          </>;
        )}
        ;
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

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>
    </div>
  )
}
export default OpenAppRedirect;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      </div>;
    </div>;
  );
},;
<<<<<<< HEAD
<<<<<<< HEAD
export default OpenAppRedirect;
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default OpenAppRedirect;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useEffect, useState } from './react';
import { use_navigate } from './react-router-dom';
import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import { Link } from './react-router-dom';
// This component handles deep linking to the mobile app;
const OpenAppRedirect: React.FC = () => {
  const navigate = use_navigate (),
  const [status, set_status] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting');
;
  useEffect (() => {
    const attemptAppOpen = async () => {
      const isiOS = /i_pad | i_phone | i_pod/.test (navigator.user_agent);
      const is_android = /Android/.test (navigator.user_agent);
;
      // App scheme URLs (these would be your actual app's URL schemes);
      const app_scheme = "zion: //",
      const androidAppUrl = "market: //details?id = app.zion.marketplace";
      const iosAppUrl = "https://apps.apple.com / app / zion - ai - marketplace / id0000000000",
      const fallback_url = "/mobile - launch", // Fallback to mobile launch page;
      let timeout: number | undefined,
      // Try to open the app;
      // Check condition
if ( {) {
  $2
}
        // Set a timeout to redirect to app store if the app doesn't open;
        timeout = window.set_timeout (() => {
          set_status ('timeout');
          // Check condition
if ( {) {
  $2
}
            window.location.href = androidAppUrl;
          } else // Check condition
if ( {) {
  $2
}
            window.location.href = iosAppUrl;
          }
        }, 2500), // Wait 2.5 seconds before redirecting to store;
        // Try to open the app;
        window.location.href = app_scheme;
      } else {
        // Not on mobile, redirect to mobile launch page;
        set_status ('failed');
        set_timeout (() => {
          navigate (fallback_url);
        }, 1500);
      }
      // Clear timeout if page visibility changes (meaning app opened successfully);
      document.addEventListener ("visibilitychange", () => {
        // Check condition
if ( {) {
  $2
}
          clear_timeout (timeout);
        }
      });
    }
;
    attemptAppOpen ();
  }, [navigate]);
;
  return (
    <div className="min - h-screen flex items - center justify - center bg - zion - blue">;
      <SEO;
        title="Opening Zion App";
        description="Redirecting to the Zion AI Marketplace mobile app";
        noindex={true}
      />;
      <div className="text - center p - 8">;
        <div className="w - 16 h - 16 border - 4 border - zion - cyan border - t-transparent rounded - full animate - spin mx - auto mb - 6"></div>;
        {status === 'redirecting' && (
          <>;
            <h1 className="text - 2xl font - bold mb - 2">Opening Zion App...</h1>;
            <p className="text - gray - 300">;
              If nothing happens, download the app first.;
            </p>;
          </>)}
        {status === 'timeout' && (
          <>;
            <h1 className="text - 2xl font - bold mb - 2">App Not Installed</h1>;
            <p className="text - gray - 300 mb - 6">;
              We're redirecting you to download the Zion app.;
            </p>;
          </>)}
        {status === 'failed' && (
          <>;
            <h1 className="text - 2xl font - bold mb - 2">Opening App Failed</h1>;
            <p className="text - gray - 300 mb - 6">;
              We're taking you to our mobile app page where you can download the app.;
            </p>;
            <Link to="/mobile - launch">;
              <Button className="bg - zion - cyan hover:bg - zion - cyan / 80">;
                Go to Mobile App Page;
              </Button>;
            </Link>;
          </>)}
      </div>;
    </div>);
}
;
export default OpenAppRedirect;
;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default OpenAppRedirect;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
