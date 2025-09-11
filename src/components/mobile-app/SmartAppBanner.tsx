  appName?: string;
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
import { useIsMobile } from "@/hooks/use-mobile";
interface SmartAppBannerProps {
  appName?: string;
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
}
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({

  appName = "Zion Marketplace"
  appIconSrc
  appStoreUrl = "/download"
  googlePlayUrl = "/download"
  delay = 1500
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()
  useEffect((,) => {
  appName = "Zion Marketplace",
  appIconSrc,
  appStoreUrl = "/download",
  googlePlayUrl = "/download",
  delay = 1500
}) => {

    // Only show banner on mobile devices and if it hasn't been dismissed
    if (isMobile && !safeStorage.getItem("smartBannerDismissed")) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile, delay])
  const dismissBanner = () => {
    setIsVisible(false)
    safeStorage.setItem("smartBannerDismissed", "true")
  }
  const resetBanner = () => {
    safeStorage.removeItem("smartBannerDismissed")
    setIsVisible(true)
  }

      }, delay),
      
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile, delay]),
  
  const dismissBanner = () => {
    setIsVisible(false),
    safeStorage.setItem("smartBannerDismissed", "true")
  },

  const resetBanner = () => {
    safeStorage.removeItem("smartBannerDismissed"),
    setIsVisible(true)
  },

  // Only render on mobile devices
    return process.env.NODE_ENV === 'development' ? (
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-300">
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only)
      </div>
    ) : null
  }

  delay?: number; // Delay in milliseconds before showing the banner;
}

  // Detect iOS or Android
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl,

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl,

  return (
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">
          {appIconSrc ? (
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" loading="lazy" />
          ) : (
            <div className="text-zion-cyan font-bold text-lg">Z</div>
          )}
        </div>
          <h4 className="font-semibold text-white">{appName}</h4>
          <p className="text-xs text-gray-300">Get our app for the best experience</p>
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-white">{appName}</h4>
          <p className="text-xs text-gray-300">Get our app for the best experience</p>
        </div>
        <div className="flex items-center gap-3">
          <Link

            href="/open-app"
            className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium"
          >
            View
            <ArrowRight className="w-3 h-3 ml-1" />
          </Link>

          <button onClick={dismissBanner} className="text-gray-300" aria-label="Dismiss">

            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )

'";
;

},
import React, { useState, useEffect } from "react",;
import { safeStorage } from "@/utils/safeStorage",;
import { X, ArrowRight } from 'lucide-react';
import Link from "next/link",;
import { useIsMobile } from "@/hooks/use-mobile",;
interface SmartAppBannerProps {;
  appName?: string,;
  appIconSrc?: string,;
  appStoreUrl?: string,;
  googlePlayUrl?: string,;
  delay?: number, // Delay in milliseconds before showing the banner;
}
;
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({;
  appName = "Zion Marketplace",;
  appIconSrc,;
  appStoreUrl = "/download",;
  googlePlayUrl = "/download",;
  delay = 1500;
}) => {;
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();  ;
  useEffect((,) => {;
    // Only show banner on mobile devices and if it hasn't been dismissed;
    if (isMobile && !safeStorage && safeStorage.getItem("smartBannerDismissed")) {;
      const timer = setTimeout(() => {;
        setIsVisible(true);
      }, delay);      ;
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isMobile, delay]);

  const dismissBanner = () => {;
    setIsVisible(false);
    safeStorage && safeStorage.setItem("smartBannerDismissed", "true");
  };

  const resetBanner = () => {;
    safeStorage && safeStorage.removeItem("smartBannerDismissed");
    setIsVisible(true);
  };

  // Only render on mobile devices;
  if (!isMobile || !isVisible) {;
    return process && process.env.NODE_ENV === 'development' ? (;
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-300">;
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only);
      </div>;
    ) : null;
  }

  // Detect iOS or Android;
  const isIOS = /iPad|iPhone|iPod/.test(navigator && navigator.userAgent);
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl;

  return (
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">;
          {appIconSrc ? (;
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" loading="lazy" />;
          ) : (;
            <div className="text-zion-cyan font-bold text-lg">Z</div>;
          )}

        </div>;
        <div className="flex-1">;
          <h4 className="font-semibold text-white">{appName}</h4>;
          <p className="text-xs text-gray-300">Get our app for the best experience</p>;
        </div>;
        <div className="flex items-center gap-3">;
          <Link;
            href="/open-app";
            className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium";
          >;
            View;
            <ArrowRight className="w-3 h-3 ml-1" />;
          </Link>;
          <button onClick={dismissBanner} className="text-gray-300" aria-label="Dismiss">;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  );
};

  const banner_link = isIOS ? appStoreUrl : googlePlayUrl;
import React, { useState, useEffect } from './react';
import { safe_storage  } from '@/utils / safe_storage';
import { X, ArrowRight } from 'lucide-react'import Link from './next / link';
import { useIsMobile  } from '@/hooks / use - mobile';
interface SmartAppBannerProps {
  app_name?: string;
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  delay?: number; // Delay in milliseconds before showing the banner;
}
export const SmartAppBanner: React.FC < SmartAppBannerProps> = ({
  app_name = "Zion Marketplace",
  appIconSrc,
  appStoreUrl = "/download",
  googlePlayUrl = "/download",
  delay = 1500;
}) => {
  const [is_visible, setIsVisible] = useState (false);
  const is_mobile = useIsMobile ();
  useEffect ((, ) => {
    // Only show banner on mobile devices and if it hasn't been dismissed;
    if () {) {
  $2
}
      const timer = set_timeout (() => {
        setIsVisible (true);
      }, delay);
      return () => clear_timeout (timer);
    }
    return undefined;
  }, [is_mobile, delay]);
  const dismiss_banner = () =>: any {
    setIsVisible (false);
    safe_storage.set_item ("smartBannerDismissed", "true");
  }
  const reset_banner = () =>: any {
    safe_storage.remove_item ("smartBannerDismissed");
    setIsVisible (true);
  }
  // Only render on mobile devices;
  // Check condition
if ( {) {
  $2
}
    return process.env.NODE_ENV === 'development' ? (
      <div className="bg - zion - blue - dark p - 2 text - xs text - center text - gray - 300">;
        Smart banner hidden. <button on_click={reset_banner} className="text - zion - cyan underline">Show banner</button> (development only);
      </div>) : null;
  }
  // Detect iOS or Android;
  const isIOS = /i_pad | i_phone | i_pod/.test (navigator.user_agent);
  const banner_link = isIOS ? appStoreUrl : googlePlayUrl;
  return (
    <div className="fixed top - 0 left - 0 right - 0 bg - zion - blue - dark border - b border - zion - purple / 30 p - 3 z - 50 animate - fade - in">;
      <div className="flex items - center">;
        <div className="w - 12 h - 12 bg - zion - cyan / 20 rounded - lg mr - 3 flex - shrink - 0 flex items - center justify - center">;
          {appIconSrc ? (
            <img src={appIconSrc} alt={app_name} className="w - 10 h - 10 rounded - md" loading="lazy" />) : (
            <div className="text - zion - cyan font - bold text - lg">Z</div>)}
        </div>;
        <div className="flex - 1">;
          <h4 className="font - semibold text - white">{app_name}</h4>;
          <p className="text - xs text - gray - 300">Get our app for the best experience</p>;
        </div>;
        <div className="flex items - center gap - 3">;
          <Link;
            href="/open - app";
            className="flex items - center px - 4 py - 1.5 bg - zion - cyan text - zion - blue - dark rounded text - sm font - medium";
          >;
            View;
            <ArrowRight className="w - 3 h - 3 ml - 1" />;
          </Link>;
          <button on_click={dismiss_banner} className="text - gray - 300" aria - label="Dismiss">;
            <X className="h - 5 w - 5" />;
          </button>;
        </div>;
      </div>;
    </div>);
}

