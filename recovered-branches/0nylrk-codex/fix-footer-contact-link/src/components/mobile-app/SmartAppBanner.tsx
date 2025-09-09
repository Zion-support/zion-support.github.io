  appName = "Zion Marketplace";
  appIconSrc;"
  appStoreUrl = "/download";"
  googlePlayUrl = "/download"
  delay = 1500;
}) => {}
  const [isVisible, setIsVisible] = useState(false);


  // Only render on mobile devices
  if (!isMobile |!isVisible) {
    return process.env.NODE_ENV === 'development' ? (
      <div className="bg-zion-blue-dark p-2 text-xs text-center text-gray-400">

