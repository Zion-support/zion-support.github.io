
=======
import React from "react",;
import { Apple, GithubIcon } from "lucide-react",;
import { cn } from "@/lib/utils",;
;
interface AppStoreButtonsProps {;
  className?:string,;
  appStoreUrl?:string,;
  googlePlayUrl?:string,;
  onAppStoreClick?:() => void,;
  onGooglePlayClick?:() => void,;
}
;
export const AppStoreButtons:React.FC<AppStoreButtonsProps> = ({ ;
  className,;
  appStoreUrl = "#",;
  googlePlayUrl = "#",;
  onAppStoreClick,;
  onGooglePlayClick;
}) => {;
  const handleAppStoreClick = (e:React.MouseEvent<HTMLAnchorElement>) => {;
    if (!appStoreUrl || appStoreUrl === "#") {;
      e.preventDefault(),;
      // // // console.log("App Store download clicked"),;
      onAppStoreClick?.();
    }
  },;
;
  const handleGooglePlayClick = (e:React.MouseEvent<HTMLAnchorElement>) => {;
    if (!googlePlayUrl || googlePlayUrl === "#") {;
      e.preventDefault(),;
      // // // console.log("Google Play download clicked"),;
      onGooglePlayClick?.();
    }
  },;
;
  return (;
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>;
      <a ;
        href={appStoreUrl} ;
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors";
        onClick={handleAppStoreClick}
        target="_blank";
        rel="noopener noreferrer";
      >;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <Apple className="h-8 w-8 mr-3" />;
        <div>;
          <div className="text-xs">Download on the</div>;
          <div className="text-xl font-semibold">App Store</div>;
        </div>;
      </a>;
<<<<<<< HEAD

        </svg>;
        <div>;
          <div className="text-xs">GET IT ON</div>;
          <div className="text-xl font-semibold">Google Play</div>;
        </div>;
      </a>;
    </div>;
  );

