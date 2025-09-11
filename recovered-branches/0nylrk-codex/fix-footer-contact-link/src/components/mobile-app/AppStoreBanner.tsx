


export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
import { X } from "lucide-react",
import { useIsMobile } from "@/hooks/use-mobile",
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false),
  const isMobile = useIsMobile(),
  
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

=======
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
