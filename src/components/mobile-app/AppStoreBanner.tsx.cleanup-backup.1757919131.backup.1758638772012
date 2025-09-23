
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { safeStorage } from "@/utils/safeStorage",
import { X } from 'lucide-react'
import { useIsMobile } from "@/hooks/use-mobile",

export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
=======
import React, { useState, useEffect } from "react";
import { safeStorage } from "@/utils/safeStorage";
import { X } from 'lucide-react'
import { useIsMobile } from "@/hooks/use-mobile";

export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
>>>>>>> origin/auto/autonomy-17186719616
  
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed before
    if (isMobile && !safeStorage.getItem("appBannerDismissed")) {
      // Delay showing the banner by 2 seconds
      const timer = setTimeout(() => {
<<<<<<< HEAD
        setIsVisible(true),
      }, 2000),
      
      return () => clearTimeout(timer),
    }
    return undefined,
  }, [isMobile]),
  
  const dismissBanner = () => {
    setIsVisible(false),
    safeStorage.setItem("appBannerDismissed", "true"),
  },
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) return null,
=======
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isMobile]);
  
  const dismissBanner = () => {
    setIsVisible(false);
    safeStorage.setItem("appBannerDismissed", "true");
  };
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) return null;
>>>>>>> origin/auto/autonomy-17186719616
  
  return (
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>
        <div className="flex-1">
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>
          <p className="text-xs text-gray-300">Get the full experience on our app</p>
        </div>
        <div className="flex items-center gap-3">
<<<<<<< HEAD
          <a
            href="/open-app"
=======
          <a 
            href="/open-app" 
>>>>>>> origin/auto/autonomy-17186719616
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium"
          >
            View
          </a>
          <button
            onClick={dismissBanner}
<<<<<<< HEAD
            className="text-gray-400 focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
=======
            className="text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
>>>>>>> origin/auto/autonomy-17186719616
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  )
},
=======
  );
};
>>>>>>> origin/auto/autonomy-17186719616
