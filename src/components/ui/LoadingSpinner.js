import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function PageLoader({ text = "Loading...", className = "" }) {
    return (_jsx("div", { className: `min-h-screen flex items-center justify-center ${className}`, children: _jsxs("div", { className: "text-center", children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" }, className: "w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full mx-auto mb-4" }), _jsx(motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, repeat: Infinity, repeatType: "reverse" }, className: "text-zion-cyan text-lg font-medium", children: text })] }) }));
}
export function LoadingSpinner({ className = "" }) {
    return (_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 1, repeat: Infinity, ease: "linear" }, className: `w-6 h-6 border-2 border-zion-cyan border-t-transparent rounded-full ${className}` }));
}
export function LoadingDots({ className = "" }) {
    return (_jsx("div", { className: `flex space-x-1 ${className}`, children: [0, 1, 2].map((i) => (_jsx(motion.div, { animate: { scale: [1, 1.2, 1] }, transition: { duration: 0.6, repeat: Infinity, delay: i * 0.2 }, className: "w-2 h-2 bg-zion-cyan rounded-full" }, i))) }));
}
export function LoadingBar({ className = "" }) {
    return (_jsx("div", { className: `w-full bg-zion-blue-dark rounded-full h-2 ${className}`, children: _jsx(motion.div, { className: "bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full", initial: { width: "0%" }, animate: { width: "100%" }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }) }));
}
export function LoadingPulse({ className = "" }) {
    return (_jsx(motion.div, { animate: { scale: [1, 1.1, 1] }, transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }, className: `w-8 h-8 bg-zion-cyan rounded-full ${className}` }));
}
