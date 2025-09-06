import React from "react";

import { cn } from "@/lib/utils";
import { logInfo } from '@/utils/productionLogger';
interface AppStoreButtonsProps {
  className?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void
}

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({