<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Apple, GithubIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { logInfo } from '@/utils/productionLogger';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

import React from "react";
import { Apple, GithubIcon } from 'lucide-react'
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  className;
  appStoreUrl = "#";
  googlePlayUrl = "#";
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
"
=======

<<<<<<< HEAD

};

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
