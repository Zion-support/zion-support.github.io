import { useState, useEffect } from 'react';

interface ResponsiveState {

export const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    width: 0,
    height: 0,
  });
    updateDimensions(),;
    window && window.addEventListener(;
  'resize', updateDimensions),;
    return () => window && window.removeEventListener(;
  'resize', updateDimensions)}, []),;
  return state},;
export default useResponsive,;import { useState, useEffect } from 'react';