import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'cyan' | 'white' | 'blue';
  text?: string;
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const colorClasses = {
  cyan: 'border-cyan-400',
  white: 'border-white',
  blue: 'border-blue-400'
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'blue',
  text,
  showText = false,
  className = "" 
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
      {showText && text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
    </div>
  );
};

export const InlineSpinner: React.FC<{ size?: 'sm' | 'md'; className?: string }> = ({ 
  size = 'sm', 
  className = "" 
}) => (
  <div className={`inline-flex items-center ${className}`} role="status">
    <motion.div
      className={`${size === 'sm' ? 'w-4 h-4' : 'w-6 h-6'} border-2 border-t-transparent border-cyan-400 rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
    <span className="sr-only">Loading</span>
  </div>
);

export const FullScreenLoader: React.FC<{ 
  text?: string; 
  showLogo?: boolean; 
  className?: string; 
}> = ({ 
  text = 'Loading amazing experiences...', 
  showLogo = true, 
  className = "" 
}) => (
  <div className={`fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center z-50 ${className}`}>
    <div className="relative text-center">
      {showLogo && (
        <div className="mb-6">
          <div className="w-24 h-24 border-4 border-cyan-400/20 rounded-full mx-auto mb-4"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-cyan-400 font-bold text-xl">
            ZION
          </div>
        </div>
      )}
      <LoadingSpinner size="lg" color="cyan" text={text} />
    </div>
  </div>
);

export const SkeletonLoader: React.FC<{ 
  className?: string; 
  lines?: number; 
}> = ({ 
  className = "", 
  lines = 3 
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div 
        key={index} 
        className="h-4 bg-gray-200 rounded mb-2" 
        style={{ width: `${Math.random() * 40 + 60}%` }} 
      />
    ))}
  </div>
);

export default LoadingSpinner;