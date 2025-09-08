<<<<<<< HEAD
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export function LoadingSpinner({ size = 'md', className, text }) {
    const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };
    const textSizes = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
    };
    return (_jsxs("div", { className: cn('flex flex-col items-center justify-center', className), children: [_jsx(motion.div, { className: cn('border-2 border-zion-blue-light border-t-zion-cyan rounded-full', sizeClasses[size]), animate: { rotate: 360 }, transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: 'linear'
                } }), text && (_jsx(motion.p, { className: cn('mt-3 text-zion-slate-light', textSizes[size]), initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3 }, children: text }))] }));
}
export function LoadingDots({ className }) {
    return (_jsx("div", { className: cn('flex space-x-2', className), children: [0, 1, 2].map((index) => (_jsx(motion.div, { className: "w-2 h-2 bg-zion-cyan rounded-full", animate: {
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
            }, transition: {
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
            } }, index))) }));
}
export function LoadingPulse({ className }) {
    return (_jsx(motion.div, { className: cn('w-4 h-4 bg-zion-purple rounded-full', className), animate: {
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
        }, transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
        } }));
=======
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
export function LoadingSpinner({ size = 'md', color = 'primary', customColor, className, text = 'Loading...', showText = false }) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12'
    };
    const colorClasses = {
        primary: 'border-zion-purple',
        secondary: 'border-zion-cyan',
        white: 'border-white',
        custom: ''
    };
    const borderColor = customColor || colorClasses[color];
    return (<div className={cn('flex flex-col items-center justify-center', className)}>
      <motion.div className={cn('border-2 border-t-transparent rounded-full animate-spin', sizeClasses[size], borderColor)} animate={{ rotate: 360 }} transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
        }} role="status" aria-label="Loading"/>
      
      {showText && (<motion.p className="mt-3 text-sm text-zion-slate-light text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          {text}
        </motion.p>)}
    </div>);
}
// Skeleton loading component for content
export function SkeletonLoader({ className, lines = 3, height = 'h-4' }) {
    return (<div className={cn('space-y-3', className)}>
      {Array.from({ length: lines }).map((_, index) => (<motion.div key={index} className={cn('bg-zion-slate-light/20 rounded animate-pulse', height)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }}/>))}
    </div>);
}
// Page loading component
export function PageLoader({ text = 'Loading page...', className }) {
    return (<div className={cn('min-h-screen flex items-center justify-center', className)}>
      <div className="text-center">
        <LoadingSpinner size="xl" color="primary" showText text={text}/>
      </div>
    </div>);
}
// Button loading state
export function ButtonLoader({ size = 'sm', className }) {
    return (<div className={cn('inline-flex items-center', className)}>
      <LoadingSpinner size={size} color="white"/>
      <span className="ml-2">Loading...</span>
    </div>);
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
}
