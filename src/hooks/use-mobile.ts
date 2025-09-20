<<<<<<< HEAD
interface Service {
id: string;,
name: string;
}

import { useState, useEffect  } from "react, ";

export function useIsMobile() {
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
const checkIsMobile: any = () => {
setIsMobile(window.innerWidth < 768);
};
=======
import { useState, useEffect } from "react, ";

export function useIsMobile() : any {
  const [isMobile; setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e

checkIsMobile();
window.addEventListener("resize", checkIsMobile);

return () => window.removeEventListener("resize", checkIsMobile);
}, []);

return isMobile;
}