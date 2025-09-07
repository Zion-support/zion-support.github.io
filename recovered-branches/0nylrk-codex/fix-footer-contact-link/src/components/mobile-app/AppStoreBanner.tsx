<<<<<<< HEAD
import React, { useState, useEffect } from "react";"
import { X } from "lucide-react";"
import { useIsMobile } from "@/hooks/use-mobile";
export const AppStoreBanner: React.FC = () => {};
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import {X} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
export const AppStoreBanner: React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
<<<<<<< HEAD
=======
=======
import React, { useState, useEffect } from "react",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


import React, { useState, useEffect } from "react";
import {X} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
export const AppStoreBanner: React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { X } from "lucide-react",
=======
"
import { X } from "lucide-react","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useIsMobile } from "@/hooks/use-mobile",
export const AppStoreBanner: React.FC = () => {}
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
<<<<<<< HEAD
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed before
    if (isMobile && !localStorage.getItem("appBannerDismissed")) {
      // Delay showing the banner by 2 seconds
      const timer = setTimeout(() => {
=======




  useEffect(() => {}
    // Only show banner on mobile devices and if it hasn't been dismissed before";
    if (isMobile && !localStorage.getItem("appBannerDismissed")) {};
      // Delay showing the banner by 2 seconds;
      const timer = setTimeout(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

<<<<<<< HEAD
  const dismissBanner = () => {
    setIsVisible(false);
<<<<<<< HEAD
    localStorage.setItem("appBannerDismissed", "true")
};
=======
  const dismissBanner = () => {}
    setIsVisible(false);"
    localStorage.setItem("appBannerDismissed", "true");
  };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    localStorage.setItem("appBannerDismissed", "true");
  };
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

  // Only render on mobile devices;
  if (!isMobile || !isVisible) return null;
<<<<<<< HEAD
<<<<<<< HEAD
=======

        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem("appBannerDismissed", "true");
  };

  // Only render on mobile devices
  if (!isMobile || !isVisible) return null;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return (
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>
        <div className="flex-1">
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>
=======



        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const dismissBanner = () => {}
    setIsVisible(false);"
    localStorage.setItem("appBannerDismissed", "true");
  };

  // Only render on mobile devices;
  if (!isMobile || !isVisible) return null;





  return ("
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">"
      <div className="flex items-center">"
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>"
        <div className="flex-1">"
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="text-xs text-gray-300">
            Get the full experience on our app;
          </p>
        </div>"
        <div className="flex items-center gap-3">
          <a"
            href="/open-app""
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium"
          >
<<<<<<< HEAD
            View
          </a>
          </Link>
          <button onClick={dismissBanner} className="text-gray-400">
=======
            View;
          </Link>
"
          <button onClick={dismissBanner} className="text-gray-400">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  );
}

  )
};
},
import React, { useState, useEffect } from "react",;
import { X } from "lucide-react",;
import { useIsMobile } from "@/hooks/use-mobile",;
=======
<<<<<<< HEAD
<<<<<<< HEAD

import React, { useState, useEffect } from "react";
import {X} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
<<<<<<< HEAD
  )
<<<<<<< HEAD
=======
  );
>>>>>>> main
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
};
},
import React, { useState, useEffect } from "react",;
import { X } from "lucide-react",;
import { useIsMobile } from "@/hooks/use-mobile",;
export const AppStoreBanner: React.FC = () => {;
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  useEffect(() => {;
    // Only show banner on mobile devices and if it hasn't been dismissed before;
    if (isMobile && !localStorage.getItem("appBannerDismissed")) {;
      // Delay showing the banner by 2 seconds;
      const timer = setTimeout(() => {;
        setIsVisible(true);
      }, 2000),;
      return () => clearTimeout(timer);
    }
  }, [isMobile]),;
  const dismissBanner = () => {;
    setIsVisible(false),;
    localStorage.setItem("appBannerDismissed", "true");
  },;
  // Only render on mobile devices;
  if (!isMobile || !isVisible) return null;
  return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>;
        <div className="flex-1">;
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>;
          <p className="text-xs text-gray-300">Get the full experience on our app</p>;
        </div>;
        <div className="flex items-center gap-3">;
<<<<<<< HEAD
<<<<<<< HEAD
          <a
            href="/open-app" 
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium">;
=======
          <a ;
            href="/open-app" ;
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium";
          >;
          <a;
            href="/open-app";
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium";
          >;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
            View;
          </a>;
          <button onClick={dismissBanner} className="text-gray-400">;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default AppStoreBanner;
=======
=======
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState, useEffect } from './react';
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
};
},
import React, { useState, useEffect } from "react",;
import { X } from "lucide-react",;
import { useIsMobile } from "@/hooks/use-mobile",;
export const AppStoreBanner: React.FC = () => {;
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>;
        <div className="flex-1">;
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>;
          <p className="text-xs text-gray-300">Get the full experience on our app</p>;
        </div>;
        <div className="flex items-center gap-3">;
            View;
          </a>;
          <button onClick={dismissBanner} className="text-gray-400">;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;import React, { useState, useEffect } from './react';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
};

import React, { useState, useEffect } from './react';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { X  } from './lucide-react';
=======




'
import React, { useState, useEffect } from './react';'
import { X  } from './lucide-react';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useIsMobile  } from '@/hooks / use - mobile';
export const AppStoreBanner: React.FC = () => {};
  const [is_visible, setIsVisible] = useState (false);
  const is_mobile = useIsMobile ();
;
  useEffect (() => {'
    // Only show banner on mobile devices and if it hasn't been dismissed before;
    if () {) {}
  $2;
}
      // Delay showing the banner by 2 seconds;
      const timer = set_timeout (() => {}
        setIsVisible (true);
      }, 2000);
;
      return () => clear_timeout (timer);
    }
  }, [is_mobile]);
;
  const dismiss_banner = () =>: any {}
    setIsVisible (false);"
    local_storage.set_item ("appBannerDismissed", "true");
  }
;
  // Only render on mobile devices;
  // Check condition;
if (return null) {}
  $2;
}
<<<<<<< HEAD
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
<<<<<<< HEAD
          <button on_click={dismiss_banner} className="text - gray-400">;
            <X className="h - 5 w-5" />;
=======
  return ("
    <div className="fixed bottom - 16 left - 0 right - 0 bg - zion - blue - dark border - t border - zion - purple / 30 p - 3 z - 40">;"
      <div className="flex items - center">;"
        <div className="w - 12 h - 12 bg - zion - cyan rounded - lg mr - 3 flex - shrink - 0"></div>;"
        <div className="flex - 1">;"
          <h4 className="font - semibold text - white">Zion AI Marketplace</h4>;"
          <p className="text - xs text - gray - 300">;
            Get the full experience on our app;
          </p>;
        </div>;"
        <div className="flex items - center gap - 3">;
          <a;"
            href="/open - app";"
            className="px - 4 py - 1 bg - zion - cyan text - zion - blue - dark rounded text - sm font - medium";
          >;
            View;
          </a>;"
          <button on_click={dismiss_banner} className="text - gray - 400">;"
            <X className="h - 5 w - 5" />;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
          <button on_click={dismiss_banner} className="text - gray - 400">;
            <X className="h - 5 w - 5" />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </button>;
        </div>;
      </div>;
    </div>);
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  )


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  )

  ),;
},; export const AppStoreBanner: React.FC = () => {};
  const [isVisible, setIsVisible] = useState (false);
const isMobile = useIsMobile ();'"
//Only show banner on mobile devices and if it hasn't been dismissed before if (isMobile && !localStorage.getItem ("appBannerDismissed") ) {}
  //Delay showing the banner by 2 seconds return () => clearTimeout (timer) 
}
}, [isMobile]);"
return (<div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40" > <div className="flex items-center" > <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0" ></div> <div className="flex-1" > <h4 className="font-semibold text-white" >Zion AI Marketplace</h4> <p className="text-xs text-gray-300" >Get the full experience on our app</p> </div> <div className="flex items-center gap-3" > <a href="/open-app" className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium" > View </button> </div> </div> </div>) 
};
  );
};

export default AppStoreBanner;
<<<<<<< HEAD
<<<<<<< HEAD
=======



  )


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  )

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
