import React from 'react';
import {motion    } from 'framer-motion';
interfaceFuturisticLoaderProps {size?: 'sm' | 'md' | 'lg';
  color?: 'cyan' | 'purple' | 'pink' | 'green';
  text?: string;
}
;
exportdefaultfunctionFuturisticLoader({constsize = 'md',;
  color = 'cyan',;
  text = 'Loading...';
}: FuturisticLoaderProps) {constgetSizeClasses = () => {
    switch (size) {
      case 'sm': return 'w-8 h-8';
      case 'lg': return 'w-16 h-16';
      default: return 'w-12 h-12';
    }
  };
;
  constgetColorClasses = () => {switch (color) {
      case 'purple': return 'border-purple-500 text-purple-400';
      case 'pink': return 'border-pink-500 text-pink-400';
      case 'green': return 'border-green-500 text-green-400';
      default: return 'border-cyan-500 text-cyan-400';
    }
  };
;
  return (;
    <divclassName="f l exflex-colitems-centerjustify-centerspace-y-4">;
      <divclassName="r e lative">;
        {/* Outerrotatingring */}
        <motion.divclassName="{`";
            ${getSizeClasses()} ;
            border-4 border-transparentborder-t-4 ${getColorClasses().split(' ')[1]}
            rounded-full;
          `}
          animate="{{" rotate: 360 }}
          transition="{{" duration: 1, repeat: Infinity, ease: 'linear' }}
        / />;
        {/* Innerpulsingring */}
        <motion.divclassName="{`";
            absoluteinset-2;
            border-2 border-transparentborder-r-2 ${getColorClasses().split(' ')[1]}
            rounded-full;
          `}
          animate="{{" rotate: -360 }}
          transition="{{" duration: 1.5, repeat: Infinity, ease: 'linear' }}
        / />;
        {/* Centerpulsingdot */}
        <motion.divclassName="{`";
            absolutetop-1/2 left-1/2 w-2 h-2;
            ${getColorClasses().split(' ')[1]} ;
            rounded-fulltransform -translate-x-1/2 -translate-y-1/2;
          `}
          animate="{{";
            scale: [1, 1.5, 1],;
            opacity: [0.5, 1, 0.5];
          }}
          transition="{{";
            duration: 1,;
            repeat: Infinity,;
            ease: 'easeInOut';
          }}
        / />;
        {/* Gloweffect */}
        <motion.divclassName="{`";
            absoluteinset-0;
            ${getColorClasses().split(' ')[1]} ;
            rounded-fullblur-mdopacity-30;
          `}
          animate="{{";
            scale: [1, 1.2, 1],;
            opacity: [0.3, 0.6, 0.3];
          }}
          transition="{{";
            duration: 2,;
            repeat: Infinity,;
            ease: 'easeInOut';
          }}
        / />;
      </div>;
      {text && (;
        <motion.pclassName="{`t e xt-sm" ${getColorClasses().split(' ')[1]} font-medium`}
          animate="{{" opacity: [0.5, 1, 0.5] }}
          transition="{{";
            duration: 1.5,;
            repeat: Infinity,;
            ease: 'easeInOut';
          }} />;
          {text}
        </motion.p>;
      )}
    </div>;
  );
}
    </>;
