        "isDesktop":width >= 1024})},;
;
    updateDimensions(),;
    window.addEventListener(;
  'resize', updateDimensions),;
    return () => window.removeEventListener(;
  'resize', updateDimensions)}, []),;
  return state},;
export default useResponsive,;import { useState, useEffect } from 'react';

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
        "isDesktop": width >= 1024})};
    updateDimensions(),
    window.addEventListener(,
  'resize', updateDimensions),
    return () => window.removeEventListener(,
  'resize', updateDimensions)}, []),
  return state};
<<<<<<< HEAD
export default useResponsive,
,
=======
export default useResponsive;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} } const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: '1920',screenHeight: '1080',orientation: "landscape",isMobile: 'false',isTablet: 'false',isDesktop: 'true',}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: 'width',screenHeight: 'height',orientation: width > height ? "landscape" : "portrait",isMobile: 'width < 768',isTablet: 'width >= 768 && width < 1024',isDesktop: 'width >= 1024',})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
<<<<<<< HEAD
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
=======
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
