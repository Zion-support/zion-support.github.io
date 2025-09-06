<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl
import React, { useState, useEffect } from "react"
import { safeStorage } from "@/utils/safeStorage"
import { X, ArrowRight } from 'lucide-react'import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"
interface SmartAppBannerProps {
  appName?: string
  appIconSrc?: string
  appStoreUrl?: string;
  googlePlayUrl?: string;
  delay?: number; // Delay in milliseconds before showing the banner
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

import React, { useState, useEffect } from "react",
import { safeStorage } from "@/utils/safeStorage",
import { X, ArrowRight } from 'lucide-react'
<<<<<<< HEAD
<<<<<<< HEAD

  delay?: number, // Delay in milliseconds before showing the banner

}
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
interface SmartAppBannerProps {
  appName?: string;
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
<<<<<<< HEAD
  delay?: number, // Delay in milliseconds before showing the banner
>>>>>>> }
=======
=======
import Link from "next/link",
import { useIsMobile } from "@/hooks/use-mobile",
interface SmartAppBannerProps {
  appName?: string,
  appIconSrc?: string,
  appStoreUrl?: string,
  googlePlayUrl?: string,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  delay?: number, // Delay in milliseconds before showing the banner
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
<<<<<<< HEAD

  appName = "Zion Marketplace"
  appIconSrc
  appStoreUrl = "/download"
  googlePlayUrl = "/download"
  delay = 1500
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()
  useEffect((,) => {
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()
  useEffect((,) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
  appName = "Zion Marketplace",
  appIconSrc,
  appStoreUrl = "/download",
  googlePlayUrl = "/download",
  delay = 1500
}) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()
  useEffect((,) => {
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    // Only show banner on mobile devices and if it hasn't been dismissed
    if (isMobile && !safeStorage.getItem("smartBannerDismissed")) {
      const timer = setTimeout(() => {
        setIsVisible(true)
<<<<<<< HEAD

=======
>>>>>>>     // Only show banner on mobile devices and if it hasn't been dismissed
    if (isMobile && !safeStorage.getItem("smartBannerDismissed")) {
      const timer = setTimeout(() => {
        setIsVisible(true)
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
>>>>>>>   // Only render on mobile devices
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
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
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Only render on mobile devices
>>>>>>>   if (!isMobile |!isVisible) {
    return process.env.NODE_ENV === 'development' ? (
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-300">
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only)
      </div>
    ) : null
  }
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  // Detect iOS or Android
<<<<<<< HEAD
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl
=======
  
  // Detect iOS or Android
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl,
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl
=======
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl,
  
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">
          {appIconSrc ? (
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" loading="lazy" />
          ) : (
            <div className="text-zion-cyan font-bold text-lg">Z</div>
          )}
        </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>         <div className="flex-1">
          <h4 className="font-semibold text-white">{appName}</h4>
          <p className="text-xs text-gray-300">Get our app for the best experience</p>
        </div>
>>>>>>>         <div className="flex items-center gap-3">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <div className="flex-1">
          <h4 className="font-semibold text-white">{appName}</h4>
          <p className="text-xs text-gray-300">Get our app for the best experience</p>
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
        <div className="flex items-center gap-3">
          <Link
=======
        

>>>>>>>         <div className="flex items-center gap-3">
>>>>>>>           <Link
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="flex items-center gap-3">
          <Link
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            href="/open-app"
            className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium"
          >
            View
            <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>>           <button onClick={dismissBanner} className="text-gray-300" aria-label="Dismiss">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          <button onClick={dismissBanner} className="text-gray-300" aria-label="Dismiss">
>>>>>>>             <X className="h-5 w-5" />
=======
=======
          
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          <button onClick={dismissBanner} className="text-gray-300" aria-label="Dismiss">
            <X className="h-5 w-5" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </button>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
'"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

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
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">;
          {appIconSrc ? (;
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" loading="lazy" />;
          ) : (;
            <div className="text-zion-cyan font-bold text-lg">Z</div>;
          )}

=======
}
<<<<<<< HEAD
'"

=======
'";
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  useEffect(() => {;
    // Only show banner on mobile devices and if it hasn't been dismissed;
    if (isMobile && !safeStorage.getItem("smartBannerDismissed")) {;
      const timer = setTimeout(() => {;
        setIsVisible(true);
      }, delay),;
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isMobile, delay]),;
  const dismissBanner = () => {;
    setIsVisible(false),;
    safeStorage.setItem("smartBannerDismissed", "true");
  },;
  const resetBanner = () => {;
    safeStorage.removeItem("smartBannerDismissed"),;
    setIsVisible(true);
  },;
  // Only render on mobile devices;
  if (!isMobile || !isVisible) {;
    return process.env.NODE_ENV === 'development' ? (;
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-300">;
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
            <img src={appIconSrc} alt={appName} className="w-10 h-10 rounded-md" loading="lazy" />;
          ) : (;
            <div className="text-zion-cyan font-bold text-lg">Z</div>;
          )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
