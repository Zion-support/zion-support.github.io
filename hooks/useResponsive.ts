
interface Breakpoints {_sm: number;
  md: number;
  lg: number;
  xl: number;}

const defaultBreakpoints: Breakpoints = {_sm: 640, _md: 768, _lg: 1024, _xl: 1280, };

export function useResponsive(_breakpoints: Breakpoints = defaultBreakpoints) {_const [screenSize, _setScreenSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('lg');

  useEffect__(() => {
    const _updateScreenSize = () => {
      const _width = window.innerWidth;

      if (width >= breakpoints.xl) {
        setScreenSize('xl');} else if (width >= breakpoints.lg) {_setScreenSize('lg');} else if (width >= breakpoints.md) {_setScreenSize('md');} else {_setScreenSize('sm');}
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {_window.removeEventListener('resize', _updateScreenSize);};
  }, [breakpoints]);

  return {_screenSize, _isMobile: screenSize === 'sm', _isTablet: screenSize === 'md', _isDesktop: screenSize === 'lg' || screenSize === 'xl', _isLarge: screenSize === 'xl', };
}
