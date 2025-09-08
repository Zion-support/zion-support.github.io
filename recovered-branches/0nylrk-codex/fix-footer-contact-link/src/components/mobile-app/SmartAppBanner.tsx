


  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;}
  delay?: number, // Delay in milliseconds before showing the banner;}
}








      }, delay),
      
      return () => clearTimeout(timer)
    }
  }, [isMobile, delay]),
  



  // Only render on mobile devices
  if (!isMobile |!isVisible) {
    return process.env.NODE_ENV === 'development' ? (
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-400">



        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only)
      </div>

    ) : null
  }
  // Detect iOS or Android

},

import React, { useState, useEffect } from "react",;
import { X, ArrowRight } from "lucide-react",;
import { Link } from "react-router-dom",;

import { useIsMobile } from "@/hooks/use-mobile",;

interface SmartAppBannerProps {;
  appName?: string,;
  appIconSrc?: string,;
  appStoreUrl?: string,;
  googlePlayUrl?: string,;
  delay?: number, // Delay in milliseconds before showing the banner;
}
;
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({;"
  appName = "Zion Marketplace",;
  appIconSrc,;"
  appStoreUrl = "/download",;"
  googlePlayUrl = "/download",;
  delay = 1500;
}) => {;

  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  useEffect(() => {;'
    // Only show banner on mobile devices and if it hasn't been dismissed;"
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {;

      const timer = setTimeout(() => {;
        setIsVisible(true);
      }, delay),;
      return () => clearTimeout(timer);
    }
  }, [isMobile, delay]),;
  const dismissBanner = () => {;
    setIsVisible(false),;"
    localStorage.setItem("smartBannerDismissed", "true");
  },;
  const resetBanner = () => {;"
    localStorage.removeItem("smartBannerDismissed"),;
    setIsVisible(true);
  },;
  // Only render on mobile devices;
  if (!isMobile || !isVisible) {;'
    return process.env.NODE_ENV === 'development' ? (;"
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-400">;"
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only);
      </div>;
    ) : null;
  }
;
  // Detect iOS or Android;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),;
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl;
  return (;"
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">;"
      <div className="flex items-center">;"
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">;
          {appIconSrc ? (;"
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" />;
          ) : (;"
            <div className="text-zion-cyan font-bold text-lg">Z</div>;
          )}


        </div>;

          <p className="text-xs text-gray-300">Get our app for the best experience</p>;
        </div>;



  app_name = "Zion Marketplace";
  appIconSrc;"
  appStoreUrl = "/download";"
  googlePlayUrl = "/download",
  delay = 1500;
}) => {}
  const [is_visible, setIsVisible] = useState (false);
  const is_mobile = useIsMobile ();
;
  useEffect (() => {'
    // Only show banner on mobile devices and if it hasn't been dismissed;
    if () {) {}
  $2;
}
      const timer = set_timeout (() => {}
        setIsVisible (true);
      }, delay);
;
      return () => clear_timeout (timer);
    }
  }, [is_mobile, delay]);
;
  const dismiss_banner = () =>: any {}
    setIsVisible (false);"
    local_storage.set_item ("smartBannerDismissed", "true");
  }
;
  const reset_banner = () =>: any {"
    local_storage.remove_item ("smartBannerDismissed");
    setIsVisible (true);
  }
;
  // Only render on mobile devices;

      </div>) : null;
  }
  // Detect iOS or Android;
  const isIOS = /i_pad | i_phone | i_pod/.test (navigator.user_agent);
  const banner_link = isIOS ? appStoreUrl : googlePlayUrl;
;

          </button>;
        </div>;

      </div>;
    </div>);
}
;

export default SmartAppBanner;






