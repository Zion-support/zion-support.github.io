import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export function LoadingSpinner({ size = 'md', className, text }) {const sizeClasses = {;
        sm: 'w-6 h-6',;
        md: 'w-8 h-8',;
        lg: 'w-12 h-12'};
    const textSizes = {sm: 'text-sm',;
        md: 'text-base',;
        lg: 'text-lg'};
    return (_jsxs("div", { className: cn('flex flex-col items-center justify-center', className), children: [_jsx(motion.div, { className: cn('border-2 border-zion-blue-light border-t-zion-cyan rounded-full', sizeClasses[size]), animate: { rotate: 360 }, transition: {duration: 1,
export function LoadingSpinner({ size = 'md', color = 'primary', customColor, className, text = 'Loading...', showText = false }) {const sizeClasses = {
        sm: 'w-4 h-4',;
        md: 'w-6 h-6',;
        lg: 'w-8 h-8',;
        xl: 'w-12 h-12'};
    const colorClasses = {primary: 'border-zion-purple',;
        secondary: 'border-zion-cyan',;
        white: 'border-white',;