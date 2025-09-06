import { useState, useEffect } from 'react';

interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

const defaultBreakpoints: Breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

type BreakpointKey = keyof Breakpoints;

interface UseResponsiveReturn {
  width: number;
  height: number;
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  currentBreakpoint: BreakpointKey;
  isBreakpoint: (breakpoint: BreakpointKey) => boolean;
  isMinBreakpoint: (breakpoint: BreakpointKey) => boolean;
  isMaxBreakpoint: (breakpoint: BreakpointKey) => boolean;
}

export function useResponsive(
  customBreakpoints?: Partial<Breakpoints>
): UseResponsiveReturn {
  const breakpoints = { ...defaultBreakpoints, ...customBreakpoints };
  
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { width, height } = dimensions;

  const getCurrentBreakpoint = (): BreakpointKey => {
    const sortedBreakpoints = Object.entries(breakpoints)
      .sort(([, a], [, b]) => b - a) as [BreakpointKey, number][];

    for (const [key, value] of sortedBreakpoints) {
      if (width >= value) {
        return key;
      }
    }
    return 'xs';
  };

  const currentBreakpoint = getCurrentBreakpoint();

  const isBreakpoint = (breakpoint: BreakpointKey): boolean => {
    return currentBreakpoint === breakpoint;
  };

  const isMinBreakpoint = (breakpoint: BreakpointKey): boolean => {
    return width >= breakpoints[breakpoint];
  };

  const isMaxBreakpoint = (breakpoint: BreakpointKey): boolean => {
    return width < breakpoints[breakpoint];
  };

  return {
    width,
    height,
    isXs: isBreakpoint('xs'),
    isSm: isBreakpoint('sm'),
    isMd: isBreakpoint('md'),
    isLg: isBreakpoint('lg'),
    isXl: isBreakpoint('xl'),
    is2Xl: isBreakpoint('2xl'),
    isMobile: isMaxBreakpoint('md'),
    isTablet: isMinBreakpoint('md') && isMaxBreakpoint('lg'),
    isDesktop: isMinBreakpoint('lg'),
    currentBreakpoint,
    isBreakpoint,
    isMinBreakpoint,
    isMaxBreakpoint,
  };
}

// Hook for specific breakpoint checks
export function useBreakpoint(breakpoint: BreakpointKey) {
  const { isMinBreakpoint } = useResponsive();
  return isMinBreakpoint(breakpoint);
}

// Hook for mobile detection
export function useIsMobile() {
  const { isMobile } = useResponsive();
  return isMobile;
}

// Hook for tablet detection
export function useIsTablet() {
  const { isTablet } = useResponsive();
  return isTablet;
}

// Hook for desktop detection
export function useIsDesktop() {
  const { isDesktop } = useResponsive();
  return isDesktop;
}