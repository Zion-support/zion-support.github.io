
import React, { useState, useEffect } from "react";""
import { X } from "lucide-react";""
import { useIsMobile } from "@/hooks/use-mobile";"

export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();}


"
import React, { useState, useEffect } from "react";""
import {X} from "lucide-react";""
import {useIsMobile} from "@/hooks/use-mobile";"
export const AppStoreBanner: React.FC = () => {;
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();"
import { X } from "lucide-react",""
import { useIsMobile } from "@/hooks/use-mobile","
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
  useEffect(() => {"
    // Only show banner on mobile devices and if it hasn't been dismissed before;''
    if (isMobile && !localStorage.getItem("appBannerDismissed")) {"
      // Delay showing the banner by 2 seconds;
      const timer = setTimeout(() => {
        setIsVisible(true);

      }, 2000);


      return () => clearTimeout(timer);
    }
  }, [isMobile]);


  const dismissBanner = () => {
    setIsVisible(false);"
    localStorage.setItem("appBannerDismissed", "true");"
  };

  // Only render on mobile devices;
  if (!isMobile || !isVisible) return null;




      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  const dismissBanner = () => {
    setIsVisible(false);"
    localStorage.setItem("appBannerDismissed", "true");"
  };

  // Only render on mobile devices;
  if (!isMobile || !isVisible) return null;

  return ("
    <div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40">"
</div>"
      <div className="flex items-center">"
</div>"
        <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0"></div>""
        <div className="flex-1">"
</div>"
          <h4 className="font-semibold text-white">Zion AI Marketplace</h4>""
          <p className="text-xs text-gray-300">"
</p>
          </p>
        </div>"
        <div className="flex items-center gap-3">"
</div>
          <a;"
            href="/open-app"""
            className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium""
          >
</a>
          </a>
          </Link>"
          <button onClick={dismissBanner} className="text-gray-400">"
</button>"
            <X className="h-5 w-5" />"
</X>
          </button>
        </div>
      </div>
    </div>"
    <div className="fixed bottom - 16 left - 0 right - 0 bg - zion - blue - dark border - t border - zion - purple / 30 p - 3 z - 40">;"
</div>"
      <div className="flex items - center">;"
</div>"
        <div className="w - 12 h - 12 bg - zion - cyan rounded - lg mr - 3 flex - shrink - 0"></div>;""
        <div className="flex - 1">;"
</div>"
          <h4 className="font - semibold text - white">Zion AI Marketplace</h4>;""
          <p className="text - xs text - gray - 300">;"
</p>
          </p>;
        </div>;"
        <div className="flex items - center gap - 3">;"
</div>
          <a;"
            href="/open - app";""
            className="px - 4 py - 1 bg - zion - cyan text - zion - blue - dark rounded text - sm font - medium";"
          >;
</a>
          </a>;"
          <button on_click={dismiss_banner} className="text - gray - 400">;"
</button>"
            <X className="h - 5 w - 5" />;"
</X>
          </button>;
        </div>;
      </div>;)
    </div>);"
return (<div className="fixed bottom-16 left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 p-3 z-40" > <div className="flex items-center" > <div className="w-12 h-12 bg-zion-cyan rounded-lg mr-3 flex-shrink-0" ></div> <div className="flex-1" > <h4 className="font-semibold text-white" >Zion AI Marketplace</h4> <p className="text-xs text-gray-300" >Get the full experience on our app</p> </div> <div className="flex items-center gap-3" > <a href="/open-app" className="px-4 py-1 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium" > View </button> </div> </div> </div>)""

