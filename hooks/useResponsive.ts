<<<<<<< HEAD
import { useState, useEffect } from 'react';''interface ResponsiveState {
  screenWidth: number;
  screenHeight: number;
  orientation: "landscape" | "portrait";"  isMobile: boolean;"  isTablet: boolean;
  isDesktop: boolean;
}

const useResponsive = (): ResponsiveState => {;
  const [state, setState] = useState<ResponsiveState>({
    screenWidth: 1920, screenHeight: 1080,;
    orientation: "landscape", isMobile: false,"    isTablet: false, isDesktop: true,"  });

  useEffect(() => {
    const updateDimensions = () => {;
=======
import { useState, useEffect } from 'react';

interface ResponsiveState {
  screenWidth: number;
  screenHeight: number;
  orientation: "landscape" | "portrait";
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>({
    screenWidth: 1920,
    screenHeight: 1080,
    orientation: "landscape",
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const updateDimensions = () => {
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setState({
<<<<<<< HEAD
        screenWidth: width, screenHeight: height,;
        orientation: width > height ? "landscape" : "portrait", isMobile: width < 768,"        isTablet: width >= 768 && width < 1024, isDesktop: width >= 1024,"      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);'    '    return () => window.removeEventListener('resize', updateDimensions);'  }, []);'
=======
        screenWidth: width,
        screenHeight: height,
        orientation: width > height ? "landscape" : "portrait",
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
  return state;
};

export default useResponsive;