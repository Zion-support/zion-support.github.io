import { useState, useEffect } from 'react';

interface ResponsiveState {
  screenWidth: number;
  screenHeight: number;
  orientation: "landscape" | "portrait";
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

const defaultBreakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const useResponsive = (breakpoints: Breakpoints = defaultBreakpoints): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>({
    screenWidth: 0,
    screenHeight: 0,
    orientation: "portrait",
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setState({
        screenWidth: width,
        screenHeight: height,
        orientation: width > height ? "landscape" : "portrait",
        isMobile: width < breakpoints.md,
        isTablet: width >= breakpoints.md && width < breakpoints.lg,
        isDesktop: width >= breakpoints.lg,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, [breakpoints]);

  return state;
};

export default useResponsive;