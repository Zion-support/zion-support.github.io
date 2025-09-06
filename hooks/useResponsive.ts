<<<<<<< HEAD
        "isDesktop": width >= 1024})};
=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
import { useState, useEffect } from 'react';

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
  height: number;
}

const useResponsive = (): ResponsiveState => {
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

<<<<<<< HEAD
export default useResponsive;
    updateDimensions();
    window.addEventListener(;
  'resize', updateDimensions);
    return () => window.removeEventListener(;
  'resize', updateDimensions)}, []);
  return state};
export default useResponsive;
;
=======
export default useResponsive;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
