import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Tooltip.css';
const Tooltip = ({ content, children, position = 'top', delay = 300, disabled = false, className = '', trigger = 'hover', }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
        freezeOnceVisible: true,
    });
    const timeoutRef = useRef();
    const tooltipRef = useRef(null);
    const showTooltip = () => {
        if (disabled || !isIntersecting)
            return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true);
        }, delay);
    };
    const hideTooltip = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setIsVisible(false);
    };
    const handleClick = () => {
        if (trigger === 'click') {
            setIsVisible(!isVisible);
        }
    };
    const handleKeyDown = (event) => {
        if (trigger === 'focus' && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            setIsVisible(!isVisible);
        }
    };
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    const eventHandlers = {
        onMouseEnter: trigger === 'hover' ? showTooltip : undefined,
        onMouseLeave: trigger === 'hover' ? hideTooltip : undefined,
        onClick: trigger === 'click' ? handleClick : undefined,
        onFocus: trigger === 'focus' ? showTooltip : undefined,
        onBlur: trigger === 'focus' ? hideTooltip : undefined,
        onKeyDown: trigger === 'focus' ? handleKeyDown : undefined,
    };
    return (_jsxs("div", Object.assign({ ref: ref, className: `tooltip-container ${className}` }, eventHandlers, { children: [children, isVisible && (_jsxs("div", { ref: tooltipRef, className: `tooltip tooltip--${position}`, role: 'tooltip', "aria-hidden": 'false', children: [_jsx("div", { className: 'tooltip__content', children: content }), _jsx("div", { className: `tooltip__arrow tooltip__arrow--${position}` })] }))] })));
};
export default Tooltip;
