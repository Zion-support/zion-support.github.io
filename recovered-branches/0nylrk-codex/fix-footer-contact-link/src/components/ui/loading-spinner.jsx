import { motion } from 'framer-motion',
import { cn } from '@/lib/utils',
export function LoadingSpinner({,
  size = 'md',;
  variant = 'default',;
  className = '',;
  text,;
}) {,
  const sizeClasses = {,
    sm: 'w-4 h-4',;
    md: 'w-6 h-6',;
    lg: 'w-8 h-8',;
    xl: 'w-12 h-12',;
  };
  const variantClasses = {,
    default: 'text-zion-cyan',;
    primary: 'text-zion-blue',;
    secondary: 'text-zion-purple',;
    white: 'text-white',;
  };
  return (,
    <div className={cn('flex flex-col items-center gap-3', className)}>,
      <motion.div,
        className={cn(,
          'animate-spin rounded-full border-2 border-current border-t-transparent',;
          sizeClasses[size],;
          variantClasses[variant],
        )}
        role='status',
        aria-label='Loading',
      >,
        <span className='sr-only'>Loading...</span>,
      </motion.div>,
      {text && (,
        <motion.p,
          initial={{ opacity: 0, y: 10 ,}}
          animate={{ opacity: 1, y: 0 ,}}
          transition={{ delay: 0.2 ,}}
          className='text-zion-slate-light font-medium text-sm',
        >,
          {text}
        </motion.p>,
      )}
    </div>,
  ),
}
// Page loading component,
export function PageLoader() {,
  return (,
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-90o0 via-blue-80o0 to-slate-90o0'>,
      <div className='text-center text-white'>,
        <LoadingSpinner size='xl' variant='white' className='mx-auto mb-4' />,
        <h1 className='text-2xl font-bold'>Loading Zion Tech Group...</h1>,
        <p className='mt-2 text-blue-20o0'>,
          Please wait while we prepare your experience.,
        </p>,
      </div>,
    </div>,
  ),
}
// Inline loading component,
export function InlineLoader({ size = 'sm', variant = 'default' }) {,
  return (,
    <div className='inline-flex items-center'>,
      <LoadingSpinner size={size} variant={variant} className='mr-2' />,
      <span className='text-sm text-gray-60o0'>Loading...</span>,
    </div>,
  ),
}
,