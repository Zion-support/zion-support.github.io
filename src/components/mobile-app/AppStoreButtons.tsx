appStoreUrl?: string;
  googlePlayUrl?: string;
  onAppStoreClick?: () => void;
  onGooglePlayClick?: () => void;
}



  appStoreUrl = "#",
  googlePlayUrl = "#",
  onAppStoreClick,
  onGooglePlayClick


    if (!appStoreUrl || appStoreUrl === "#") {
      e.preventDefault(),
      logInfo("App Store download clicked"),
      onAppStoreClick?.()
    }
  },



    if (!googlePlayUrl || googlePlayUrl === "#") {
      e.preventDefault(),
      logInfo("Google Play download clicked"),

      onGooglePlayClick?.()
    }
  }
export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ ;
  className;
  appStoreUrl = "#";
  googlePlayUrl = "#";
};  className,;
  appStoreUrl = "#",;
  googlePlayUrl = "#",;
  onAppStoreClick,;
  onGooglePlayClick;
},) => {;
  const handleAppStoreClick = (e: React && React.MouseEvent<HTMLAnchorElement>,) => {;
    if (!appStoreUrl || appStoreUrl === "#") {;
      e && e.preventDefault(),;
      logInfo("App Store download clicked"),;
      onAppStoreClick?.();
    }
  },;

  const handleGooglePlayClick = (e: React && React.MouseEvent<HTMLAnchorElement>,) => {;
    if (!googlePlayUrl || googlePlayUrl === "#") {;
      e && e.preventDefault(),;
      logInfo("Google Play download clicked"),;
      onGooglePlayClick?.();
    }
  },;

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
      <a


        href={appStoreUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick={handleAppStoreClick}


        target="_blank"
        rel="noopener noreferrer"

        aria-label="Download on the App Store">;
        <Apple className="h-8 w-8 mr-3" aria-hidden="true" />;
        <div>;
          <div className="text-xs">Download on the</div>;
          <div className="text-xl font-semibold">App Store</div>;
        </div>;
      </a>;


      <a


        href={googlePlayUrl}
        className="flex items-center bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition-colors"
        onClick={handleGooglePlayClick}


        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http: //www.w3.org/2000/svg"
          className="h-8 w-8 mr-3 fill-current"
          aria-hidden="true"
