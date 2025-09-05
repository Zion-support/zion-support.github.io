<<<<<<< HEAD
import { useState, useEffect } from 'react';

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

const defaultBreakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useResponsive(breakpoints: Breakpoints = defaultBreakpoints) {
  const [screenSize, setScreenSize] = useState<keyof Breakpoints>('sm');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateScreenSize = () => {
      const width = window.innerWidth;
      
      if (width >= breakpoints['2xl']) {
        setScreenSize('2xl');
      } else if (width >= breakpoints.xl) {
        setScreenSize('xl');
      } else if (width >= breakpoints.lg) {
        setScreenSize('lg');
      } else if (width >= breakpoints.md) {
        setScreenSize('md');
      } else {
        setScreenSize('sm');
      }
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, [breakpoints]);

  const isMobile = screenSize === 'sm';
  const isTablet = screenSize === 'md';
  const isDesktop = screenSize === 'lg' || screenSize === 'xl' || screenSize === '2xl';
  const isLargeScreen = screenSize === 'xl' || screenSize === '2xl';

  return {
    screenSize,
    isMobile,
    isTablet,
    isDesktop,
    isLargeScreen,
    breakpoints,
  };
}
=======
        "isDesktop": width >= 1024})};
    updateDimensions(),
    window.addEventListener(,
  'resize', updateDimensions),
    return () => window.removeEventListener(,
  'resize', updateDimensions)}, []),
  return state};
export default useResponsive,
,
>>>>>>> cursor/automate-test-improve-and-merge-code-8ee2
