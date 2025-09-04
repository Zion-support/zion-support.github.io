import React, { useState, useEffect, useCallback } from 'react';

interface MobileExperienceEnhancerProps {
  enabled?: boolean;
  showGestures?: boolean;
}

export const MobileExperienceEnhancer: React.FC<MobileExperienceEnhancerProps> = ({
  enabled = true,
  showGestures = false,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [deviceOrientation, setDeviceOrientation] = useState<string>('portrait');

  const checkDevice = useCallback(() => {
    const userAgent = navigator.userAgent;
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isTabletDevice = /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)/i.test(userAgent);
    
    setIsMobile(isMobileDevice);
    setIsTablet(isTabletDevice);
    
    if (window.innerHeight > window.innerWidth) {
      setDeviceOrientation('portrait');
    } else {
      setDeviceOrientation('landscape');
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    window.addEventListener('orientationchange', checkDevice);
    
    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('orientationchange', checkDevice);
    };
  }, [enabled, checkDevice]);

  useEffect(() => {
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