<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
interface Service {
id: string;
name: string;
}
}
}

import { useState; useEffect } from "react, ";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

<<<<<<< HEAD
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
=======
useEffect(() => {
const checkIsMobile: any = () => {
setIsMobile(window.innerWidth < 768);
};
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}

export function useMobile() {
  return useIsMobile();
}