import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'cyan';
  text?: string;
  showText?: boolean;
  className?: string;
  {/* Removed stray closing brace */}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-32 h-32'
};

const colorClasses = {
  primary: 'border-cyan-400',
  secondary: 'border-blue-400',
  white: 'border-white',
  cyan: 'border-cyan-400'
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text = 'Loading...',
  showText = true,
  className = ''
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label="Loading">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full opacity-20`}></div>
        
        {/* Animated spinner */}
        <motion.div
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-t-transparent ${colorClasses[color]} rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Center dot for larger sizes */}
        {size === 'xl' && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>);
}
// Inline loading component
export function InlineLoader({ size = 'sm', variant = 'default' }) {
    return (<div className="inline-flex items-center">
      <LoadingSpinner size={size} variant={variant} className="mr-2"/>
      <span className="text-sm text-gray-600">Loading...</span>
    </div>);
}
