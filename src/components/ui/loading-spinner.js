import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export function LoadingSpinner({ size = 'md', className, text, variant = 'default' }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };
    const textSizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg'
    };
    if (variant === 'pulse') {
        return (_jsxs("div", { className: cn("flex flex-col items-center justify-center", className), children: [_jsx("div", { className: cn("rounded-full bg-zion-purple animate-pulse", sizeClasses[size]) }), text && (_jsx("p", { className: cn("mt-2 text-zion-slate-light text-center", textSizeClasses[size]), children: text }))] }));
    }
    if (variant === 'dots') {
        return (_jsxs("div", { className: cn("flex flex-col items-center justify-center", className), children: [_jsx("div", { className: "flex space-x-1", children: [0, 1, 2].map((i) => (_jsx(motion.div, { className: "w-2 h-2 bg-zion-cyan rounded-full", animate: {
                            y: [0, -10, 0],
                            opacity: [0.5, 1, 0.5]
                        }, transition: {
                            duration: 1.4,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut"
                        } }, i))) }), text && (_jsx("p", { className: cn("mt-3 text-zion-slate-light text-center", textSizeClasses[size]), children: text }))] }));
    }
    return (_jsxs("div", { className: cn("flex flex-col items-center justify-center", className), children: [_jsx(motion.div, { className: cn("border-2 border-zion-blue-light border-t-zion-purple rounded-full", sizeClasses[size]), animate: { rotate: 360 }, transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                } }), text && (_jsx(motion.p, { className: cn("mt-3 text-zion-slate-light text-center", textSizeClasses[size]), initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5, duration: 0.5 }, children: text }))] }));
}
export function PageLoader() {
    return (_jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: _jsx("div", { className: "text-center", children: _jsx(LoadingSpinner, { size: "xl", text: "Loading amazing content..." }) }) }));
}
export function SectionLoader() {
    return (_jsx("div", { className: "py-20 flex items-center justify-center", children: _jsx(LoadingSpinner, { size: "lg", text: "Loading section..." }) }));
}
export function CardLoader() {
    return (_jsx("div", { className: "p-8 flex items-center justify-center", children: _jsx(LoadingSpinner, { size: "md", text: "Loading..." }) }));
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export function LoadingSpinner({ size = 'md', variant = 'default', className = '', text }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12'
    };
    const variantClasses = {
        default: 'text-zion-cyan',
        primary: 'text-zion-blue',
        secondary: 'text-zion-purple',
        white: 'text-white'
    };
    return (<div className={cn("flex flex-col items-center gap-3", className)}>
      <motion.div className={cn('animate-spin rounded-full border-2 border-current border-t-transparent', sizeClasses[size], variantClasses[variant])} role="status" aria-label="Loading">
        <span className="sr-only">Loading...</span>
      </motion.div>
      
      {text && (<motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-zion-slate-light font-medium text-sm">
          {text}
        </motion.p>)}
    </div>);
}
// Page loading component
export function PageLoader() {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      <div className="text-center text-white">
        <LoadingSpinner size="xl" variant="white" className="mx-auto mb-4"/>
        <h1 className="text-2xl font-bold">Loading Zion Tech Group...</h1>
        <p className="mt-2 text-blue-200">Please wait while we prepare your experience.</p>
      </div>
    </div>);
}
// Inline loading component
export function InlineLoader({ size = 'sm', variant = 'default' }) {
    return (<div className="inline-flex items-center">
      <LoadingSpinner size={size} variant={variant} className="mr-2"/>
      <span className="text-sm text-gray-600">Loading...</span>
    </div>);
=======
}
