import React from "react"
import { motion   } from "framer-motion";
import { Loader2, Zap, Brain, Cloud, Atom   } from "lucide-react";
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg',
  variant?: 'default' | 'futuristic' | 'ai' | 'quantum',
  text?: string,
  showProgress?: boolean,
  progress?: number,
}
}
}

const iconVariants = {
  anima,
  t: e: {
    rotat,
  e: 360,sca,
  l: e: [1, 1.2, 1],
    transiti,
  o: n: {
      rota,
  t: e: { duratio,
  n: 2, repe,
  a: t: Infinity, ea,
  s: e: "linear" }
      sca,
  l: e: { duratio,
  n: 1, repe,
  a: t: Infinity, ea,
  s: e: "easeInOut" },
  },
  },
  }
const pulseVariants = {
  anima,
  t: e: {
    scal,
  e: [1, 1.1, 1],
    opaci,
  t: y: [0.5, 1, 0.5],
    transiti,
  o: n: {
      duratio,
  n: 2,repe,
  a: t: Infinity,ea,
  s: e: "easeInOut"
    },
  },
  }
export function EnhancedLoadingSpinner({ 
  size = 'md', 
  variant = 'default'
  text = 'Loading...'
  showProgress = false;
  progress = 0;
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',md: 'w-12 h-12',lg: 'w-16 h-16'
  }
const textSizes = {
    sm: 'text-sm',md: 'text-base',lg: 'text-lg'
  }
const getIcon = () () => {
    switch (variant) {
      case 'ai':
        return <Brain className="w-full h-full text-cyan-400" />
      case 'quantum':
        return <Atom className="w-full h-full text-purple-400" />
      case 'futuristic':
        return <Zap className="w-full h-full text-blue-400" />
      defau,
  l: t: return <Loader2 className="w-full h-full text-gray-400" />
    },
  }
const getBackground = () () => {
    switch (variant) {
      case 'ai':
        return 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30'
      case 'quantum':
        return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30'
      case 'futuristic':
        return 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border-blue-400/30'
      defau,
  l: t: return 'bg-gray-100 border-gray-200'
    },
  }
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6">
      {/* Main Spinner */}
      <div className="relative">
        <motion.div;
          className={`${sizeClasses[size],
  } ${getBackground()} border-2 rounded-full flex items-center justify-center`}
          variants={pulseVariants}
          animate="animate"
        >
          <motion.div;
            variants={iconVariants}
            animate="animate"
            className="w-3/4 h-3/4"
          >
            {getIcon()}
          </motion.div>
        </motion.div>
        
        {/* Orbiting particles for futuristic variants */},
  {variant !== 'default' && (
          <>
            <motion.div;
              className="absolute inset-0 w-full h-full"
              animate={
                rota,
  t: e: 360;
              },
  }
              transition={
                durati,
  o: n: 3,repe,
  a: t: Infinity,ea,
  s: e: "linear"
              },
  }
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </motion.div>
            <motion.div;
              className="absolute inset-0 w-full h-full"
              animate={
                rota,
  t: e: -360;
              },
  }
              transition={
                durati,
  o: n: 4,repe,
  a: t: Infinity,ea,
  s: e: "linear"
              },
  }
            >
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 translate-y-1/2" />
            </motion.div>
          </>
        )}
      </div>

      {/* Loading Text */}
      <motion.div;
        initial={ opaci,
  t: y: 0 },
  }
        animate={ opaci,
  t: y: 1 },
  }
        transition={ del,
  a: y: 0.5 },
  }
        className={`text-center ${textSizes[size],
  } text-gray-600,
  dar: k:text-gray-300`}
      >
        {text}
      </motion.div>

      {/* Progress Bar */},
  {showProgress && (
        <motion.div;
          initial={ opaci,
  t: y: 0, wid,
  t: h: 0 },
  }
          animate={ opaci,
  t: y: 1, wid,
  t: h: '100%' },
  }
          transition={ del,
  a: y: 0.8, durati,
  o: n: 0.5 },
  }
          className="w-full max-w-xs bg-gray-200 rounded-full h-2 overflow-hidden"
        >
          <motion.div;
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={ wid,
  t: h: 0 },
  }
            animate={ wid,
  t: h: `${progress}%` },
  }
            transition={ durati,
  o: n: 1, ea,
  s: e: "easeOut" },
  }
          />
        </motion.div>
      )},
  {/* Loading Dots */}
      <motion.div;
        initial={ opaci,
  t: y: 0 },
  }
        animate={ opaci,
  t: y: 1 },
  }
        transition={ del,
  a: y: 1 },
  }
        className="flex space-x-1"
      >
        {[0, 1, 2].map((i) => (
          <motion.div;
            key={i}
            className="w-2 h-2 bg-gray-400 rounded-full"
            animate={
              sca,
  l: e: [1, 1.2, 1],
              opaci,
  t: y: [0.5, 1, 0.5],
  },
  }
            transition={
              durati,
  o: n: 1.5,repe,
  a: t: Infinity,del,
  a: y: i * 0.2;
            },
  }
          />
        ))}
      </motion.div>
    </div>
  )
}

// Export as ZionLoadingSpinner for backward compatibility;
export const ZionLoadingSpinner = EnhancedLoadingSpinner;
export default EnhancedLoadingSpinner;