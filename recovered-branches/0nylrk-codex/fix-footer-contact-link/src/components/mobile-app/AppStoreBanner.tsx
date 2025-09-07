import React, { useState, useEffect } from "react",
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState($2);
  const isMobile = useIsMobile($2);
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed before
    if (isMobile && !localStorage.getItem("appBannerDismissed")) {
      // Delay showing the banner by 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000),
      
      return () => clearTimeout(timer)
    }
  }, [isMobile]),
  
  const dismissBanner = () => {
    setIsVisible($2);
    localStorage.setItem("appBannerDismissed", "true")
  },
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) return null,
  
  return (
    <div className = $2;