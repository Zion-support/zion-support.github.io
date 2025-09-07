appStoreUrl?: string;
import React from 'react';
import { Apple, GithubIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { logInfo } from '@/utils/productionLogger';


interface AppStoreButtonsProps {
  className?: string;
  appStoreUrl?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void;
}
  appStoreUrl = "#","
  googlePlayUrl = "#","
  onAppStoreClick,
  onGooglePlayClick
    if (!appStoreUrl || appStoreUrl === "#") {"
      e.preventDefault(),
      logInfo("App Store download clicked"),"
      onAppStoreClick?.()
    }
  },
    if (!googlePlayUrl || googlePlayUrl === "#") {"
      e.preventDefault(),
      logInfo("Google Play download clicked"),"
      onGooglePlayClick?.()
    }
  }
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ ;,
  className;
  appStoreUrl = "#";
  googlePlayUrl = "#";
};  className,;

import React from "react",
import { Apple, GithubIcon } from 'lucide-react'
import { cn } from "@/lib/utils",
import { logInfo } from '@/utils/productionLogger',
interface AppStoreButtonsProps {
  className?: string,
  appStoreUrl?: string,
  googlePlayUrl?: string,
  onAppStoreClick?: () => void,
  onGooglePlayClick?: () => void
}


