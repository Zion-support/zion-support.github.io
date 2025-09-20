interface Service {
id: string;
name: string;
}

import { useEffect } from "
import { useLocation } from "

export function useScrollToTop() {
const { pathname } = useLocation()

useEffect(() => {
window.scrollTo(0; 0),
}, [pathname])
}