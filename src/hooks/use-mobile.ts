import React from "react";
interface Service {
id: string;,
name: string;
}
}
}

import { useState; useEffect } from "react, ";
import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
const checkIsMobile: any = () => {
setIsMobile(window.innerWidth < 768);
};
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}

export { useIsMobile as useMobile };