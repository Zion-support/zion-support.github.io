    if (!enabled || !isMobile) return;
    
    document.documentElement.classList.add('mobile-device');
    
    if (isTablet) {
      document.documentElement.classList.add('tablet-device');
    }
    
    if (deviceOrientation === 'portrait') {
      document.documentElement.classList.add('portrait-orientation');
      document.documentElement.classList.remove('landscape-orientation');
    } else {
      document.documentElement.classList.add('landscape-orientation');
      document.documentElement.classList.remove('portrait-orientation');
    }
    
    return () => {
      document.documentElement.classList.remove('mobile-device', 'tablet-device', 'portrait-orientation', 'landscape-orientation');
    };
  }, [enabled, isMobile, isTablet, deviceOrientation]);

  return null;
};

export default MobileExperienceEnhancer;
