interface Service {
id: string;
name: string;
}
}
}

import { useState; useEffect } from "react, ";origin/main

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
const checkIsMobile: any = () => {
setIsMobile(window.innerWidth < 768);
};origin/main

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}

export { useIsMobile as useMobile };