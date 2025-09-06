<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

=======
}
import React, { useState, useEffect } from "react"
import { safeStorage } from "@/utils/safeStorage"
import { X } from 'lucide-react'import { useIsMobile } from "@/hooks/use-mobile"
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()
  useEffect((,) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState, useEffect } from "react",
import { safeStorage } from "@/utils/safeStorage",
import { X } from 'lucide-react'
import { useIsMobile } from "@/hooks/use-mobile",
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
  useEffect(() => {
<<<<<<< HEAD

    // Only show banner on mobile devices and if it hasn't been dismissed before
=======
>>>>>>>     // Only show banner on mobile devices and if it hasn't been dismissed before
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
import React, { useState, useEffect } from "react"
import { safeStorage } from "@/utils/safeStorage"
import { X } from 'lucide-react'import { useIsMobile } from "@/hooks/use-mobile"
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()
  useEffect((,) => {

import React, { useState, useEffect } from "react",
import { safeStorage } from "@/utils/safeStorage",
import { X } from 'lucide-react'
import { useIsMobile } from "@/hooks/use-mobile",
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed before
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    if (isMobile && !safeStorage.getItem("appBannerDismissed")) {
      // Delay showing the banner by 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  if (!isMobile |!isVisible) return null
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }, 2000)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile])
  const dismissBanner = () => {
    setIsVisible(false)
    safeStorage.setItem("appBannerDismissed", "true")
  }
  // Only render on mobile devices
  if (!isMobile |!isVisible) return null
  if (!isMobile || !isVisible) return null
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      }, 2000),
      
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile]),
  
  const dismissBanner = () => {
    setIsVisible(false),
    safeStorage.setItem("appBannerDismissed", "true")
  },
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) return null,
<<<<<<< HEAD
<<<<<<< HEAD

=======
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
=======
  
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>
        <div className="flex-1">
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>
          <p className="text-xs text-gray-300">Get the full experience on our app</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/open-app"
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium"
          >
            View
          </Link>
          <button
            onClick={dismissBanner}
            className="text-gray-400 focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
            aria-label="Dismiss banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  );
};
'"};
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
'"}
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
},
import React, { useState, useEffect } from "react",;
import { safeStorage } from "@/utils/safeStorage",;
import { X } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile",;
export const AppStoreBanner: React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  useEffect(() => {;
    // Only show banner on mobile devices and if it hasn't been dismissed before;
    if (isMobile && !safeStorage.getItem("appBannerDismissed")) {;
      // Delay showing the banner by 2 seconds;
      const timer = setTimeout(() => {;
        setIsVisible(true);
      }, 2000),;
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isMobile]),;
  const dismissBanner = () => {;
    setIsVisible(false),;
    safeStorage.setItem("appBannerDismissed", "true");
  },;
  // Only render on mobile devices;
  if (!isMobile || !isVisible) return null;
  return (;
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>;
        <div className="flex-1">;
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>;
          <p className="text-xs text-gray-300">Get the full experience on our app</p>;
        </div>;
        <div className="flex items-center gap-3">;
          <a;
            href="/open-app";
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium";
          >;
            View;
          </a>;
          <button;
            onClick={dismissBanner}
            className="text-gray-400 focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded";
            aria-label="Dismiss banner";
          >;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 
  )

>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  // Only render on mobile devices;
  // Check condition
if (return null) {
  $2
}
  return (
    <div className="fixed bottom - 16 left - 0 right - 0 bg - zion - blue - dark border - t border - zion - purple / 30 p - 3 z - 40">;
      <div className="flex items - center">;
        <div className="w - 12 h - 12 bg - zion - cyan rounded - lg mr - 3 flex - shrink - 0"></div>;
        <div className="flex - 1">;
          <h4 className="font - semibold text - white">Zion AI Marketplace</h4>;
          <p className="text - xs text - gray - 300">Get the full experience on our app</p>;
        </div>;
        <div className="flex items - center gap - 3">;
          <a;
            href="/open - app";
            className="px - 4 py - 1 bg - zion - cyan text - zion - blue - dark rounded text - sm font - medium";
          >;
            View;
          </a>;
          <button;
            on_click = {dismiss_banner, }
            className="text - gray - 400 focus - visible: outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 rounded";
            aria - label="Dismiss banner";
          >;
            <X className="h - 5 w - 5" />;
          </button>;
        </div>;
      </div>;
    </div>);
}
'"},
}

  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
