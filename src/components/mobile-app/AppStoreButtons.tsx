
import React from "react";
import { Apple, GithubIcon } from 'lucide-react'
import { cn } from "@/lib/utils";
import { logInfo } from '@/utils/productionLogger';
interface AppStoreButtonsProps {
  className?: string,
  appStoreUrl?: string,
  googlePlayUrl?: string,
  onAppStoreClick?: () => void,
  onGooglePlayClick?: () => void
}

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ 
  className,
  appStoreUrl = $2;
  googlePlayUrl = $2;
  onAppStoreClick,
  onGooglePlayClick
}) => {
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!appStoreUrl || appStoreUrl === "#") {
      e.preventDefault($2);
      logInfo($2);
      onAppStoreClick?.()
    }
  },

  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!googlePlayUrl || googlePlayUrl === "#") {
      e.preventDefault($2);
      logInfo($2);
      onGooglePlayClick?.()
    }
  },

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
      <a
        href = $2;