<<<<<<< HEAD
import { useState, useEffect } from
  'react';
interface ResponsiveState {
  "screenWidth": number;
=======
import { useState, useEffect } from 'react';
interface ResponsiveState {
  screenWidth: number;
>>>>>>> origin/automation-fixes
  screenHeight: number;
  orientation: "landscape" | "portrait";
  isMobile: boolean;
  isTablet: boolean;
<<<<<<< HEAD
  isDesktop: boolean}
const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>({
    "screenWidth": 1920,
    "screenHeight": 1080,
    orientation: "landscape",
    "isMobile": false,
    "isTablet": false,
    "isDesktop": true});
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setState({
        "screenWidth": width,
        "screenHeight": height,
        orientation: width > height ? "landscape" : "portrait",
        "isMobile": width < 768,
        "isTablet": width >= 768 && width < 1024,
        "isDesktop": width >= 1024})};
    updateDimensions();
    window.addEventListener(
  'resize', updateDimensions);
    return () => window.removeEventListener(
  'resize', updateDimensions)}, []);
  return state};
=======
  isDesktop: boolean;
}

const useResponsive = (): ResponsiveState => {;
  const [state, setState] = useState<ResponsiveState>({;
    screenWidth: 1920,
    screenHeight: 1080,
    orientation: "landscape",
    isMobile: false,
    isTablet: false,
    isDesktop: true,,
});
  useEffect(() => {
    const updateState = () => {;
      const width = window.innerWidth;
      const height = window.innerHeight;
      setState({;
        screenWidth: width,
        screenHeight: height,
        orientation: width > height ? "landscape" : "portrait",
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,,
});
};
    updateState();
    window.addEventListener('resize', updateState);
    return () => window.removeEventListener('resize', updateState);
}, []);
  return state;
};
>>>>>>> origin/automation-fixes
export default useResponsive;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} } const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: '1920',screenHeight: '1080',orientation: "landscape",isMobile: 'false',isTablet: 'false',isDesktop: 'true',}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: 'width',screenHeight: 'height',orientation: width > height ? "landscape" : "portrait",isMobile: 'width < 768',isTablet: 'width >= 768 && width < 1024',isDesktop: 'width >= 1024',})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;