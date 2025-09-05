
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { safeStorage } from "@/utils/safeStorage",
import { X } from 'lucide-react'
import { useIsMobile } from "@/hooks/use-mobile",
=======
import React, { useState, useEffect } from &quot;react&quot;;
import { safeStorage } from &quot;@/utils/safeStorage&quot;;
import { X } from 'lucide-react'
import { useIsMobile } from &quot;@/hooks/use-mobile&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
=======
import React, {_useState, _useEffect} from "react";

export const AppStoreBanner: React.FC = () => {_const [isVisible, _setIsVisible] = useState(false);
  const _isMobile = useIsMobile();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  useEffect__(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed before
    if (isMobile && !safeStorage.getItem(&quot;appBannerDismissed&quot;)) {
      // Delay showing the banner by 2 seconds
<<<<<<< HEAD
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000),
=======
      const _timer = setTimeout__(() => {
        setIsVisible(true);}, 2000);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile]),
  
<<<<<<< HEAD
  const dismissBanner = () => {
<<<<<<< HEAD
    setIsVisible(false),
    safeStorage.setItem("appBannerDismissed", "true")
  },
=======
    setIsVisible(false);
    safeStorage.setItem(&quot;appBannerDismissed&quot;, &quot;true&quot;);
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
  const _dismissBanner = () => {_setIsVisible(false);
    safeStorage.setItem("appBannerDismissed", _"true");};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
  // Only render on mobile devices
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
          <a 
            href=&quot;/open-app&quot; 
            className=&quot;px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium&quot;
          >
            View
          </Link>
          <button
<<<<<<< HEAD
            onClick={dismissBanner}
<<<<<<< HEAD
            className="text-gray-400 focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
=======
            onClick={_dismissBanner}
            className="text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            aria-label="Dismiss banner"
=======
            className=&quot;text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded&quot;
            aria-label=&quot;Dismiss banner&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
          >
            <X className=&quot;h-5 w-5&quot; />
          </button>
        </div>
      </div>
    </div>
  )
},
