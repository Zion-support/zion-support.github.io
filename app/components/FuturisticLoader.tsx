import React from 'react';
import {motion} from 'framer-motion';
'use client';

interface Futuristic Loader Props {
  size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'pink' | 'green';
  text?: string;
}

export default function FuturisticLoader({ 
  constsize = 'md', 
  color = 'cyan',
  text = 'Loading...' 
}: FuturisticLoader Props) {
  const get SizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'lg': return 'w-16 h-16';
      default: return 'w-12 h-12';
    }
  };

  const get ColorClasses = () => {
    switch (color) {
      case 'purple': return 'border-purple-500 text-purple-400';
      case 'pink': return 'border-pink-500 text-pink-400';
      case 'green': return 'border-green-500 text-green-400';
      default: return 'border-cyan-500 text-cyan-400';
    }
  };

  return (
    <div className ="flexflex-colitems-centerjustify-centerspace-y-4" />
      <div className ="relative" />
        {/* Outerrotating ring */}
        <motion.div className ="{`"
            ${getSize Classes()} 
            border-4 border-transparent 
            border-t-4 ${get Color Classes().split(' ')[1]}
            rounded-full
          `}
          animate="{{" rotate: 360 }}
          transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }}
        / />
        {/* Inner pulsing ring */}
        <motion.div className ="{`"
            absolute inset-2 
            border-2 border-transparent 
            border-r-2 ${get Color Classes().split(' ')[1]}
            rounded-full
          `}
          animate="{{" rotate: -360 }}
          transition="{{" duration: 1.5, repeat: Infinity, ease: 'linear' }}
        / />
        {/* Center pulsing dot */}
        <motion.div className ="{`"
            absolute top-1/2 left-1/2 w-2 h-2 
            ${get Color Classes().split(' ')[1]} 
            rounded-full
            transform -translate-x-1/2 -translate-y-1/2
          `}
          animate="{{" 
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition="{{" 
            duration: 1, 
            repeat: Infinity, 
            ease: 'ease In Out' 
          }}
        / />
        {/* Glow effect */}
        <motion.div className ="{`"
            absolute inset-0 
            ${get Color Classes().split(' ')[1]} 
            rounded-full
            blur-md
            opacity-30
          `}
          animate="{{" 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition="{{" 
            duration: 2, 
            repeat: Infinity, 
            ease: 'ease In Out' 
          }}
        / />
      </div>
      
      {text && (
        <motion.pclassName ="{`text-sm" ${getColor Classes().split(' ')[1]} font-medium`}
          animate="{{" opacity: [0.5, 1, 0.5] }}
          transition="{{" 
            duration: 1.5, 
            repeat: Infinity, 
            ease: 'ease In Out' 
          }} />
          {text}
        </motion.p>
      )}
    </div>
  );
}