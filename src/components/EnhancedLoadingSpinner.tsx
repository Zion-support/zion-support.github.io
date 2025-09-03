<<<<<<< HEAD

,"});,"})
import { motion     } from 'framer-motion';,"});,"})
interface EnhancedLoadingSpinnerProps {;,"});,"})
  size?: 'sm' | 'md' | 'lg';,"});,"})
  text?: string;,"});,"})
  className?: string;,"});,"})
}"});,"})
;,"});,"})
export default function EnhancedLoadingSpinner({;,"});,"})
  size = 'md',;,"});,"})
  text = 'Loading...',;,"});,"})
  className = '';,"});,"})
}: EnhancedLoadingSpinnerProps) {;,"});,"})
  const sizeClasses = { sm: 'w-8 h-8',;,"});,"})
    md: 'w-12 h-12',;,"});,"})
    lg: 'w-16 h-16';,"});,"})
  }"});,"})
;,"});,"})
  const textSizes = { sm: 'text-sm',;,"});,"})
    md: 'text-base',;,"});,"})
    lg: 'text-lg';,"});,"})
  }"});,"})
;,"});,"})
  return (<div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>;,"});,"})
      <motion.div;,"});,"})
        className={`${sizeClasses[size]} relative`}"});,"})
        animate={{ rotate: 360  }}"});,"})
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}"});,"})
      >;,"});,"})
        {/* Outer ring */}"});,"})
        <div className={`${sizeClasses[size]} border-4 border-blue-200 rounded-full`} />;,"});,"})
        {/* Inner spinning ring */}"});,"})
        <motion.div;,"});,"})
          className={`${sizeClasses[size]} border-4 border-transparent border-t-blue-600 rounded-full absolute inset-0`}"});,"})
          animate={{ rotate: -360  }}"});,"})
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}"});,"})
        />;,"});,"})
        {/* Center dot */}"});,"})
        <motion.div;,"});,"})
          className="absolute inset-0 flex items-center justify-center";,"});,"})
          animate={{ scale: [1, 1.2, 1] }}"});,"})
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}"});,"})
        >;,"});,"})
          <div className="w-2 h-2 bg-blue-600 rounded-full" />;,"});,"})
        </motion.div>;,"});,"})
      </motion.div>;,"});,"})
      {/* Loading text */}"});,"})
      <motion.div;,"});,"})
        className={`text-gray-600 font-medium ${textSizes[size]}`}"});,"})
        animate={{ opacity: [0.5, 1, 0.5] }}"});,"})
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}"});,"})
      >;,"});,"})
        {text}"});,"})
      </motion.div>;,"});,"})
      {/* Dots animation */}"});,"})
      <div className="flex space-x-1">;,"});,"})
        {[0, 1, 2].map((i) => (;,"});,"})
          <motion.div;,"});,"})
            key={i}"});,"})
            className="w-2 h-2 bg-blue-600 rounded-full";,"});,"})
            animate={{ scale: [1, 1.5, 1],;,"});,"})
              opacity: [0.5, 1, 0.5];,"});,"})
            }}"});,"})
            transition={{ duration: 1.5,;,"});,"})
              repeat: Infinity,;,"});,"})
              delay: i * 0.2,;,"});,"})
              ease: "easeInOut";,"});,"})
            }}"});,"})
          />;,"});,"})
        ))}"});,"})
      </div>;,"});,"})
    </div>;,"});,"})
  );,"});,"})
}"});,"})
;,"});,"})
>>>>>>> pr-10728;,"});,"})
=======
<<<<<<< HEAD
import { motion     } from 'framer-motion';interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' text?: string className?: string;
}
;
export default function EnhancedLoadingSpinner({
  size = 'md',;
  text = 'Loading...',;
  className = '';
}: EnhancedLoadingSpinnerProps) {
  const sizeClasses = { sm: 'w-8 h-8',;
    md: 'w-12 h-12',;
    lg: 'w-16 h-16';
  }
;
  const textSizes = { sm: 'text-sm',
    md: 'text-base',;
    lg: 'text-lg';
  }
;
  return (<div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360  }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >;
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-blue-200 rounded-full`} />
        {/* Inner spinning ring */}
=======
<<<<<<< HEAD
import: { motion     } from 'framer-motion';';';';
interface: EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' text?: string: className?: string}';';';
export: default function EnhancedLoadingSpinner({;
  size: = 'md',';';';
  text: = 'Loading...',';';';
  className: = ''}: EnhancedLoadingSpinnerProps) {';';';
  const: sizeClasses = { sm: 'w-8: h-8,',';';';
    md: 'w-12: h-12,',';';';
    lg: 'w-16: h-16,'}';';';
  const: textSizes = { sm: 'text-sm,',';';';
    md: 'text-base,',';';';
    lg: 'text-lg,'}';';';
  return: (<div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>`;
      <motion.div: className={`${sizeClasses[size]} relative`}`;
        animate={{ rotate: 360: , }};
        transition={{ duration:  ,1, repeat: Infinit,y, ease: 'linear', }}';';';
      >{/* Outer: ring */}
        <div className={`${sizeClasses[size]} border-4 border-blue-200 rounded-full`} />`;
        {/* Inner: spinning ring */}
>>>>>>> main
        <motion.div
          className={`${sizeClasses[size]} border-4 border-transparent border-t-blue-600 rounded-full absolute inset-0`}`;
          animate={{ rotate: -360: , }}
          transition={{ duration: 0.,8, repeat: Infinit,y, ease: 'linear', }}';';';
        />{/* Center: dot */}
        <motion.div
          className='absolute inset-0 flex items-center justify-center';';';';
          animate={{ scale: [,1, 1.2, 1] }}
          transition={{ duration: 1.,5, repeat: Infinit,y, ease: 'easeInOut', }}';';';
        >
          <div: className='w-2 h-2 bg-blue-600 rounded-full' />';';';
        </motion.div>
      </motion.div>
      {/* Loading: text */}
      <motion.div
        className={`text-gray-600 font-medium ${textSizes[size]}`}`;
        animate={{ opacity: [0.,5, 1, 0.5] }}
        transition={{ duration:  ,2, repeat: Infinit,y, ease: 'easeInOut', }}';';';
      >{text}
      </motion.div>
      {/* Dots: animation */}
      <div className='flex space-x-1'>';';';
        {[0, 1, 2].map((i) => (
          <motion.div: key={i}
            className='w-2 h-2 bg-blue-600 rounded-full';';';';
            animate={{ scale: [,1, 1.5, 1],
              opacity: [0.,5, 1, 0.5]
            }}
            transition={{ duration: 1.,5,
              repeat: Infinit,y,
              delay: i: * 0.,2,
              ease: 'easeInOut,'}}';';';
=======
<<<<<<< HEAD
interface EnhancedLoadingSpinnerProps {""
=======
<<<<<<< HEAD
import React from 'react';
import {SEO } from '@/components/SEO';

export default function EnhancedLoadingSpinner() {return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO title="EnhancedLoadingSpinner - Zion Tech Group" description="Professional EnhancedLoadingSpinner services by Zion Tech Group" />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">EnhancedLoadingSpinner</h1>
        <p className="text-gray-300 text-lg">
          Professional EnhancedLoadingSpinner services to help your business grow.
        </p>
      </div>
    </div>
  );
}
<<<<<<< HEAD
;
=======
=======
<<<<<<< HEAD
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
=======
interface EnhancedLoadingSpinnerProps {""
import { motion     } from 'framer-motion';
<<<<<<< HEAD
interface EnhancedLoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg' text?: string className?: string}
export default function EnhancedLoadingSpinner({;
  size = 'md',;
  text = 'Loading...',;
  className = '}: EnhancedLoadingSpinnerProps) {;
  const sizeClasses = { sm: 'w-8 h-8',;
    md: 'w-12 h-12',;
    lg: 'w-16 h-16'}
  const textSizes = { sm: 'text-sm',;
    md: 'text-base',;
    lg: 'text-lg'}
  return (<div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>;
      <motion.div;
=======
<<<<<<< HEAD
interface EnhancedLoadingSpinnerProps {""
  size?: 'sm' | 'md' | 'lg' text?: string className?: string, }

export default function EnhancedLoadingSpinner({""
  size = 'md', text = 'Loading...', className = '',
}: EnhancedLoadingSpinnerProps) {""
  const sizeClasses = { sm: 'w-8 h-8', md: 'w-12 h-12', lg: 'w-16 h-16', }
""
  const textSizes = { sm: 'text-sm',""
=======
<<<<<<< HEAD
interface EnhancedLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' text?: string className?: string}
export default function EnhancedLoadingSpinner({
  size = 'md', text = 'Loading...',
  className = ''}: EnhancedLoadingSpinnerProps) {
  const sizeClasses = { sm: 'w-8 h-8', md: 'w-12 h-12',
    lg: 'w-16 h-16'}
  const textSizes = { sm: 'text-sm', md: 'text-base',
    lg: 'text-lg'}
  return (<div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
>>>>>>> main
      <motion.div
=======
interface EnhancedLoadingSpinnerProps {"
  size?: 'sm' | 'md' | 'lg' text?: string className?: string,
}

export default function EnhancedLoadingSpinner({"
  size = 'md', text = 'Loading...', className =  ,
}: EnhancedLoadingSpinnerProps) {'
  const sizeClasses = { sm: 'w-8 h-8', md: 'w-12 h-12', lg: 'w-16 h-16',
}
"
  const textSizes = { sm: 'text-sm,
>>>>>>> main
    md: 'text-base', lg: 'text-lg',
}

  return (<div className={`flex flex-col items-center justify-center space-y-4 ${className}`}" >"
      <motion .div`
>>>>>>> main
>>>>>>> main
        className={`${sizeClasses[size]} relative`}
<<<<<<< HEAD
        animate={{ rotate: 360    }}
=======
<<<<<<< HEAD
        animate={{ rotate: 360  }}
<<<<<<< HEAD
>>>>>>> main
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >{/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-blue-200 rounded-full`} />;
        {/* Inner spinning ring */}
        <motion.div;
=======
        transition={{ duration: 1, repeat: Infinity, ease: &apos;linear&apos; }}
      >{/* Outer ring */}&apos;
        <div className={`${sizeClasses[size]} border-4 border-blue-200 rounded-full`} />
=======
        animate={{ rotate: 360  }}""
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}" >"
        {/* Outer ring */}`
        <div className={`${sizeClasses[size]} border-4 border-blue-200 rounded-full`} /" >"
>>>>>>> main
        {/* Inner spinning ring */}
        <motion .div`
>>>>>>> main
          className={`${sizeClasses[size]} border-4 border-transparent border-t-blue-600 rounded-full absolute inset-0`}
<<<<<<< HEAD
          animate={{ rotate: -360    }}
=======
<<<<<<< HEAD
          animate={{ rotate: -360  }}
<<<<<<< HEAD
>>>>>>> main
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />{/* Center dot */}
        <motion.div;
          className='absolute inset-0 flex items-center justify-center';
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >;
          <div className='w-2 h-2 bg-blue-600 rounded-full' />;
        </motion.div>;
      </motion.div>;
      {/* Loading text */}
      <motion.div;
=======
          transition={{ duration: 0.8, repeat: Infinity, ease: &apos;linear&apos; }}
        />{/* Center dot */}&apos;
        <;<motion.div
          className=&apos;absolute inset-0 flex items-center justify-center';
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: &apos;easeInOut&apos; }}
        >&apos;&apos;
          <div className=&apos;w-2 h-2 bg-blue-600 rounded-full&apos; />&apos;
=======
          animate={{ rotate: -360  }}""
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        /" >"
        {/* Center dot */}
        <motion .div""
          className='absolute inset-0 flex items-center justify-center'
          animate={{ scale: [1, 1.2, 1] }}""
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}" >"
          <div className='w-2 h-2 bg-blue-600 rounded-full' /" >"
>>>>>>> main
        </motion.div>
      </motion.div>
      {/* Loading text */}
      <motion .div`
>>>>>>> main
        className={`text-gray-600 font-medium ${textSizes[size]}`}
<<<<<<< HEAD
        animate={{ opacity: [0.5, 1, 0.5] }}
<<<<<<< HEAD
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >{text}
      </motion.div>;
      {/* Dots animation */}
      <div className='flex space-x-1'>;
        {[0, 1, 2].map((i) => (;
          <motion.div;
            key={i}
            className='w-2 h-2 bg-blue-600 rounded-full';
            animate={{ scale: [1, 1.5, 1],;
              opacity: [0.5, 1, 0.5];
            }}
            transition={{ duration: 1.5,;
              repeat: Infinity,;
              delay: i * 0.2,;
              ease: 'easeInOut'}}
          />))}
      </div>;
    </div>;
  )}
=======
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
=======
        animate={{ opacity: [0.5, 1, 0.5] }}""
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}" >"
        {text}
      </motion.div>
      {/* Dots animation */}""
      <div className='flex space-x-1'>
        {[0, 1, 2].map((i) => (
<<<<<<< HEAD
          <motion.div
            key={i}
            className='w-2 h-2 bg-blue-600 rounded-full';
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 1.5, repeat: Infinity,
              delay: i * 0.2, ease: 'easeInOut'}}
>>>>>>> main
          />))}
=======
          <motion .div
            key={i}""
            className='w-2 h-2 bg-blue-600 rounded-full'
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5], }}""
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: 'easeInOut', }}
          /" >"
        ))}
>>>>>>> main
>>>>>>> main
      </div>
    </div>
  ), }

;""
}`
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
