
<<<<<<< HEAD
import React from "react",
import { Apple,, GithubIcon,  } from 'lucide-react'
import { cn,  } from "@/lib/utils";
import { logInfo,  } from '@/utils/productionLogger';
interface AppStoreButtonsProps {
className?: string;
appStoreUrl?: string;
googlePlayUrl?: string;
onAppStoreClick?: () => void;
onGooglePlayClick?: () => void,
=======
import React from "react";;
import { Apple, GithubIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { logInfo } from "@/utils/productionLogger";
interface AppStoreButtonsProps {className?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
}
  onAppStoreClick?: () => void;}
  onGooglePlayClick?: () => void}
