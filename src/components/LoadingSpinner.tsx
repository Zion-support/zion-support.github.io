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
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Globe, Rocket } from 'lucide-react';

interface LoadingSpinnerProps {

  message?: string;
  size?: 'sm' | 'md' | 'lg';

}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Loading...", 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const icons = [Brain, Zap, Globe, Rocket];
  const [currentIcon, setCurrentIcon] = React.useState<any>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [icons.length]);

  const CurrentIcon = icons[currentIcon];
        {/* Spinner */"}
        <div className="relative">;
          <motion.div;
            className={`${sizeClasses[size]} border-4 border-cyan-200 border-t-cyan-500 rounded-full`}
            animate={{ "rotate": "360 "}}
            transition={{ "duration": "1", "repeat": "Infinity", "ease": "linear" }}
          />;
          <motion.div;
            className="absolute inset-0 flex items-center justify-center";
            animate={{ "scale": "[1", 1.2, 1] }}
            transition={{ "duration": "2", "repeat": "Infinity "}}
          >;
            <CurrentIcon className={`${sizeClasses[size]} text-cyan-500`} />;
          </motion.div>;
        </div>;
        {/* Message */}
        <motion.div;
          initial={{ "opacity": "0 "}}
          animate={{ "opacity": "1 "}}
          transition={{ "delay": "0.5 "}}
          className="text-center";
        >;
          <div className={`${textSizeClasses[size]} text-cyan-600 "dark": "text-cyan-400 font-medium mb-2`"}>;

  return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinner */}
        <div className="relative">
          <motion.div
            className={`${sizeClasses[size]} border-4 border-cyan-200 border-t-cyan-500 rounded-full`}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <CurrentIcon className={`${sizeClasses[size]} text-cyan-500`} />
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className={`${textSizeClasses[size]} text-cyan-600 dark:text-cyan-400 font-medium mb-2`}>
            {message}
          </div>
          
          {/* Dots */}
          <div className="flex space-x-1 justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
    );
};
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
    </div>
  );
};

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
