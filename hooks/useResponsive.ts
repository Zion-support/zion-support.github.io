import { useState, useEffect } from 'react';

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}

export const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: 0,
    height: 0,
  });

interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

    updateDimensions(),;
    window && window.addEventListener(;
  'resize', updateDimensions),;
    return () => window && window.removeEventListener(;'
  'resize', updateDimensions)}, []),;

export function useResponsive(breakpoints: Breakpoints = defaultBreakpoints) {
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');

  'resize', updateDimensions)}, []);
  return state}'

  'react';

interface ResponsiveState {
  // TODO: Implement
}
  isMobile: boolean;,
  isTablet: boolean;
  isDesktop: boolean;,
  width: number;
  height: number;

export const useResponsive = (): ResponsiveState => {
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
        width,
        height,

        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,)
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return state;

export default useResponsive;

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
export default useResponsive;

;

  return state}
export default useResponsive'";
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
'"
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window && window.innerWidth; const height = window && window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window && window.addEventListener( 'resize',updateDimensions); return () => window && window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
const default_breakpoints: Breakpoints = {}
const defaultBreakpoints: Breakpoints = {}
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,'
  '2xl': 1536,

import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;

;

  return state}
export default useResponsive
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;

import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window && window.innerWidth; const height = window && window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window && window.addEventListener( 'resize',updateDimensions); return () => window && window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
const default_breakpoints: Breakpoints = {
const defaultBreakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
<<<<<<< HEAD
};
export default useResponsive;
    updateDimensions();
    window.addEventListener(;
  'resize', updateDimensions);
    return () => window.removeEventListener(;
  'resize', updateDimensions)}, []);
  return state};
export default useResponsive,
,
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
=======

import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} } const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: '1920',screenHeight: '1080',orientation: "landscape",isMobile: 'false',isTablet: 'false',isDesktop: 'true',}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: 'width',screenHeight: 'height',orientation: width > height ? "landscape" : "portrait",isMobile: 'width < 768',isTablet: 'width >= 768 && width < 1024',isDesktop: 'width >= 1024',})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
import { useState,useEffect } from 'react'; interface ResponsiveState { screenWidth: number; screenHeight: number; orientation: "landscape" | "portrait"; isMobile: boolean; isTablet: boolean; isDesktop: boolean} const useResponsive = (): ResponsiveState => { const [state,setState] = useState<ResponsiveState>({ screenWidth: 1920,screenHeight: 1080,orientation: "landscape",isMobile: false,isTablet: false,isDesktop: true,}); useEffect(() => { const updateDimensions = () => { const width = window.innerWidth; const height = window.innerHeight; setState({ screenWidth: width,screenHeight: height,orientation: width > height ? "landscape" : "portrait",isMobile: width < 768,isTablet: width >= 768 && width < 1024,isDesktop: width >= 1024,})}; updateDimensions(); window.addEventListener( 'resize',updateDimensions); return () => window.removeEventListener( 'resize',updateDimensions)},[]); return state}; export default useResponsive;
>>>>>>> origin/main
