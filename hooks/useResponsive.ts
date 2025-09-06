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
  sm: 640
  md: 768
  lg: 1024
  xl: 1280
  '2xl': 1536
}
export default useResponsive;

const defaultBreakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};
export default useResponsive;
    updateDimensions();
    window.addEventListener(;
  'resize', updateDimensions);
    return () => window.removeEventListener(;
  'resize', updateDimensions)}, []);
  return state};
export default useResponsive,
;
,
