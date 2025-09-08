



  className;

  googlePlayUrl = "#";

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ ;
  className;
  appStoreUrl = "#";
  googlePlayUrl = "#";
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ 
  className,
  appStoreUrl = "#",
  googlePlayUrl = "#",


      e.preventDefault(),
      // // // console.log("App Store download clicked"),



      e && e.preventDefault();
      console && console.log("App Store download clicked"),;
      onAppStoreClick?.();
    }
  };

  return (







          <div className="text-xl font-semibold">Google Play</div>


;
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({;
  className,;
  appStoreUrl = "#",;
  googlePlayUrl = "#",;
  onAppStoreClick,;
  onGooglePlayClick;
}) => {;
  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {;
    if (!appStoreUrl || appStoreUrl === "#") {;
      e.preventDefault(),;
      // // // console.log("App Store download clicked"),;
      onAppStoreClick?.();
    }
  },;
  const handleGooglePlayClick = (e: React.MouseEvent<HTMLAnchorElement>) => {;
    if (!googlePlayUrl || googlePlayUrl === "#") {;
      e.preventDefault(),;
      // // // console.log("Google Play download clicked"),;
      onGooglePlayClick?.();
    }
  };
  return (;





export default AppStoreButtons;






