import React from 'react';
import { motion } from 'framer-motion';
'use client';

interface FuturisticLoaderPro p s {
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'pink' | 'green';
  text?: string;
}

export default function FuturisticLoad e r({)
  constsize= 'md', 
  color = 'cyan',
  text = 'Loading...';
}: FuturisticLoaderPro p s) {
  const getSizeClasses= () => {
    switch (size) {
      case 'sm': return 'w-8h-8';
      case 'lg': return 'w-16h-16';
      default: return 'w-12h-12';
    }
  };

  const getColorClasses= () => {
    switch (color) {
      case 'purple': return 'border-purple-500text-purple-400';
      case 'pink': return 'border-pink-500text-pink-400';
      case 'green': return 'border-green-500text-green-400';
      default: return 'border-cyan-500text-cyan-400';
    }
  };

return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Outer rotating ring */}
        <motion.div;
          className="{`"
            ${getSizeClass e s()} 
            border-4border-transparen t;
            border-t-4 ${getColorClass e s().split(' ')[1]}
            rounded-full;
          `}
          animate="{{" rotate: 360 ,}}
          transition="{{" duration: 1, repeat: Infinity, ease: 'linear' ,}}
         />
        {/* Inner pulsing ring */}
        <motion.div;
          className="{`"
            absolute inset-2;
            border-2border-transparen t;
            border-r-2 ${getColorClass e s().split(' ')[1]}
            rounded-full;
          `}
          animate="{{" rotate: -360 ,}}
          transition="{{" duration: 1.5, repeat: Infinity, ease: 'linear' ,}}
         />
        {/* Center pulsing dot */}
        <motion.div;
          className="{`"
            absolute top-1/2 left-1/2 w-2h-2;
            ${getColorClass e s().split(' ')[1]} 
            rounded-full;
            transform -translate-x-1/2 -translate-y-1/2;
          `}
          animate="{{";
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition="{{";
            duration: 1, 
            repeat: Infinity, 
            ease: 'easeInOut';
          }}
         />
        {/* Glow effect */}
        <motion.div;
          className="{`"
            absolute inset-0;
            ${getColorClass e s().split(' ')[1]} 
            rounded-full;
            blur-md;
            opacity-30;
          `}
          animate="{{";
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition="{{";
            duration: 2, 
            repeat: Infinity, 
            ease: 'easeInOut';
          }}
         />
      </div>
      
      {text && ()
        <motion.p;
          className="{`text-sm" ${getColorClass e s().split(' ')[1]} font-medium`}
          animate="{{" opacity: [0.5, 1, 0.5] }}
          transition="{{";
            duration: 1.5, 
            repeat: Infinity, 
            ease: 'easeInOut';
          }} />
          {text}
        </motion.p>
      )}
    </div>
  );
}