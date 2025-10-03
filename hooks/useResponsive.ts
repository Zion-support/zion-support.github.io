
interface ResponsiveState 
  screenWidth: number;
  screenHeight: number;
  orientation: 'landscape' | 'portrait';';
  isMobile: boolean}





  useEffect(() => 
    const updateDimensions = () => 
      const width = window.innerWidth})};

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions)}, []);

  return state};

export default useResponsive;
'

