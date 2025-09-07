<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState($2);
  const isMobile = useIsMobile($2);
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { X } from "lucide-react",

import { useIsMobile } from "@/hooks/use-mobile",
export const AppStoreBanner: React.FC = () => {}
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),

<<<<<<< HEAD
=======
        setIsVisible(true);
      }, 2000);

<<<<<<< HEAD
      return () => clearTimeout(timer);
    }
  }, [isMobile]);
=======
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import {X} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
export const AppStoreBanner: React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
import React, { useState, useEffect } from "react",
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
import { X } from "lucide-react",
import { useIsMobile } from "@/hooks/use-mobile",
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed before
    if (isMobile && !localStorage.getItem("appBannerDismissed")) {
      // Delay showing the banner by 2 seconds
      const timer = setTimeout(() => {
<<<<<<< HEAD
        setIsVisible(true)
      }, 2000),
      
      return () => clearTimeout(timer)
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
>>>>>>> merged-prs-20250907-203621
    }
  }, [isMobile]),
  
  const dismissBanner = () => {
<<<<<<< HEAD
    setIsVisible($2);
=======
    setIsVisible(false);
    localStorage.setItem("appBannerDismissed", "true");
  }
  // Only render on mobile devices
  if (!isMobile |!isVisible) return null;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        setIsVisible(true)
      }, 2000),
      
      return () => clearTimeout(timer)
    }
  }, [isMobile]),
  
  const dismissBanner = () => {
    setIsVisible(false),
>>>>>>> merged-prs-20250907-203621
    localStorage.setItem("appBannerDismissed", "true")
  },
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) return null,
  
<<<<<<< HEAD
  return (
    <div className = $2;
=======
<<<<<<< HEAD
setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);
<<<<<<< HEAD
=======
  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem("appBannerDismissed", "true");
  }
  // Only render on mobile devices
  if (!isMobile |!isVisible) return null;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  // Only render on mobile devices;
  if (!isMobile || !isVisible) return null;

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  return (
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>
        <div className="flex-1">
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>

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

=======
<<<<<<< HEAD

=======
            View
<<<<<<< HEAD
          </Link>
=======
          </a>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <button onClick={dismissBanner} className="text-gray-400">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
<<<<<<< HEAD

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

};
},
=======
<<<<<<< HEAD
);
}
};
  );
}

  )
};
},
import React, { useState, useEffect } from "react",;
import { X } from "lucide-react",;
import { useIsMobile } from "@/hooks/use-mobile",;

import React, { useState, useEffect } from "react",;
import { X } from "lucide-react",;
import { useIsMobile } from "@/hooks/use-mobile",;
;
export const AppStoreBanner:React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  ;
export const AppStoreBanner: React.FC = () => {;
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
=======

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
<<<<<<< HEAD

};
},
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
import { useIsMobile } from "@/hooks/use-mobile",;"
export const "AppStoreBanner": React.FC = () => {;
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">;"
      <div className="flex items-center">;"
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>;"
        <div className="flex-1">;"
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>;"
          <p className="text-xs text-gray-300">Get the full experience on our app</p>;"
=======
import React, { useState, useEffect } from "react",;
import { X } from "lucide-react",;
import { useIsMobile } from "@/hooks/use-mobile",;
export const AppStoreBanner: React.FC = () => {;

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">;
      <div className="flex items-center">;
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>;
        <div className="flex-1">;
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>;
          <p className="text-xs text-gray-300">Get the full experience on our app</p>;
>>>>>>> origin/chore/fix-lint-and-merge
        </div>;
        <div className="flex items-center gap-3">;
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
          <a ;
            href="/open-app" ;
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium";
          >;
          <a;
            href="/open-app";
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium";
          >;
=======
          <a
            href="/open-app" 
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            View;
          </a>;
          <button onClick={dismissBanner} className="text-gray-400">;
            <X className="h-5 w-5" />;
          </button>;
        </div>;
      </div>;
    </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  );
};

<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
  );
};

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import React, { useState, useEffect } from './react';

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

import { X  } from './lucide-react';

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

          </button>;
        </div>;
      </div>;
    </div>);
}
;

  )

<<<<<<< HEAD
  ),;
},; export const AppStoreBanner: React.FC = () => {};
<<<<<<< HEAD
  const [isVisible, setIsVisible] = useState (false);
const isMobile = useIsMobile ();'"
//Only show banner on mobile devices and if it hasn't been dismissed before if (isMobile && !localStorage.getItem ("appBannerDismissed") ) {}
  //Delay showing the banner by 2 seconds return () => clearTimeout (timer) 
}
}, [isMobile]);"
=======
  const [isVisible, setIsVisible] = useState (false);
const isMobile = useIsMobile ();'"
//Only show banner on mobile devices and if it hasn't been dismissed before if (isMobile && !localStorage.getItem ("appBannerDismissed") ) {}
  //Delay showing the banner by 2 seconds return () => clearTimeout (timer) 
}
}, [isMobile]);"
=======
<<<<<<< HEAD
  ),;
},; export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState (false);
const isMobile = useIsMobile ();
//Only show banner on mobile devices and if it hasn't been dismissed before if (isMobile && !localStorage.getItem ("appBannerDismissed") ) {
  //Delay showing the banner by 2 seconds return () => clearTimeout (timer) 
}
}, [isMobile]);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
return (<div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40" > <div className="flex items-center" > <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0" ></div> <div className="flex-1" > <h4 className="font-semibold text-white" >Zion AI Marketplace</h4> <p className="text-xs text-gray-300" >Get the full experience on our app</p> </div> <div className="flex items-center gap-3" > <a href="/open-app" className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium" > View </button> </div> </div> </div>) 
};
  );
};

<<<<<<< HEAD
export default AppStoreBanner;
=======
<<<<<<< HEAD
export default AppStoreBanner;
=======
export default AppStoreBanner;
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
