import import { useEffect } from 'react, ';
import import { useLocation } from 'react-router-dom, ';
export function useScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
}
