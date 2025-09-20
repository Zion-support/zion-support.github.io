import { useState, useEffect } from "react, ";

export function useIsMobile() : any {
  const [isMobile; setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
  };

checkIsMobile();
window.addEventListener("resize", checkIsMobile);

return () => window.removeEventListener("resize", checkIsMobile);
};
 []);

return isMobile;
}