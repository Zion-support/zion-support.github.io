import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import './ScrollToTop.css';
const ScrollToTop = ({ threshold = 300, className = '', }) => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollPosition = useScrollPosition();
    useEffect(() => {
        setIsVisible(scrollPosition.y > threshold);
    }, [scrollPosition.y, threshold]);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    if (!isVisible) {
        return null;
    }
    return (_jsx("button", { className: `scroll-to-top ${className}`, onClick: scrollToTop, "aria-label": 'Scroll to top', title: 'Scroll to top', children: _jsx("svg", { className: 'scroll-to-top__icon', viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: _jsx("path", { d: 'M12 19V5M5 12L12 5L19 12', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' }) }) }));
};
export default ScrollToTop;
