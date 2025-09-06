
import React from "react",
import { Apple, GithubIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface AppStoreButtonsProps {
  className?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void
}

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ 
  className;
  appStoreUrl;