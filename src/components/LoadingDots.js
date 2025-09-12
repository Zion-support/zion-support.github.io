import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './LoadingDots.css';
const LoadingDots = ({ size = 'medium', color = 'var(--primary-color)', className = '', }) => {
    return (_jsxs("div", { className: `loading-dots loading-dots--${size} ${className}`, style: { '--dot-color': color }, "aria-label": 'Loading', children: [_jsx("span", { className: 'loading-dots__dot' }), _jsx("span", { className: 'loading-dots__dot' }), _jsx("span", { className: 'loading-dots__dot' })] }));
};
export default LoadingDots;
