<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';';';
import { motion } from 'framer-motion';';';
import { Brain, Zap, Globe, Rocket } from 'lucide-react';

interface LoadingSpinnerProps {
';
  message?: string;';';
  message?: "string;
  size?: 'sm' | 'md' | 'lg';
;
"}
;
const "LoadingSpinner": "React.FC<LoadingSpinnerProps> = ({;
  message = "Loading..."",;
  size = 'md';
}) => {;
  const sizeClasses = {;
    "sm": 'w-8 h-8',;
    "md": 'w-16 h-16',;
    "lg": 'w-24 h-24';
  };
;
  const textSizeClasses = {;
    "sm": 'text-sm',;
    "md": 'text-base',;
    "lg": 'text-lg';
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'white' | 'gray';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

const colorClasses = {
  primary: 'border-cyan-500',
  secondary: 'border-blue-500',
  white: 'border-white',
  gray: 'border-gray-400',
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  text,
  fullScreen = false,
  className = '',
}) => {
  const spinner = (
    <div className={`flex items-center justify-center ${fullScreen ? 'min-h-screen' : ''} ${className}`}>
      <div className="text-center">
        <div
          className={`animate-spin rounded-full border-2 border-t-transparent ${sizeClasses[size]} ${colorClasses[color]} mx-auto`}
          role="status"
          aria-label="Loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
        {text && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {text}
          </p>
        )}
      </div>
    </div>
  );

  return spinner;
};
<<<<<<< HEAD

// Skeleton loading components
export const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`}>
    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
  </div>
);

export const SkeletonText: React.FC<{ 
  lines?: number; 
  className?: string;
  width?: string;
}> = ({ 
  lines = 3, 
  className = '',
  width = 'w-full'
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div
        key={index}
        className={`h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2 ${
          index === lines - 1 ? 'w-3/4' : width
        }`}
      ></div>
    ))}
  </div>
);

export const SkeletonImage: React.FC<{ 
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
}> = ({ 
  className = '',
  aspectRatio = 'square'
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]',
  };

  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${aspectClasses[aspectRatio]} ${className}`}
    ></div>
  );
};

// Progress bar component
export const ProgressBar: React.FC<{
  progress: number;
  className?: string;
  showPercentage?: boolean;
  color?: 'primary' | 'success' | 'warning' | 'danger';
}> = ({
  progress,
  className = '',
  showPercentage = false,
  color = 'primary',
}) => {
  const colorClasses = {
    primary: 'bg-cyan-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500',
  };

  return (
    <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 ${className}`}>
      <div
        className={`h-2 rounded-full transition-all duration-300 ${colorClasses[color]}`}
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progress: ${progress}%`}
      >
        {showPercentage && (
          <span className="sr-only">{progress}% complete</span>
        )}
      </div>
      {showPercentage && (
        <span className="text-xs text-gray-600 dark:text-gray-400 mt-1 block">
          {Math.round(progress)}%
        </span>
      )}
=======
</motion>
</motion>
</motion>
</motion>
</motion>
</any>
</LoadingSpinnerProps>
</motion>
</motion>
</any>
</LoadingSpinnerProps>
export default LoadingSpinner;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</any>;
</LoadingSpinnerProps>;
</motion>;
</motion>;
</any>;
</LoadingSpinnerProps>;
export default LoadingSpinner;
const React from "react"; import { motion } from "framer-motion"; import { Brain,Zap,Globe,Rocket } from "lucide-react"; ; interface LoadingSpinnerProps {; message?: string; import React from "react"; import { motion } from "framer-motion"; import { Brain,Zap,Globe,Rocket } from "lucide-react"; interface LoadingSpinnerProps { message?: string;";"; size?: "sm" | "md" | "lg"} const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = "Loading.",size = "md" }) => { const sizeClasses = { sm: "w-8 h-8",md: "w-16 h-16",lg: "w-24 h-24" }; const textSizeClasses = { sm: "text-sm",md: "text-base",lg: "text-lg" }; ; const icons = [Brain,Zap,Globe,Rocket]; const [currentIcon,setCurrentIcon] = React.useState<any>(0); ; React.useEffect(() => {; const interval = setInterval(() => {; setCurrentIcon((prev) => (prev + 1) % icons.length)},1000); ; return () => clearInterval(interval)},[icons.length]); ; const CurrentIcon = icons[currentIcon]; return ( <div className="min-h-screen bg-white"> <div className="flex flex-col items-center space-y-6"> {} <div className="relative">; <motion.div; className={`${sizeClasses[size]} border-4 border-cyan-200 border-t-cyan-500 rounded-full`} animate={{ rotate: 360 }} transition={{ duration: 1,repeat: Infinity,ease: "linear" }} />; <motion.div; className="absolute inset-0 flex items-center justify-center"; animate={{ scale: [1,1.2,1] }} transition={{ duration: 2,repeat: Infinity }} >; <CurrentIcon className={`${sizeClasses[size]} text-cyan-500`} />; </motion.div>; </div>; {} <motion.div; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center"; >; <div className={`${textSizeClasses[size]} text-cyan-600 dark:text-cyan-400 font-medium mb-2`}>; {message} </div>; {} <div className="flex space-x-1 justify-center">; {[0,1,2].map((i) => (; <motion.div; key={i} className="w-2 h-2 bg-cyan-500 rounded-full"; animate={{ scale: [1,1.5,1] }} transition={{ duration: 1,repeat: Infinity,delay: i * 0.2 }} />; ))} </div>; </motion.div>; {} <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">; <motion.div; className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"; initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3,repeat: Infinity,ease: "easeInOut" }} />; </div>; </div>; </div>; )}; ; </motion>; </motion>; </motion>; </motion>; </motion>; </any>; </LoadingSpinnerProps>; </motion>; </motion>; </any>; </LoadingSpinnerProps>; export default LoadingSpinner; </motion> </motion> </any> </LoadingSpinnerProps> </motion> </any> </LoadingSpinnerProps> export default LoadingSpinner; ;";";'"`'"`
import { useEffect } from 'react';,
import { useState } from 'react';,
import _React from 'react'; import { motion } from 'framer-motion'; import { Brain,Zap,Globe,Rocket } from 'lucide-react'; ; interface LoadingSpinnerProps {; message?: string; import _React from 'react'; import { motion } from 'framer-motion'; import { Brain,Zap,Globe,Rocket } from 'lucide-react'; interface LoadingSpinnerProps { message?: string;';'; size?: 'sm' | 'md' | 'lg'} const LoadingSpinner: _React.FC<LoadingSpinnerProps> = ({ message = "Loading...",size = 'md' }) => { const sizeClasses = { sm: 'w-8 h-8,md: 'w-16 h-16,lg: 'w-24 h-24' };; const textSizeClasses = { sm: 'text-sm,md: 'text-base,lg: 'text-lg' };; ; const icons = [Brain,Zap,Globe,Rocket]; const [currentIcon,setCurrentIcon] = _React.useState<any>(0); ; _React.useEffect(() => {; const interval = setInterval(() => {; setCurrentIcon((prev) => (prev + 1) % icons.length)},1000); ; return () => clearInterval(interval)},[icons.length]); ; const CurrentIcon = icons[currentIcon]; return ( <div className="min-h-screen bg-white"> <div className="flex flex-col items-center space-y-6"> {} <div className="relative">; <motion.div; className={`${sizeClasses[size]} border-4 border-cyan-200 border-t-cyan-500 rounded-full`} animate={{ rotate: 360 }} transition={{ duration: 1,repeat: Infinity,ease: "linear" }} />; <motion.div; className="absolute inset-0 flex items-center justify-center"; animate={{ scale: [1,1.2,1] }} transition={{ duration: 2,repeat: Infinity }} >; <CurrentIcon className={`${sizeClasses[size]} text-cyan-500`} />; </motion.div>; </div>; {} <motion.div; initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-center"; >; <div className={`${textSizeClasses[size]} text-cyan-600 dark:text-cyan-400 font-medium mb-2`}>; {message} </div>; {} <div className="flex space-x-1 justify-center">; {[0,1,2].map((i) => (; <motion.div; key={i} className="w-2 h-2 bg-cyan-500 rounded-full"; animate={{ scale: [1,1.5,1] }} transition={{ duration: 1,repeat: Infinity,delay: i * 0.2 }} />; ))} </div>; </motion.div>; {} <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">; <motion.div; className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"; initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3,repeat: Infinity,ease: "easeInOut" }} />; </div>; </div>; </div>; )}; ; </motion>; </motion>; </motion>; </motion>; </motion>; </any>; </LoadingSpinnerProps>; </motion>; </motion>; </any>; </LoadingSpinnerProps>; export default LoadingSpinner; </motion> </motion> </any> </LoadingSpinnerProps> </motion> </any> </LoadingSpinnerProps> export default LoadingSpinner; ;';';
=======
import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'zion-cyan',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const strokeWidth = {
    sm: 2,
    md: 3,
    lg: 4
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 border-gray-200 rounded-full`}
        style={{ borderTopColor: `var(--${color})` }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
    </div>
  );
};

<<<<<<< HEAD
// Loading states for different components
export const LoadingStates = {
  Card: () => (
    <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <SkeletonCard className="h-20" />
      <SkeletonText lines={2} className="mt-4" />
    </div>
  ),
  
  List: () => (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <SkeletonImage className="w-12 h-12" />
          <div className="flex-1">
            <SkeletonText lines={2} width="w-3/4" />
          </div>
        </div>
      ))}
    </div>
  ),
  
  Table: () => (
    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <SkeletonText lines={1} width="w-1/4" />
      </div>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
          <SkeletonText lines={1} />
        </div>
      ))}
    </div>
  ),
};
=======
export const LoadingDots: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-zion-cyan rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2
          }}
        />
      ))}
    </div>
  );
};

export const LoadingPulse: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      className={`w-8 h-8 bg-zion-cyan rounded-full ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};
>>>>>>> origin/backup-improvements-20250827-015311
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
