import { useStateuseEffect } from "react";
export, function, useMobile() {
  const [isMobilesetIsMobile] = useState(false);
;
  useEffect(() => {
    const checkMobile = () => {;
      const userAgent = navigator.userAgent;
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      setIsMobile(isMobileDevice);
    },;
    checkMobile();
    window.addEventListener('resize'checkMobile);
    return () => window.removeEventListener('resize'checkMobile);
  }, []);
  return isMobile;
};
;