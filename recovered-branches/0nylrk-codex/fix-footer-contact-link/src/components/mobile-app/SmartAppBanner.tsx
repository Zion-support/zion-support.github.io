<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { X, ArrowRight } from "lucide-react",
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
interface SmartAppBannerProps {
  appName?: string,
  appIconSrc?: string,
  appStoreUrl?: string,
  googlePlayUrl?: string,
  delay?: number, // Delay in milliseconds before showing the banner
}
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
  appName = $2;
  appIconSrc,
  appStoreUrl = $2;
  googlePlayUrl = $2;
  delay = 1500
}) => {
  const [isVisible, setIsVisible] = useState($2);
  const isMobile = useIsMobile($2);
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {
      const timer = setTimeout(() => {
        setIsVisible(true)
=======
<<<<<<< HEAD
import { useIsMobile } from "@/hooks/use-mobile",
;

  appName?: string;
import React, { useState, useEffect } from './react';'
import { X, ArrowRight } from './lucide-react';'
import { Link } from './react-router-dom';'
import { useIsMobile } from '@/hooks / use - mobile';
=======

import React, { useState, useEffect } from "react";
import {X, ArrowRight} from "lucide-react";
import {Link} from "react-router-dom";
import {useIsMobile} from "@/hooks/use-mobile";
<<<<<<< HEAD
  appName?: string;
=======
interface SmartAppBannerProps {;

  appName?: string;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React, { useState, useEffect } from './react';
import { X, ArrowRight } from './lucide-react';
import { Link } from './react-router-dom';
import { useIsMobile } from '@/hooks / use - mobile';
<<<<<<< HEAD


interface SmartAppBannerProps {
  app_name?: string;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  app_name?: string;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;}
  delay?: number, // Delay in milliseconds before showing the banner;}
}
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

<<<<<<< HEAD
  appName = "Zion Marketplace";
  appIconSrc;"
  appStoreUrl = "/download";"
  googlePlayUrl = "/download"
  delay = 1500;
}) => {}
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();"
  appName = "Zion Marketplace",
  appIconSrc,"
  appStoreUrl = "/download","
  googlePlayUrl = "/download",
  delay = 1500;
}) => {}
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
  useEffect(() => {'
    // Only show banner on mobile devices and if it hasn't been dismissed"
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {}
      const timer = setTimeout(() => {}
        setIsVisible(true)

=======



<<<<<<< HEAD
  
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {
      const timer = setTimeout(() => {
        setIsVisible(true)

<<<<<<< HEAD
      }, delay);
      return () => clearTimeout(timer)
    }
  }, [isMobile, delay]);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
      }, delay),
      
      return () => clearTimeout(timer)
    }
  }, [isMobile, delay]),
  
<<<<<<< HEAD
  const dismissBanner = () => {
    setIsVisible($2);
    localStorage.setItem("smartBannerDismissed", "true")
  },

  const resetBanner = () => {
    localStorage.removeItem($2);
    setIsVisible(true)
  },
  
=======
<<<<<<< HEAD
=======


  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem("smartBannerDismissed", "true")
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  },



  const resetBanner = () => {
    localStorage.removeItem("smartBannerDismissed");
    setIsVisible(true)


  },
  


<<<<<<< HEAD
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
  
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
  // Only render on mobile devices
  if (!isMobile |!isVisible) {
    return process.env.NODE_ENV === 'development' ? (
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-400">
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only)
      </div>
<<<<<<< HEAD
    ) : null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">
      <div className="flex items-center">

        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">
          {appIconSrc ? ("
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" />
          ) : ("
            <div className="text-zion-cyan font-bold text-lg">Z</div>
          )}

=======
    ) : null
  }
  // Detect iOS or Android
<<<<<<< HEAD
  const isIOS = /iPad|iPhone|iPod/.test($2);
  const bannerLink = $2;
  return (
    <div className = $2;
=======
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl,
  

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
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">;
          {appIconSrc ? (;
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" />;

};

<<<<<<< HEAD
}

};
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
},
<<<<<<< HEAD
import { X, ArrowRight } from "lucide-react";"
import { Link } from "react-router-dom",;"
import { useIsMobile } from "@/hooks/use-mobile",;"
=======
import React, { useState, useEffect } from "react",;
import { X, ArrowRight } from "lucide-react",;
import { Link } from "react-router-dom",;

import { useIsMobile } from "@/hooks/use-mobile",;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
  }
  useEffect(() => {;
    // Only show banner on mobile devices and if it hasn't been dismissed;'
    }
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {;"
      }
=======
  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  useEffect(() => {;'
    // Only show banner on mobile devices and if it hasn't been dismissed;"
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {;
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
        </div>;
          ) :(;
            <div className="text-zion-cyan font-bold text-lg">Z</div>;
          )}
        </div>;
        ;
        </div>;
=======

        </div>;
<<<<<<< HEAD
"
        <div className="flex-1">;"
          <h4 className="font-semibold text-white">{appName}</h4>;"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="flex-1">;
          <h4 className="font-semibold text-white">{appName}</h4>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <p className="text-xs text-gray-300">Get our app for the best experience</p>;
        </div>;
<<<<<<< HEAD
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
=======

<<<<<<< HEAD
export const SmartAppBanner: React.FC < SmartAppBannerProps> = ({";
=======
        <div className="flex items-center gap-3">;
          <Link
            to="/open-app" 
            className="flex items-center px-4 py-1 && 1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium">;
            View;
            <ArrowRight className="w-3 h-3 ml-1" />;
          </Link>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <button onClick={dismissBanner} className="text-gray-400" aria-label="Dismiss">;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
=======
  );
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const SmartAppBanner: React.FC < SmartAppBannerProps> = ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
      </div>;
=======
      </div>;
    </div>);
}
;

export default SmartAppBanner;


<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
