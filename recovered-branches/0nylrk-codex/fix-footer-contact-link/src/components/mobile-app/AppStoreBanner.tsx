
<<<<<<< HEAD
import React, { useState, useEffect } from "react",;
import { X } from "lucide-react",;
import { useIsMobile } from "@/hooks/use-mobile",;
;
export const AppStoreBanner:React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  ;
  useEffect(() => {;
    // Only show banner on mobile devices and if it hasn't been dismissed before;
    if (isMobile && !localStorage.getItem("appBannerDismissed")) {;
      // Delay showing the banner by 2 seconds;
      const timer = setTimeout(() => {;
        setIsVisible(true),;
      }, 2000),;
      ;
      return () => clearTimeout(timer),;
    }
  }, [isMobile]),;
  ;
  const dismissBanner = () => {;
    setIsVisible(false),;
    localStorage.setItem("appBannerDismissed", "true"),;
  },;
  ;
  // Only render on mobile devices;
  if (!isMobile || !isVisible) return null,;
  ;
  return (;
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>;
        <div className="flex-1">;
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>;
          <p className="text-xs text-gray-300">Get the full experience on our app</p>;
        </div>;
        <div className="flex items-center gap-3">;
          <a ;
            href="/open-app" ;
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium";
          >;
            View;
          </a>;
          <button onClick={dismissBanner} className="text-gray-400">;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  ),;
},;
=======
import React, { useState, useEffect } from "react",
import { X } from "lucide-react",
import { useIsMobile } from "@/hooks/use-mobile",export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
import React, {useState, useEffect} from "react";

export const AppStoreBanner: React.FC = () => {const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect_(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed before,
if (isMobile && !localStorage.getItem(&quot;appBannerDismissed&quot;)) {
      // Delay showing the banner by 2 seconds,
const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000),      
      return () => clearTimeout(timer)
    }
  }, [isMobile]),
  
  const dismissBanner = () => {
    setIsVisible(false),
    localStorage.setItem("appBannerDismissed", "true")
  },  const dismissBanner = () => {setIsVisible(false);
    localStorage.setItem("appBannerDismissed", _"true")};
  
  // Only render on mobile devices,
if (!isMobile || !isVisible) return null,
  
  return (
    <div className=&quot;fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40&quot;>
      <div className=&quot;flex items-center&quot;>
        <div className=&quot;w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0&quot;></div>
        <div className=&quot;flex-1&quot;>
          <h4 className=&quot;font-semibold text-white&quot;>Zion AI Marketplace</h4>
          <p className=&quot;text-xs text-gray-300&quot;>Get the full experience on our app</p>
        </div>
        <div className=&quot;flex items-center gap-3&quot;>
          <a,
href=&quot;/open-app&quot; 
            className=&quot;px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium&quot;
          >
            View
          </Link>
          <button onClick={dismissBanner} className=&quot;text-gray-400&quot;>
            <X className=&quot;h-5 w-5&quot; />          </button>
        </div>
      </div>
    </div>
  )
},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
