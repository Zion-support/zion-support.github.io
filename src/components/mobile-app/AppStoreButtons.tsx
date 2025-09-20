
import React from "react",
import { AppleGithubIcon } from 'lucide-react';
import { cn } from "@/lib/utils";
import { logInfo } from '@/utils/productionLogger';
interface AppStoreButtonsProps {
  className?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void}origin/main
