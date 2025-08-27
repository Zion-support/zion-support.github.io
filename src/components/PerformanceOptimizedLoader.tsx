import { motion } from 'framer-motion';
<<<<<<< HEAD

interface LoaderProps {
=======
interface LoadingSpinnerProps {
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  text?: string;
  fullScreen?: boolean;
}
<<<<<<< HEAD

export function PerformanceOptimizedLoader({ 
=======
export const PerformanceOptimizedLoader = memo<LoadingSpinnerProps>(({ 
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
  size = 'md', 
  color = 'primary', 
  text,
  fullScreen = false 
}: LoaderProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
<<<<<<< HEAD

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
        ease: "linear" as const
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const LoaderContent = () => (
    <div className="flex flex-col items-center justify-center space-y-4">
      <motion.div
        variants={spinnerVariants}
        animate="animate"
        className={`${sizeClasses[size]} ${colorClasses[color]}`}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="31.416"
            strokeDashoffset="31.416"
            className="animate-dash"
          />
        </svg>
      </motion.div>
      
      {text && (
        <motion.p
          variants={pulseVariants}
          animate="animate"
          className="text-zion-slate-light text-center font-medium"
        >
          {text}
        </motion.p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-zion-blue-dark/95 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <LoaderContent />
      </motion.div>
    );
  }

  return <LoaderContent />;
}

=======
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-zion-cyan/20 rounded-full`}></div>
        
        {/* Spinning ring */}
        <motion.div
          className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-zion-cyan border-t-transparent rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Logo text */}
        {showLogo && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-lg">
            ZION
          </div>
        )}
        
        {/* Loading text */}
        <div className="mt-4 text-center">
          <motion.div 
            className={`text-zion-cyan ${textSizes[size]} animate-pulse`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.div>
        </div>
      </div>
    </div>
  );
});
PerformanceOptimizedLoader.displayName = 'PerformanceOptimizedLoader';
>>>>>>> b146bf389fafde756de41032cd8eb59c97440d83
// Skeleton loader for content
export function SkeletonLoader({ 
  className = "", 
  lines = 3,
  height = "h-4"
}: { 
  className?: string; 
  lines?: number;
  height?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className={`${height} bg-zion-blue-light/20 rounded-lg animate-pulse`}
          style={{
            width: `${Math.random() * 40 + 60}%`
          }}
        />
      ))}
    </div>
  );
}
// Card skeleton loader
export function CardSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-zion-blue-dark/50 border border-zion-purple/20 rounded-2xl p-6 ${className}`}>
      <div className="space-y-4">
        {/* Image skeleton */}
        <div className="w-full h-48 bg-zion-blue-light/20 rounded-xl animate-pulse" />
        
        {/* Content skeleton */}
        <div className="space-y-3">
          <div className="h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-3/4" />
          <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-full" />
          <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3" />
        </div>
        
        {/* Button skeleton */}
        <div className="flex gap-3 pt-4">
          <div className="h-10 bg-zion-blue-light/20 rounded-xl animate-pulse flex-1" />
          <div className="h-10 bg-zion-blue-light/20 rounded-xl animate-pulse w-24" />
        </div>
      </div>
    </div>
  );
}
// Grid skeleton loader
export function GridSkeleton({ 
  columns = 3, 
  rows = 2,
  className = "" 
}: { 
  columns?: number; 
  rows?: number;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 ${className}`}>
      {Array.from({ length: columns * rows }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}
// Page skeleton loader
export function PageSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header skeleton */}
      <div className="space-y-4">
        <div className="h-12 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3" />
        <div className="h-6 bg-zion-blue-light/20 rounded-lg animate-pulse w-2/3" />
      </div>
      
      {/* Content skeleton */}
      <GridSkeleton columns={3} rows={2} />
      
      {/* Footer skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/2" />
        <div className="h-4 bg-zion-blue-light/20 rounded-lg animate-pulse w-1/3" />
      </div>
    </div>
  );
}