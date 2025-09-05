
import React, { useState, useEffect } from &quot;react&quot;;
import { X, ArrowRight } from &quot;lucide-react&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { useIsMobile } from &quot;@/hooks/use-mobile&quot;;

interface SmartAppBannerProps {
  appName?: string;
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  delay?: number; // Delay in milliseconds before showing the banner
}

export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
  appName = &quot;Zion Marketplace&quot;,
  appIconSrc,
  appStoreUrl = &quot;/download&quot;,
  googlePlayUrl = &quot;/download&quot;,
  delay = 1500
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed
    if (isMobile && !localStorage.getItem(&quot;smartBannerDismissed&quot;)) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isMobile, delay]);
  
  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem(&quot;smartBannerDismissed&quot;, &quot;true&quot;);
  };

  const resetBanner = () => {
    localStorage.removeItem(&quot;smartBannerDismissed&quot;);
    setIsVisible(true);
  };
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) {
    return process.env.NODE_ENV === 'development' ? (
      <div className=&quot;bg-zion-blue-dark p-2 text-xs text-center text-gray-400&quot;>
        Smart banner hidden. <button onClick={resetBanner} className=&quot;text-zion-cyan underline&quot;>Show banner</button> (development only)
      </div>
    ) : null;
  }
  
  // Detect iOS or Android
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl;
  
  return (
    <div className=&quot;fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in&quot;>
      <div className=&quot;flex items-center&quot;>
        <div className=&quot;w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center&quot;>
          {appIconSrc ? (
            <img src={appIconSrc} alt={appName} className=&quot;w-10 h-10 rounded-md&quot; />
          ) : (
            <div className=&quot;text-zion-cyan font-bold text-lg&quot;>Z</div>
          )}
        </div>
        
        <div className=&quot;flex-1&quot;>
          <h4 className=&quot;font-semibold text-white&quot;>{appName}</h4>
          <p className=&quot;text-xs text-gray-300&quot;>Get our app for the best experience</p>
        </div>
        
        <div className=&quot;flex items-center gap-3&quot;>
          <Link 
            to=&quot;/open-app&quot; 
            className=&quot;flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium&quot;
          >
            View
            <ArrowRight className=&quot;w-3 h-3 ml-1&quot; />
          </Link>
          
          <button onClick={dismissBanner} className=&quot;text-gray-400&quot; aria-label=&quot;Dismiss&quot;>
            <X className=&quot;h-5 w-5&quot; />
          </button>
        </div>
      </div>
    </div>
  );
};
