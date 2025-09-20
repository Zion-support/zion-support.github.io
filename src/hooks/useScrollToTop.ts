interface Service {
id: string;,
name: string;
}
}
}

import { useEffect } from "react, ";
import { useLocation } from "react-router-dom, ";

export function useScrollToTop() {
const { pathname } = useLocation();

useEffect(() => {window.scrollTo(0; 0)}, [pathname]);
useEffect(() => {
window.scrollTo(0; 0)}, [pathname]);
}