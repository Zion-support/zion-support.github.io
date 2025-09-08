<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
};
const colorClasses = {
    primary: 'text-zion-purple',
    secondary: 'text-zion-cyan',
    white: 'text-white',
    custom: '',
};
export function LoadingSpinner({ size = 'md', variant = 'default', color = 'primary', customColor, className, text, showText = false, }) {
    const sizeClass = sizeClasses[size];
    const colorClass = color === 'custom' ? '' : colorClasses[color];
    const finalColor = customColor || colorClass;
    const renderSpinner = () => {
        switch (variant) {
            case 'pulse':
                return (_jsx(motion.div, { className: cn('rounded-full bg-current', sizeClass, finalColor, className), animate: {
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.5, 1],
                    }, transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    } }));
            case 'dots':
                return (_jsx("div", { className: cn('flex space-x-1', className), children: [0, 1, 2].map((i) => (_jsx(motion.div, { className: cn('rounded-full bg-current', sizeClass, finalColor), animate: {
                            y: [0, -10, 0],
                            opacity: [0.3, 1, 0.3],
                        }, transition: {
                            duration: 1.4,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                        } }, i))) }));
            case 'bars':
                return (_jsx("div", { className: cn('flex space-x-1', className), children: [0, 1, 2, 3].map((i) => (_jsx(motion.div, { className: cn('bg-current rounded-sm', finalColor), style: {
                            width: size === 'sm' ? '2px' : size === 'md' ? '3px' : size === 'lg' ? '4px' : '6px',
                            height: size === 'sm' ? '12px' : size === 'md' ? '16px' : size === 'lg' ? '20px' : '24px',
                        }, animate: {
                            scaleY: [1, 2, 1],
                            opacity: [0.3, 1, 0.3],
                        }, transition: {
                            duration: 1.2,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut",
                        } }, i))) }));
            case 'ripple':
                return (_jsxs("div", { className: cn('relative', sizeClass, className), children: [_jsx(motion.div, { className: cn('absolute inset-0 rounded-full border-2 border-current', finalColor), animate: {
                                scale: [1, 1.5, 1],
                                opacity: [1, 0, 1],
                            }, transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            } }), _jsx(motion.div, { className: cn('absolute inset-0 rounded-full border-2 border-current', finalColor), animate: {
                                scale: [1, 1.8, 1],
                                opacity: [0.5, 0, 0.5],
                            }, transition: {
                                duration: 1.5,
                                repeat: Infinity,
                                delay: 0.5,
                                ease: "easeInOut",
                            } })] }));
            default:
                return (_jsx(motion.div, { className: cn('border-2 border-current border-t-transparent rounded-full', sizeClass, finalColor, className), animate: {
                        rotate: 360,
                    }, transition: {
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    } }));
        }
    };
    return (_jsxs("div", { className: "flex flex-col items-center justify-center space-y-3", children: [renderSpinner(), showText && text && (_jsx(motion.p, { className: "text-sm text-zion-slate-light text-center", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3, duration: 0.5 }, children: text }))] }));
}
// Specialized loading components for common use cases
export function PageLoader({ text = "Loading page..." }) {
    return (_jsx("div", { className: "min-h-screen bg-zion-blue-dark flex items-center justify-center", children: _jsx(LoadingSpinner, { size: "xl", variant: "ripple", color: "primary", text: text, showText: true }) }));
}
export function CardLoader({ text = "Loading..." }) {
    return (_jsx("div", { className: "flex items-center justify-center p-8", children: _jsx(LoadingSpinner, { size: "lg", variant: "pulse", color: "secondary", text: text, showText: true }) }));
}
export function ButtonLoader({ size = 'sm' }) {
    return (_jsx(LoadingSpinner, { size: size, variant: "default", color: "white", className: "inline-block" }));
}
export function InlineLoader({ size = 'sm' }) {
    return (_jsx(LoadingSpinner, { size: size, variant: "dots", color: "primary", className: "inline-block" }));
}
=======
import React from 'react';
const LoadingSpinner = ({ size = 'md', color = 'blue', text, className = '' }) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };
    const colorClasses = {
        blue: 'text-blue-500',
        white: 'text-white',
        gray: 'text-gray-500'
    };
    return (<div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} ${colorClasses[color]} animate-spin`}>
        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
      </div>
      {text && (<p className="mt-3 text-sm text-gray-500 animate-pulse">{text}</p>)}
    </div>);
};
export default LoadingSpinner;
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
