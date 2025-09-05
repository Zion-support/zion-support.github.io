
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { safeStorage } from "@/utils/safeStorage",
import { X, ArrowRight } from 'lucide-react'
import Link from "next/link",
import { useIsMobile } from "@/hooks/use-mobile",
=======
import React, { useState, useEffect } from &quot;react&quot;;
import { safeStorage } from &quot;@/utils/safeStorage&quot;;
import { X, ArrowRight } from 'lucide-react'
import Link from &quot;next/link&quot;;
import { useIsMobile } from &quot;@/hooks/use-mobile&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
interface SmartAppBannerProps {
  appName?: string,
  appIconSrc?: string,
  appStoreUrl?: string,
  googlePlayUrl?: string,
  delay?: number, // Delay in milliseconds before showing the banner
}

export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
  appName = &quot;Zion Marketplace&quot;,
  appIconSrc,
  appStoreUrl = &quot;/download&quot;,
  googlePlayUrl = &quot;/download&quot;,
  delay = 1500
}) => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
=======
import React, {_useState, _useEffect} from "react";
import Link from "next/link";

interface SmartAppBannerProps {_appName?: string;
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  delay?: number; // Delay in milliseconds before showing the banner}

export const SmartAppBanner: React.FC<SmartAppBannerProps> = (_{_appName = "Zion Marketplace", _appIconSrc, _appStoreUrl = "/download", _googlePlayUrl = "/download", _delay = 1500}) => {_const [isVisible, _setIsVisible] = useState(false);
  const _isMobile = useIsMobile();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  useEffect__(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed
<<<<<<< HEAD
    if (isMobile && !safeStorage.getItem(&quot;smartBannerDismissed&quot;)) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay),
=======
    if (isMobile && !safeStorage.getItem("smartBannerDismissed")) {
      const _timer = setTimeout__(() => {
        setIsVisible(true);}, delay);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile, delay]),
  
<<<<<<< HEAD
  const dismissBanner = () => {
<<<<<<< HEAD
    setIsVisible(false),
    safeStorage.setItem("smartBannerDismissed", "true")
  },

  const resetBanner = () => {
    safeStorage.removeItem("smartBannerDismissed"),
    setIsVisible(true)
  },
=======
    setIsVisible(false);
    safeStorage.setItem(&quot;smartBannerDismissed&quot;, &quot;true&quot;);
  };

  const resetBanner = () => {
    safeStorage.removeItem(&quot;smartBannerDismissed&quot;);
    setIsVisible(true);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) {
    return process.env.NODE_ENV === 'development' ? (
      <div className=&quot;bg-zion-blue-dark p-2 text-xs text-center text-gray-300&quot;>
        Smart banner hidden. <button onClick={resetBanner} className=&quot;text-zion-cyan underline&quot;>Show banner</button> (development only)
=======
  const _dismissBanner = () => {_setIsVisible(false);
    safeStorage.setItem("smartBannerDismissed", _"true");};

  const _resetBanner = () => {_safeStorage.removeItem("smartBannerDismissed");
    setIsVisible(true);};
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) {_return process.env.NODE_ENV === 'development' ? (
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-300">
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only)
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    ) : null
  }
  
  // Detect iOS or Android
<<<<<<< HEAD
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent),
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl,
  
  return (
    <div className=&quot;fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in&quot;>
      <div className=&quot;flex items-center&quot;>
        <div className=&quot;w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center&quot;>
          {appIconSrc ? (
            <img src={appIconSrc} alt={appName} className=&quot;w-10 h-10 rounded-md&quot; loading=&quot;lazy&quot; />
=======
  const _isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const _bannerLink = isIOS ? appStoreUrl : googlePlayUrl;
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-zion-blue-dark border-b border-zion-purple/30 p-3 z-50 animate-fade-in">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg mr-3 flex-shrink-0 flex items-center justify-center">
          {_appIconSrc ? (
            <img src={appIconSrc} alt={_appName} className="w-10 h-10 rounded-md" loading="lazy" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          ) : (
            <div className=&quot;text-zion-cyan font-bold text-lg&quot;>Z</div>
          )}
        </div>
        
<<<<<<< HEAD
        <div className=&quot;flex-1&quot;>
          <h4 className=&quot;font-semibold text-white&quot;>{appName}</h4>
          <p className=&quot;text-xs text-gray-300&quot;>Get our app for the best experience</p>
=======
        <div className="flex-1">
          <h4 className="font-semibold text-white">{_appName}</h4>
          <p className="text-xs text-gray-300">Get our app for the best experience</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
        
        <div className=&quot;flex items-center gap-3&quot;>
          <Link 
            href=&quot;/open-app&quot; 
            className=&quot;flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium&quot;
          >
            View
            <ArrowRight className=&quot;w-3 h-3 ml-1&quot; />
          </Link>
          
<<<<<<< HEAD
          <button onClick={dismissBanner} className=&quot;text-gray-300&quot; aria-label=&quot;Dismiss&quot;>
            <X className=&quot;h-5 w-5&quot; />
=======
          <button onClick={_dismissBanner} className="text-gray-300" aria-label="Dismiss">
            <X className="h-5 w-5" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </button>
        </div>
      </div>
    </div>
  )
},
