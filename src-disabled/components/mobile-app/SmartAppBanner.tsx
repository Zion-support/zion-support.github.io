    if (isMobile && !safeStorage.getItem("smartBannerDismissed")) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [isMobile, delay])
  const dismissBanner = () => {
    setIsVisible(false)
    safeStorage.setItem("smartBannerDismissed", "true")
  }
  const resetBanner = () => {
    safeStorage.removeItem("smartBannerDismissed")
    setIsVisible(true)
  }


  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl
  // Detect iOS or Android
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  const bannerLink = isIOS ? appStoreUrl : googlePlayUrl
          <h4 className="font-semibold text-white">{appName}</h4>
          <p className="text-xs text-gray-300">Get our app for the best experience</p>
        </div>
        
        



        <div className="flex items-center gap-3">
          <Link 
            href="/open-app" 
            className="flex items-center px-4 py-1.5 bg-zion-cyan text-zion-blue-dark rounded text-sm font-medium"
          >
            View
            <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
          <button onClick={dismissBanner} className="text-gray-300" aria-label="Dismiss">


'"

};
};

'";
  );
};