
import React, { useState, useEffect } from "react";
import { safeStorage } from "@/utils/safeStorage";
import { X } from 'lucide-react'
import { useIsMobile } from "@/hooks/use-mobile";
export const AppStoreBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState($2);
  const isMobile = useIsMobile($2);
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed before
    if (isMobile && !safeStorage.getItem("appBannerDismissed")) {
      // Delay showing the banner by 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000),
      
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile]),
  
  const dismissBanner = () => {
    setIsVisible($2);
    safeStorage.setItem("appBannerDismissed", "true")
  },
  
  // Only render on mobile devices
  if (!isMobile || !isVisible) return null,
  
  return (
    <div className = $2;