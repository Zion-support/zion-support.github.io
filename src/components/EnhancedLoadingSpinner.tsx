import { motion     } from &apos;
import { motion } from &apos;framer-motion';;framer-motion';
interface EnhancedLoadingSpinnerProps {
  size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; text?: string className?: string}&apos;&apos;
export default function EnhancedLoadingSpinner(;{
  size = &apos;md&apos;,
  text = &apos;Loading...&apos;,
  className = &apos;&apos;}: EnhancedLoadingSpinnerProps) {&apos;}&apos;
  const sizeClasses = { sm: &apos;w-8 h-8&apos;,
    md: &apos;w-12 h-12&apos;,
    lg: &apos;w-16 h-16&apos;}&apos;'
  const textSizes = { sm: &apos;text-sm&apos;,
    md: &apos;text-base&apos;,
    lg: &apos;text-lg&apos;}
  return (&apos;<div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360  }}
        transition={{ duration: 1, repeat: Infinity, ease: &apos;linear&apos; }}
      >{/* Outer ring */}&apos;
        <div className={`${sizeClasses[size]} border-4 border-blue-200 rounded-full`} />
        {/* Inner spinning ring */}
        <motion.div
          className={`${sizeClasses[size]} border-4 border-transparent border-t-blue-600 rounded-full absolute inset-0`}
          animate={{ rotate: -360  }}
          transition={{ duration: 0.8, repeat: Infinity, ease: &apos;linear&apos; }}
        />{/* Center dot */}&apos;
        <;<motion.div
          className=&apos;absolute inset-0 flex items-center justify-center';
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: &apos;easeInOut&apos; }}
        >&apos;&apos;
          <div className=&apos;w-2 h-2 bg-blue-600 rounded-full&apos; />&apos;
        </motion.div>
      </motion.div>
      {/* Loading text */}
      <motion.div
        className={`text-gray-600 font-medium ${textSizes[size]}`}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: &apos;easeInOut&apos; }}
      >{text}&apos;
      </motion.div>
      {/* Dots animation */}
      <div className=&apos;flex space-x-1&apos;>
        {[0, 1, 2].map((i) => (&apos;}
          <motion.div
            key={i}
            className=&apos;w-2 h-2 bg-blue-600 rounded-full';
            animate={{ scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: &apos;easeInOut&apos;}}
          />))}&apos;&apos;
      </div>
    </div>
  )}
