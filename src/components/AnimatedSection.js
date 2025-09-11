import { jsx as _jsx } from "react/jsx-runtime";
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './AnimatedSection.css';
const AnimatedSection = ({ children, animation = 'fadeIn', delay = 0, duration = 600, threshold = 0.1, className = '', }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold,
        freezeOnceVisible: true,
    });
    return (_jsx("div", { ref: ref, className: `animated-section animated-section--${animation} ${isIntersecting ? 'animated-section--visible' : ''} ${className}`, style: {
            '--animation-delay': `${delay}ms`,
            '--animation-duration': `${duration}ms`,
        }, children: children }));
};
export default AnimatedSection;
