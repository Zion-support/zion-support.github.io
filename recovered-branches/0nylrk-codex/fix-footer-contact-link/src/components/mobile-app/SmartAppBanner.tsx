import React, { useState, useEffect } from "react",
import { X, ArrowRight } from "lucide-react",
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
interface SmartAppBannerProps {
  appName?: string,
  appIconSrc?: string,
  appStoreUrl?: string,
  googlePlayUrl?: string,
  delay?: number, // Delay in milliseconds before showing the banner
}
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
  appName = $2;
  appIconSrc,
  appStoreUrl = $2;
  googlePlayUrl = $2;
  delay = 1500
}) => {
  const [isVisible, setIsVisible] = useState($2);
  const isMobile = useIsMobile($2);
  useEffect(() => {
    // Only show banner on mobile devices and if it hasn't been dismissed
    if (isMobile && !localStorage.getItem("smartBannerDismissed")) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay),
      
      return () => clearTimeout(timer)
    }
  }, [isMobile, delay]),
  
  const dismissBanner = () => {
    setIsVisible($2);
    localStorage.setItem("smartBannerDismissed", "true")
  },

  const resetBanner = () => {
    localStorage.removeItem($2);
    setIsVisible(true)
  },
  
  // Only render on mobile devices
  if (!isMobile |!isVisible) {
    return process.env.NODE_ENV === 'development' ? (
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-400">
        Smart banner hidden. <button onClick={resetBanner} className="text-zion-cyan underline">Show banner</button> (development only)
      </div>
    ) : null
  }
  // Detect iOS or Android
  const isIOS = /iPad|iPhone|iPod/.test($2);
  const bannerLink = $2;
  return (
    <div className = $2;