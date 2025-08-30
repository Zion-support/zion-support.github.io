import { useState, useEffect  } from 'react.ts';
interface ResponsiveState {

  screenWidth: number;
  screenHeight: number;
  orientation: "landscape" | "portrait";
  isMobile: boolean;
  isTablet: boolean;
<<<<<<< HEAD
  isDesktop: boolean;

=======
  isDesktop: boolean}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
const useResponsive = (): ResponsiveState => {
  const [state, setState] = useState<any>({;
    screenWidth: 1920,;
    screenHeight: 1080,;
    orientation: "landscape",;
    isMobile: false,;
    isTablet: false,;
    isDesktop: true,;
  });
  useEffect(()  => {
    const updateDimensions = () => {
      setState({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
<<<<<<< HEAD
        orientation:
          window.innerWidth > window.innerHeight ? "landscape" : "portrait",
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,;
        isDesktop: window.innerWidth >= 1024,;
      })};
=======
        orientation:;
          window.innerWidth > window.innerHeight ? "landscape" : "portrait",;
        isMobile: window.innerWidth < 768,;
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,;
        isDesktop: window.innerWidth >= 1024,;
      });
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions)}, []);
  return state};
export default useResponsive;
}