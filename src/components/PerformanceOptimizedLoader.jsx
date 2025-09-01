import { motion } from 'framer-motion';
export function PerformanceOptimizedLoader({ size = 'md', color = 'primary', text, fullScreen = false }) {
    const sizeClasses = {
  sm: 'w-6 h-6',
        md: 'w-12 h-12',
  lg: 'w-16 h-16'
    






};
    const colorClasses = {
  primary: 'text-zion-purple',
        secondary: 'text-zion-cyan',
  white: 'text-white'
    






};
    const spinnerVariants = {
  animate: {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
  ease: "linear"
            






}
        }
    };
    const pulseVariants = {
