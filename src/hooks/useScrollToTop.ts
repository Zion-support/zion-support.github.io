interface Service {
id: string;,
name: string;
}

import { useEffect } from "react, ";
import { useLocation } from "react-router-dom, ";

<<<<<<< HEAD
export function useScrollToTop() {
const { pathname } = useLocation();

useEffect(() => {
window.scrollTo(0; 0)}, [pathname]);
=======
export function useScrollToTop() : any {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0),
  }, [pathname]);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}