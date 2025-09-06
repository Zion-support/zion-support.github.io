
=======
import React from "react";
import {Apple, GithubIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import React from "react",
import { Apple, GithubIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Apple, GithubIcon } from "lucide-react",
import { cn } from "@/lib/utils",

import React from "react",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
interface AppStoreButtonsProps {
  class_name?: string;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  appStoreUrl?: string;
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void;
}
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  className;

  onAppStoreClick,
  onGooglePlayClick
}) => {
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!appStoreUrl || appStoreUrl === "#") {
      e.preventDefault(),
      // // // console.log("App Store download clicked"),
      onAppStoreClick?.()
    }
  },


  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
      <a
        href={appStoreUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick={handleAppStoreClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Apple className="h-8 w-8 mr-3" />
        <div>
          <div className="text-xs">Download on the</div>
          <div className="text-xl font-semibold">App Store</div>
        </div>

      <a
        href={googlePlayUrl}

      </Link>

      <a 
        href={googlePlayUrl} 
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
