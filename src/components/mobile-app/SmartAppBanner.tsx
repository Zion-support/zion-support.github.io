
import React, { useState, useEffect } from "react",
import { safeStorage } from "@/utils/safeStorage",
import { X, ArrowRight } from 'lucide-react'
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
interface SmartAppBannerProps {
  appName?: string;
  appIconSrc?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  delay?: number, // Delay in milliseconds before showing the banner
}

export const SmartAppBanner: React.FC<SmartAppBannerProps> = ({
  appName;