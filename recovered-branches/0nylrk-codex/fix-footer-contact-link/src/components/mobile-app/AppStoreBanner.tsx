



export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
import { X } from "lucide-react",
import { useIsMobile } from "@/hooks/use-mobile",
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed before
    if (isMobile && !localStorage.getItem("appBannerDismissed")) {
      // Delay showing the banner by 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);
  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem("appBannerDismissed", "true");
  }
  // Only render on mobile devices
  if (!isMobile |!isVisible) return null;
        setIsVisible(true)
      }, 2000),
      
      return () => clearTimeout(timer)
    }
  }, [isMobile]),
  
  const dismissBanner = () => {
    setIsVisible(false),
    localStorage.setItem("appBannerDismissed", "true")
  },
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) return null,
  
  return (
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>
        <div className="flex-1">
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>
          <p className="text-xs text-gray-300">
            Get the full experience on our app
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/open-app"
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium"
          >
            View
          </a>
          <button onClick={dismissBanner} className="text-gray-400">
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import {X} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
export const AppStoreBanner: React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {;
    // Only show banner on mobile devices and if it hasn't been dismissed before;
    if (isMobile && !localStorage && localStorage.getItem("appBannerDismissed")) {;
      // Delay showing the banner by 2 seconds;
      const timer = setTimeout(() => {;
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const dismissBanner = () => {;
    setIsVisible(false);
    localStorage && localStorage.setItem("appBannerDismissed", "true");
  };

  // Only render on mobile devices;
  if (!isMobile || !isVisible) return null;

  return (
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>;
        <div className="flex-1">;
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>;
          <p className="text-xs text-gray-300">Get the full experience on our app</p>;
        </div>;
        <div className="flex items-center gap-3">;
          <a
            href="/open-app" 
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium">;
            View;
          </a>;
          <button onClick={dismissBanner} className="text-gray-400">;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
  );
};

=======
import React, { useState, useEffect } from './react';
import { X  } from './lucide-react';
import { useIsMobile  } from '@/hooks / use - mobile';
export const AppStoreBanner: React.FC = () => {
  const [is_visible, setIsVisible] = useState (false);
  const is_mobile = useIsMobile ();
;
  useEffect (() => {
    // Only show banner on mobile devices and if it hasn't been dismissed before;
    if () {) {
  $2
}
      // Delay showing the banner by 2 seconds;
      const timer = set_timeout (() => {
        setIsVisible (true);
      }, 2000);
;
      return () => clear_timeout (timer);
    }
  }, [is_mobile]);
;
  const dismiss_banner = () =>: any {
    setIsVisible (false);
    local_storage.set_item ("appBannerDismissed", "true");
  }
;
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
          <p className="text - xs text - gray - 300">;
            Get the full experience on our app;
          </p>;
        </div>;
        <div className="flex items - center gap - 3">;
          <a;
            href="/open - app";
            className="px - 4 py - 1 bg - zion - cyan text - zion - blue - dark rounded text - sm font - medium";
          >;
            View;
          </a>;
          <button on_click={dismiss_banner} className="text - gray - 400">;
            <X className="h - 5 w - 5" />;
          </button>;
        </div>;
      </div>;
    </div>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  )

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
