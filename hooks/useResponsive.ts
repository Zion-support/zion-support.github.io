
interface ResponsiveState {/* content */}
  screenWidth: number;
  screenHeight: number;
  orientation: 'landscape' | 'portrait';';
  isMobile: boolean}





  useEffect(() => {/* content */}
    const updateDimensions = () => {/* content */}
      const width = window.innerWidth})};

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions)}, []);

  return state};

export default useResponsive;
'

