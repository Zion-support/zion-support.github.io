









      }, delay),
      
      return () => clearTimeout(timer)
    }
  }, [isMobile, delay]),
  





        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only)
      </div>

    ) : null
  }
  // Detect iOS or Android

},

import React, { useState, useEffect } from "react",;
import { X, ArrowRight } from "lucide-react",;
import { Link } from "react-router-dom",;

import { useIsMobile } from "@/hooks/use-mobile",;


  const [isVisible, setIsVisible] = useState(false),;
  const isMobile = useIsMobile(),;
  useEffect(() => {;'
    // Only show banner on mobile devices and if it hasn't been dismissed;"
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {;



        </div>;

          <p className="text-xs text-gray-300">Get our app for the best experience</p>;
        </div>;



    </div>);
}
;

export default SmartAppBanner;






