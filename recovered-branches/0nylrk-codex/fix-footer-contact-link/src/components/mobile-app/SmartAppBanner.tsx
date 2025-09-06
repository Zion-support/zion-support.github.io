<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx

<<<<<<< HEAD

import React, { useState, useEffect } from "react",
import { X, ArrowRight } from "lucide-react",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState, useEffect } from "react";
import {X, ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";
import {useIsMobile} from "@/hooks/use-mobile";
<<<<<<< HEAD
<<<<<<< HEAD
interface SmartAppBannerProps {;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx
  appName?: string;
import React, { useState, useEffect } from './react';
import { X, ArrowRight } from './lucide-react';
import { Link } from './react-router-dom';
import { useIsMobile } from '@/hooks / use - mobile';
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
interface SmartAppBannerProps {
  app_name?: string;
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  delay?: number, // Delay in milliseconds before showing the banner;
}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx

<<<<<<< HEAD
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({

=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  googlePlayUrl = "/download",
  delay = 1500
}) => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {
      const timer = setTimeout(() => {
        setIsVisible(true)
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }, delay);
      return () => clearTimeout(timer)
    }
  }, [isMobile, delay]);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }, delay),
      
      return () => clearTimeout(timer)
    }
  }, [isMobile, delay]),
  
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem("smartBannerDismissed", "true")
<<<<<<< HEAD

=======


  },



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const resetBanner = () => {
    localStorage.removeItem("smartBannerDismissed");
    setIsVisible(true)

<<<<<<< HEAD
=======

  },
  


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl,
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx


=======

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl,
  

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx
  return (
=======

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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">;
          {appIconSrc ? (;
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" />;
<<<<<<< HEAD
          ) : (;
            <div className="text-zion-cyan font-bold text-lg">Z</div>;
          )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx

=======

};

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}

};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx
        </div>;
=======
          ) :(;
            <div className="text-zion-cyan font-bold text-lg">Z</div>;
          )}
        </div>;
        ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
        </div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="flex-1">;
          <h4 className="font-semibold text-white">{appName}</h4>;
          <p className="text-xs text-gray-300">Get our app for the best experience</p>;
        </div>;
<<<<<<< HEAD
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
=======
        <div className="flex items-center gap-3">;
          <Link;
            to="/open-app";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium";
          >;
            View;
            <ArrowRight className="w-3 h-3 ml-1" />;
          </Link>;
<<<<<<< HEAD
          ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <button onClick={dismissBanner} className="text-gray-400" aria-label="Dismiss">;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx

<<<<<<< HEAD
export default SmartAppBanner;

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx

=======

export default SmartAppBanner;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/mobile-app/SmartAppBanner.tsx
=======
  );
};

export default SmartAppBanner;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
