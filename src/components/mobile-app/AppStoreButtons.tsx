appStoreUrl?: string;
import React from 'react';
import { Apple, GithubIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { logInfo } from '@/utils/productionLogger';


import { logInfo } from '@/utils/productionLogger';
interface AppStoreButtonsProps {
  className?: string;
  appStoreUrl?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void;
}


