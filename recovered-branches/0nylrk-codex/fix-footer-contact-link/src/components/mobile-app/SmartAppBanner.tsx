
import React, { useState, useEffect } from "react";
import {X, ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";
import {useIsMobile} from "@/hooks/use-mobile";
<<<<<<< HEAD
interface SmartAppBannerProps {;

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  appName?: string;
=======
import React, { useState, useEffect } from './react';
import { X, ArrowRight } from './lucide-react';
import { Link } from './react-router-dom';
import { useIsMobile } from '@/hooks / use - mobile';


interface SmartAppBannerProps {
  app_name?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  delay?: number, // Delay in milliseconds before showing the banner;
}
<<<<<<< HEAD
=======
import React, { useState, useEffect } from "react",
import { X, ArrowRight } from "lucide-react",
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom",
import { useIsMobile } from "@/hooks/use-mobile",
interface SmartAppBannerProps {
  appName?: string,
  appIconSrc?: string,
  appStoreUrl?: string,
  googlePlayUrl?: string,
  delay?: number, // Delay in milliseconds before showing the banner
}

export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({;
  appName = "Zion Marketplace";
  appIconSrc;
  appStoreUrl = "/download";
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({

  appName = "Zion Marketplace";
  appIconSrc;
  appStoreUrl = "/download";
  googlePlayUrl = "/download"
  delay = 1500
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  appName = "Zion Marketplace",
  appIconSrc,
  appStoreUrl = "/download",
  googlePlayUrl = "/download",
  delay = 1500
}) => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df




<<<<<<< HEAD

=======
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {
      const timer = setTimeout(() => {
        setIsVisible(true)

<<<<<<< HEAD

=======
      }, delay);
      return () => clearTimeout(timer)
    }
  }, [isMobile, delay]);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      }, delay),
      
      return () => clearTimeout(timer)
    }
  }, [isMobile, delay]),
  
<<<<<<< HEAD


  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem("smartBannerDismissed", "true")
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  },



  const resetBanner = () => {
    localStorage.removeItem("smartBannerDismissed");
    setIsVisible(true)


  },
  


<<<<<<< HEAD
=======
  const dismissBanner = () => {
    setIsVisible(false),
    localStorage.setItem("smartBannerDismissed", "true")
  }
  },

  const resetBanner = () => {
    localStorage.removeItem("smartBannerDismissed"),
    setIsVisible(true)
  }
  },
  
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  // Only render on mobile devices
  if (!isMobile |!isVisible) {
    return process.env.NODE_ENV === 'development' ? (
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-400">
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only)
      </div>
    ) : null
  }
  // Detect iOS or Android
<<<<<<< HEAD

=======
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl,
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">
          {appIconSrc ? (
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" />
          ) : (
            <div className="text-zion-cyan font-bold text-lg">Z</div>
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-white">{appName}</h4>
          <p className="text-xs text-gray-300">Get our app for the best experience</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/open-app"
            className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium"
          >
            View
            <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
          <button onClick={dismissBanner} className="text-gray-400" aria-label="Dismiss">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({;
  appName = "Zion Marketplace";
  appIconSrc;
  appStoreUrl = "/download";
  googlePlayUrl = "/download",;
  delay = 1500;
}) => {;
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {;
    // Only show banner on mobile devices and if it hasn't been dismissed;
    if (isMobile && !localStorage && localStorage.getItem("smartBannerDismissed")) {;
      const timer = setTimeout(() => {;
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isMobile, delay]);

  const dismissBanner = () => {;
    setIsVisible(false);
    localStorage && localStorage.setItem("smartBannerDismissed", "true");
  };

  const resetBanner = () => {;
    localStorage && localStorage.removeItem("smartBannerDismissed");
    setIsVisible(true);
  };

  // Only render on mobile devices;
  if (!isMobile || !isVisible) {;
    return process && process.env.NODE_ENV === 'development' ? (;
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-400">;
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only);
      </div>;
    ) : null;
  }

  // Detect iOS or Android;
  const isIOS = /iPad|iPhone|iPod/.test(navigator && navigator.userAgent);
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl;
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl,
  

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
=======
  return (

import React, { useState, useEffect } from "react",;
import { X, ArrowRight } from "lucide-react",;
import { Link } from "react-router-dom",;
import { useIsMobile } from "@/hooks/use-mobile",;
;
interface SmartAppBannerProps {;
  appName?:string,;
  appIconSrc?:string,;
  appStoreUrl?:string,;
  googlePlayUrl?:string,;
  delay?:number, // Delay in milliseconds before showing the banner;
}
;
export const SmartAppBanner:React.FC<SmartAppBannerProps> = ({;
  appName = "Zion Marketplace",;
  appIconSrc,;
  appStoreUrl = "/download",;
  googlePlayUrl = "/download",;
  delay = 1500;
}) => {;
  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  ;
  useEffect(() => {;
    // Only show banner on mobile devices and if it hasn't been dismissed;
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {;
      const timer = setTimeout(() => {;
        setIsVisible(true),;
      }, delay),;
      ;
      return () => clearTimeout(timer),;
    }
  }, [isMobile, delay]),;
  ;
  const dismissBanner = () => {;
    setIsVisible(false),;
    localStorage.setItem("smartBannerDismissed", "true"),;
  },;
;
  const resetBanner = () => {;
    localStorage.removeItem("smartBannerDismissed"),;
    setIsVisible(true),;
  },;
  ;
  // Only render on mobile devices;
  if (!isMobile || !isVisible) {;
    return process.env.NODE_ENV === 'development' ? (;
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-400">;
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only);
      </div>;
    ) :null,;
  }
  ;
  // Detect iOS or Android;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),;
  const bannerLink = isIOS ? appStoreUrl :googlePlayUrl,;
  ;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">;
          {appIconSrc ? (;
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" />;
<<<<<<< HEAD
          ) : (;
            <div className="text-zion-cyan font-bold text-lg">Z</div>;
          )}

=======

};

=======
=======

};

}

};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({;
  appName = "Zion Marketplace",;
  appIconSrc,;
  appStoreUrl = "/download",;
  googlePlayUrl = "/download",;
  delay = 1500;
}) => {;
  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  useEffect(() => {;
    // Only show banner on mobile devices and if it hasn't been dismissed;
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {;
      const timer = setTimeout(() => {;
        setIsVisible(true);
      }, delay),;
      return () => clearTimeout(timer);
    }
  }, [isMobile, delay]),;
  const dismissBanner = () => {;
    setIsVisible(false),;
    localStorage.setItem("smartBannerDismissed", "true");
  },;
  const resetBanner = () => {;
    localStorage.removeItem("smartBannerDismissed"),;
    setIsVisible(true);
  },;
  // Only render on mobile devices;
  if (!isMobile || !isVisible) {;
    return process.env.NODE_ENV === 'development' ? (;
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-400">;
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only);
      </div>;
    ) : null;
  }
;
  // Detect iOS or Android;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),;
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl;
  return (;
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">;
          {appIconSrc ? (;
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" />;
          ) : (;
            <div className="text-zion-cyan font-bold text-lg">Z</div>;
          )}
<<<<<<< HEAD

        </div>;

=======
        </div>;
          ) :(;
            <div className="text-zion-cyan font-bold text-lg">Z</div>;
          )}
        </div>;
        ;
        </div>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        <div className="flex-1">;
          <h4 className="font-semibold text-white">{appName}</h4>;
          <p className="text-xs text-gray-300">Get our app for the best experience</p>;
        </div>;
<<<<<<< HEAD

        <div className="flex items-center gap-3">;
          <Link
            to="/open-app" 
            className="flex items-center px-4 py-1 && 1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium">;
            View;
            <ArrowRight className="w-3 h-3 ml-1" />;
          </Link>;

=======
        ;
        <div className="flex items-center gap-3">;
          <Link ;
            to="/open-app" ;
        <div className="flex items-center gap-3">;
          <Link;
            to="/open-app";
            className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium";
          >;
            View;
            <ArrowRight className="w-3 h-3 ml-1" />;
          </Link>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <button onClick={dismissBanner} className="text-gray-400" aria-label="Dismiss">;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
  );
};

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export const SmartAppBanner: React.FC < SmartAppBannerProps> = ({
  app_name = "Zion Marketplace";
  appIconSrc;
  appStoreUrl = "/download";
  googlePlayUrl = "/download",
  delay = 1500;
}) => {
  const [is_visible, setIsVisible] = useState (false);
  const is_mobile = useIsMobile ();
;
  useEffect (() => {
    // Only show banner on mobile devices and if it hasn't been dismissed;
    if () {) {
  $2
}
      const timer = set_timeout (() => {
        setIsVisible (true);
      }, delay);
;
      return () => clear_timeout (timer);
    }
  }, [is_mobile, delay]);
;
  const dismiss_banner = () =>: any {
    setIsVisible (false);
    local_storage.set_item ("smartBannerDismissed", "true");
  }
;
  const reset_banner = () =>: any {
    local_storage.remove_item ("smartBannerDismissed");
    setIsVisible (true);
  }
;
  // Only render on mobile devices;
  // Check condition
if ( {) {
  $2
}
    return process.env.NODE_ENV === 'development' ? (
      <div className="bg - zion - blue - dark p - 2 text - xs text - center text - gray - 400">;
        Smart banner hidden. <button on_click={reset_banner} className="text - zion - cyan underline">Show banner</button> (development only);
      </div>) : null;
  }
  // Detect iOS or Android;
  const isIOS = /i_pad | i_phone | i_pod/.test (navigator.user_agent);
  const banner_link = isIOS ? appStoreUrl : googlePlayUrl;
;
  return (
    <div className="fixed top - 0 left - 0 right - 0 bg - zion - blue - dark border - b border - zion - purple / 30 p - 3 z - 50 animate - fade - in">;
      <div className="flex items - center">;
        <div className="w - 12 h - 12 bg - zion - cyan / 20 rounded - lg mr - 3 flex - shrink - 0 flex items - center justify - center">;
          {appIconSrc ? (
            <img src={appIconSrc} alt={app_name} className="w - 10 h - 10 rounded - md" />) : (
            <div className="text - zion - cyan font - bold text - lg">Z</div>)}
        </div>;
        <div className="flex - 1">;
          <h4 className="font - semibold text - white">{app_name}</h4>;
          <p className="text - xs text - gray - 300">Get our app for the best experience</p>;
        </div>;
        <div className="flex items - center gap - 3">;
          <Link;
            to="/open - app";
            className="flex items - center px - 4 py - 1.5 bg - zion - cyan text - zion - blue - dark rounded text - sm font - medium";
          >;
            View;
            <ArrowRight className="w - 3 h - 3 ml - 1" />;
          </Link>;
          <button on_click={dismiss_banner} className="text - gray - 400" aria - label="Dismiss">;
            <X className="h - 5 w - 5" />;
          </button>;
        </div>;
      </div>;
    </div>);
}
;

<<<<<<< HEAD
=======

export default SmartAppBanner;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
export default SmartAppBanner;


  ),;
},; interface SmartAppBannerProps {
  appName?: string;
appIconSrc?: string;
appStoreUrl?: string;
googlePlayUrl?: string;
delay?: number, //Delay in milliseconds before showing the banner 
}export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
  appName = "Zion Marketplace";
appIconSrc;
appStoreUrl = "/download";
googlePlayUrl = "/download";
delay = 1500 
}) => {
  const [isVisible, setIsVisible] = useState (false);
const isMobile = useIsMobile ();
//Only show banner on mobile devices and if it hasn't been dismissed return () => clearTimeout (timer) 
}
}, [isMobile, delay]);
//Only render on mobile devices if (!isMobile || !isVisible) {
  return process.env.NODE ENV === 'development' ? (<div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-400" > Smart banner hidden. <button onClick= {
  resetBanner 
}className="text-zion-cyan underline" >Show banner</button> (development only) 
}//Detect iOS or Android) : (<div className="text-zion-cyan font-bold text-lg" >Z</div>) 
}</div> </div> <div className="flex items-center gap-3" > <Link to="/open-app" className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium" > View <ArrowRight className="w-3 h-3 ml-1" /> </Link> </button> </div> </div> </div>) 
};
  );
};

export default SmartAppBanner;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
