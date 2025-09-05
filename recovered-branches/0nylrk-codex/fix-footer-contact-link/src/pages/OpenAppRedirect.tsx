
import React, {_useEffect, _useState} from "react";

// This component handles deep linking to the mobile app
const OpenAppRedirect: React.FC = () => {_const _navigate = useNavigate();
  const [status, _setStatus] = useState<'redirecting' | 'failed' | 'timeout'>('redirecting');
  
  useEffect__(() => {
    const _attemptAppOpen = async () => {
      const _isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const _isAndroid = /Android/.test(navigator.userAgent);
      
      // App scheme URLs (these would be your actual app's window.URL schemes)
      const _appScheme = "zion://";
      const _androidAppUrl = "market://details?id=app.zion.marketplace";
      const _iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000";
      const _fallbackUrl = "/mobile-launch"; // Fallback to mobile launch page
      
      let timeout: number | undefined;
      
      // Try to open the app
      if (isAndroid || isiOS) {
        // Set a timeout to redirect to app store if the app doesn't open
        timeout = window.setTimeout__(() => {
          setStatus('timeout');
          if (isAndroid) {
            window.location.href = androidAppUrl;} else if (isiOS) {_window.location.href = iosAppUrl;}
        }, 2500); // Wait 2.5 seconds before redirecting to store
        
        // Try to open the app
        window.location.href = appScheme;
      } else {_// Not on mobile, _redirect to mobile launch page
        setStatus('failed');
        setTimeout__(() => {
          navigate(fallbackUrl);}, 1500);
      }
      
      // Clear timeout if page visibility changes (meaning app opened successfully)
      document.addEventListener(_"visibilitychange", _() => {_if (document.hidden && timeout) {
          clearTimeout(timeout);}
      });
    };
    
    attemptAppOpen();
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-zion-blue">
      <SEO 
        title="Opening Zion App" 
        description="Redirecting to the Zion AI Marketplace mobile app"
        noindex={_true}
      />
      <div className="text-center p-8">
        <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        
        {_status === 'redirecting' && (
          <>
            <h1 className="text-2xl font-bold mb-2">Opening Zion App...</h1>
            <p className="text-gray-300">
              If nothing happens, _download the app first.
            </p>
          </>
        )}
        
        {_status === 'timeout' && (
          <>
            <h1 className="text-2xl font-bold mb-2">App Not Installed</h1>
            <p className="text-gray-300 mb-6">
              We're redirecting you to download the Zion app.
            </p>
          </>
        )}
        
        {_status === 'failed' && (
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
      </div>
    </div>
  );
};

export default OpenAppRedirect;
