
import React, { useState, useEffect } from "react";
import { safeStorage } from "@/utils/safeStorage";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

interface SmartAppBannerProps {
  appName?: string;
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  delay?: number; // Delay in milliseconds before showing the banner
}

export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
  
      
  

  
  
  
        
        
          <Link 
            <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
          
            <X className="h-5 w-5" />
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
