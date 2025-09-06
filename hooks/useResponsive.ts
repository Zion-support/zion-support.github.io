        "isDesktop": width >= 1024})};
import { useState, useEffect } from 'react';

interface ResponsiveState {
  isMobile: boolean, isTablet: boolean,
  isDesktop: boolean, width: number,
  height: number,
}

export const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setState({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        width,
        height,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return state;
};

export default useResponsive;
    updateDimensions();
    window.addEventListener(;
  'resize', updateDimensions);
    return () => window.removeEventListener(;
  'resize', updateDimensions)}, []);
  return state};
export default useResponsive;
<<<<<<< HEAD
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} } const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: '1920',screenHeight: '1080',orientation: "landscape",isMobile: 'false',isTablet: 'false',isDesktop: 'true',}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: 'width',screenHeight: 'height',orientation: width > height ? "landscape" : "portrait",isMobile: 'width < 768',isTablet: 'width >= 768 && width < 1024',isDesktop: 'width >= 1024',})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
<<<<<<< HEAD
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
=======
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
=======
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
