<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Loader2
  AlertTriangle
  RefreshCw
  Wifi
  WifiOff
  Clock
  Zap
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Loader2,
  AlertTriangle,
  RefreshCw,
  Wifi,
  WifiOff,
=======
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {;
  Loader2,;
  AlertTriangle,;
  RefreshCw,;
  Wifi,;
  WifiOff,;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  Clock,;
  Zap;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
} from 'lucide-react'; import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

// Enhanced loading spinner with different variants
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl',
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  className?: string;
  showText?: boolean;
<<<<<<< HEAD
  text?: string
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  text?: string;

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({;
  size = 'md',;
  variant = 'default',;
  className,;
  showText = false,;
  text = 'Loading...',;
}) => {  const sizeClasses = {;
    sm: 'h-4 w-4',;
    md: 'h-6 w-6',;
    lg: 'h-8 w-8',;
    xl: 'h-12 w-12',;
  };

  const variantClasses = {;
    default: 'text-muted-foreground',;
    primary: 'text-primary',;
    success: 'text-green-500',;
    warning: 'text-yellow-500',;
    error: 'text-red-500',;
  };



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
import React, { useState, useEffect } from 'react',;
import { motion, AnimatePresence } from 'framer-motion',;
import { Loader2, AlertTriangle, RefreshCw, Wifi, WifiOff, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { cn } from '@/lib/utils',;
// Enhanced loading spinner with different variants;
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg' | 'xl',;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error',;
  className?: string,;
  showText?: boolean,;
  text?: string;
}

<<<<<<< HEAD
=======
xport const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
>>>>>>>   size = 'md',
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
import React, { useState, useEffect } from 'react',;
import { motion, AnimatePresence } from 'framer-motion',;
import { Loader2, AlertTriangle, RefreshCw, Wifi, WifiOff, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { Card, CardContent } from '@/components/ui/card',;
import { Badge } from '@/components/ui/badge',;
import { cn } from '@/lib/utils',;
// Enhanced loading spinner with different variants;
interface LoadingSpinnerProps {;
  size?: 'sm' | 'md' | 'lg' | 'xl',;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error',;
  className?: string,;
  showText?: boolean,;
  text?: string;
}

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  variant = 'default',
  className,
  showText = false,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  text = 'Loading...',
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  text = 'Loading...',
}) => {  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12',
  }
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  },

  size = 'md'
  variant = 'default'
  className
  showText = false
  text = 'Loading...'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}) => {  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12',
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  text = 'Loading...'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  },
<<<<<<< HEAD

=======
>>>>>>> 
=======
  const variantClasses = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    default: 'text-muted-foreground'
    primary: 'text-primary'
    success: 'text-green-500'
    warning: 'text-yellow-500'
    error: 'text-red-500'
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const variantClasses = {
    default: 'text-muted-foreground',
    primary: 'text-primary',
    success: 'text-green-500',
    warning: 'text-yellow-500',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  return (
=======
    error: 'text-red-500',
  }
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    error: 'text-red-500',
  }
    error: 'text-red-500'
  },

  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className={cn('flex items-center gap-2', className)}>
      <Loader2
        className={cn(
          'animate-spin'
          sizeClasses[size]
          variantClasses[variant]
        )}
      />
      {showText && (
        <span className='text-sm text-muted-foreground'>{text}</span>
      )}
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
}
=======
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (

    <div className={cn ('flex items - center gap - 2', class_name)}>;
      <Loader2;
        className={cn (
          'animate - spin',
          size_classes[size],
          variant_classes[variant])}
      />;
      {show_text && (
        <span className='text - sm text - muted - foreground'>{text}</span>)}
    </div>);
>>>>>>> }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
//Progressive loading component useEffect ( () => {
  // Check condition
if ( {) {
  $2
}
  /> </div>);
}<motion.div key= {
  step.id;
}className= {
  cn ('flex items - center gap - 3 p - 2 rounded - md', index === active_step ? 'bg - primary / 10' : 'opacity - 50');
}initial= {
  {
  opacity: 0, coordinate_x: -20;
export const ProgressiveLoading: React.FC < ProgressiveLoadingProps> = ({
  steps,
  current_step = 0,
  show_progress = true,
  on_complete,

=======
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
//Progressive loading component useEffect ( () => {
  if (currentStep !== undefined) {
  /> </div>)
}<motion.div key= {
  step.id
}className= {
  cn ('flex items-center gap-3 p-2 rounded-md', index === activeStep ? 'bg-primary/10' : 'opacity-50')
}initial= {
  {
  opacity: 0, x: -20
export const ProgressiveLoading: React.FC<ProgressiveLoadingProps> = ({
  steps
  currentStep = 0
  showProgress = true
  onComplete
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}) => {
  const [activeStep, setActiveStep] = useState(0)
  const progress = ((activeStep + 1) / steps.length) * 100
  useEffect((,) => {
    if (currentStep !== undefined) {
      setActiveStep(currentStep)
<<<<<<< HEAD
    }
  }, [currentStep])
  useEffect((,) => {
    if (activeStep === steps.length - 1 && onComplete) {
      setTimeout(onComplete, 500)
    }
  }, [activeStep, steps.length, onComplete])
<<<<<<< HEAD
<<<<<<< HEAD

=======
    default: 'text-muted-foreground',
    primary: 'text-primary',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500'
  },

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Loader2 className={cn('animate-spin', sizeClasses[size], variantClasses[variant])} />
      {showText && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
},

// Progressive loading component
interface ProgressiveLoadingProps {
  steps: Array<{ id: string, label: string, duration?: number }>,
  currentStep?: number,
  showProgress?: boolean,
  onComplete?: () => void
}
      setActiveStep (current_step);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
  }, [currentStep])
  useEffect((,) => {
    if (activeStep === steps.length - 1 && onComplete) {
      setTimeout(onComplete, 500)
    }
<<<<<<< HEAD

    </div>;
  );
};
//Progressive loading component useEffect ( () => {;
  if (currentStep !== undefined) {;
  /> </div>) ;
}<motion&& motion.div key= {
  step && step.id 
}className= {
  cn ('flex items-center gap-3 p-2 rounded-md', index === activeStep ? 'bg-primary/10' : 'opacity-50') 
}initial= {
  {
  opacity: 0, x: -20 
=======
  }, [activeStep, steps.length, onComplete])
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    default: 'text-muted-foreground',
    primary: 'text-primary',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500'
  },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Loader2 className={cn('animate-spin', sizeClasses[size], variantClasses[variant])} />
      {showText && <span className="text-sm text-muted-foreground">{text}</span>}
    </div>
  )
},

// Progressive loading component
interface ProgressiveLoadingProps {
  steps: Array<{ id: string, label: string, duration?: number }>,
  currentStep?: number,
  showProgress?: boolean,
  onComplete?: () => void
}
;
export const ProgressiveLoading: React.FC<ProgressiveLoadingProps> = ({;
  steps,;
  currentStep = 0,;
  showProgress = true,;
  onComplete;
}) => {;
  const [activeStep, setActiveStep] = useState(0),;
  const progress = ((activeStep + 1) / steps.length) * 100,;
  useEffect(() => {;
    if (currentStep !== undefined) {;
      setActiveStep(currentStep);
    }
  }, [currentStep]),;
  useEffect(() => {;
    if (activeStep === steps.length - 1 && onComplete) {;
      setTimeout(onComplete, 500);
    }
  }, [activeStep, steps.length, onComplete]),

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (
<<<<<<< HEAD
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
    <div className='space-y-4'>;
      {showProgress && (;
        <div className='w-full bg-muted rounded-full h-2'>;
          <motion&& motion.div
            className='bg-primary h-2 rounded-full'


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <div className="space-y-4">
      {showProgress && (
        <div className="w-full bg-muted rounded-full h-2">
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
            className="bg-primary h-2 rounded-full"

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            initial={{ width: 0 }}
=======
            className='bg-primary h-2 rounded-full'
>>>>>>>             initial={{ width: 0 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
<<<<<<< HEAD

      <div className='space-y-2'>
=======
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            className='bg-primary h-2 rounded-full'
            className="bg-primary h-2 rounded-full"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD





>>>>>>>       <div className='space-y-2'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {steps.map((step, index) => (          <motion.div
            key = {step.id,}
<<<<<<< HEAD
      <div className='space-y-2'>;
        {steps && steps.map((step, index) => (          <motion&& motion.div
            key = {step && step.id,}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

      <div className='space-y-2'>
        {steps.map((step, index) => (          <motion.div
            key = {step.id,}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

      <div className='space-y-2'>;
        {steps && steps.map((step, index) => (          <motion&& motion.div
            key = {step && step.id,}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            className = {cn(
              'flex items-center gap-3 p-2 rounded-md'
              index === activeStep ? 'bg-primary/10' : 'opacity-50'
            ),}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
      
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="space-y-2">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={cn(;
              'flex items-center gap-3 p-2 rounded-md',;
              index === activeStep ? 'bg-primary/10' : 'opacity-50';
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
            initial={{ opacity: 0, x: -20 }}
=======
>>>>>>>             initial={{ opacity: 0, x: -20 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            initial={{ opacity: 0, x: -20 }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            animate={{ opacity: index <= activeStep ? 1 : 0.5, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {index < activeStep ? (
              <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>
            ) : index === activeStep ? (
              <LoadingSpinner size="sm" variant="primary" />
            ) : (
              <div className="h-4 w-4 rounded-full border-2 border-muted" />
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: index <= activeStep ? 1 : 0 && 0.5, x: 0 }}
            transition={{ delay: index * 0 && 0.1 }}>;
            {index < activeStep ? (;
              <div className='h-4 w-4 rounded-full bg-green-500 flex items-center justify-center'>;
                <div className='h-2 w-2 rounded-full bg-white' />;
              </div>;
            ) : index === activeStep ? (;
              <LoadingSpinner size='sm' variant='primary' />;
            ) : (;
              <div className='h-4 w-4 rounded-full border-2 border-muted' />;
>>>>>>>             )}
            <span className='text-sm font-medium'>{step && step.label}</span>;
          </motion && motion.div>;
        ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
            )}
            <span className="text-sm font-medium">{step.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
// Enhanced skeleton loader
interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular' | 'card'
  animation?: 'pulse' | 'wave' | 'none'
  lines?: number
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const Skeleton: React.FC<SkeletonProps> = ({
  className
  variant = 'rectangular'
  animation = 'pulse'
  lines = 1
}) => {
  const baseClasses = 'bg-muted rounded'
  const variantClasses = {
    text: 'h-4 w-full'
    circular: 'h-12 w-12 rounded-full'
    rectangular: 'h-6 w-full'
    card: 'h-48 w-full'
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

  }, [active_step, steps.length, on_complete]);
  return (
    <div className='space - y-4'>;
      {show_progress && (
        <div className='w - full bg - muted rounded - full h - 2'>;
          <motion.div;
            className='bg - primary h - 2 rounded - full';
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />;
        </div>)}
      <div className='space - y-2'>;
        {steps.map ((step, index) => (          <motion.div;
            key = {step.id, }
            class_name = {cn (
              'flex items - center gap - 3 p - 2 rounded - md',
              index === active_step ? 'bg - primary / 10' : 'opacity - 50'), }
            initial={{ opacity: 0, coordinate_x: -20 }}
            animate={{ opacity: index <= active_step ? 1 : 0.5, coordinate_x: 0 }}
            transition={{ delay: index * 0.1 }}
          >;
            {index < active_step ? (
              <div className='h - 4 w - 4 rounded - full bg - green - 500 flex items - center justify - center'>;
                <div className='h - 2 w - 2 rounded - full bg - white' />;
              </div>) : index === active_step ? (
              <LoadingSpinner size='sm' variant='primary' />) : (
              <div className='h - 4 w - 4 rounded - full border - 2 border - muted' />)}
            <span className='text - sm font - medium'>{step.label}</span>;
          </motion.div>))}
      </div>;
    </div>);

}
// Enhanced skeleton loader;
interface SkeletonProps {



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      </div>;
    </div>;
  );
},;
// Enhanced skeleton loader;
interface SkeletonProps {;
  className?: string,;
  variant?: 'text' | 'circular' | 'rectangular' | 'card',;
  animation?: 'pulse' | 'wave' | 'none',;
  lines?: number;
}

<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
  animation = 'pulse',
  lines = 1,
}) => {
  const baseClasses = 'bg-muted rounded'
<<<<<<< HEAD
=======
<<<<<<< HEAD
  lines = 1,
}) => {
  const baseClasses = 'bg-muted rounded'
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  lines = 1
}) => {
  const baseClasses = 'bg-muted rounded',
  
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const variantClasses = {
    text: 'h-4 w-full',
    circular: 'h-12 w-12 rounded-full',
    rectangular: 'h-6 w-full',
    card: 'h-48 w-full',
<<<<<<< HEAD
=======
<<<<<<< HEAD
    card: 'h-48 w-full',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
  const animationClasses = {
    pulse: 'animate-pulse'
    wave: 'animate-bounce'
    none: ''
  }
  if (variant === 'text' && lines > 1) {
    return (
      <div className='space-y-2'>
        {Array.from({ length: lines }).map((_, i) => (          <div
            key = {i,}
            className = {cn(
              baseClasses
              variantClasses.text
              animationClasses[animation]
              i === lines - 1 ? 'w-3/4' : 'w-full'
              className
            ),}
          />
        ))}
      </div>
    )
  }
      />
  )
}
//Enhanced error state component
}return undefined
}, [])
const getErrorConfig = () => {
  switch (variant) {'
  case 'network': return {'
  icon: isOnline ? Wifi : WifiOff,  title: title |(isOnline ? 'Connection Error' : 'No Internet Connection'), description: description |(isOnline ? 'Unable to connect to our servers. Please check your connection.' : 'You appear to be offline. Please check your internet connection.'
export const ErrorState: React.FC<ErrorStateProps> = ({
  error
  title
  description
  action
  secondaryAction
  variant = 'generic'
  showRetry = true
  retryCount = 0
  maxRetries = 3
  onRetry
  className
<<<<<<< HEAD
}) => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    if (typeof window !== 'undefined') {
      setIsOnline(navigator.onLine)
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
      return () => {
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
      }
    }
    return undefined
  }, [])
  const getErrorConfig = () => {
    switch (variant) {
      case 'network':
        return {
          icon: isOnline ? Wifi : WifiOff
          title:
            title |(isOnline ? 'Connection Error' : 'No Internet Connection')
          description:
            description |
            (isOnline
              ? 'Unable to connect to our servers. Please check your connection.'
              : 'You appear to be offline. Please check your internet connection.')
          color: 'text-orange-500'
        }
      case 'timeout':
        return {
          icon: Clock
          title: title |'Request Timeout'
          description:
            description |
            'The request took too long to complete. Please try again.'
          color: 'text-yellow-500'
        }
      case 'permission':
        return {
          icon: AlertTriangle
          title: title |'Access Denied'
          description:
            description |"You don't have permission to access this resource."
          color: 'text-red-500'
        }
      default:
        return {
          icon: AlertTriangle
          title: title |'Something went wrong'
          description:
            description |'An unexpected error occurred. Please try again.'
          color: 'text-red-500'
        }
    }
  }
  const config = getErrorConfig()
  const Icon = config.icon
  const canRetry = showRetry && onRetry && retryCount < maxRetries
<<<<<<< HEAD
      </div>;
    </div>;
  );
},;
// Enhanced skeleton loader;
interface SkeletonProps {;
  className?: string,;
  variant?: 'text' | 'circular' | 'rectangular' | 'card',;
  animation?: 'pulse' | 'wave' | 'none',;
  lines?: number;
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
  animation = 'pulse',

  const variantClasses = {
    text: 'h-4 w-full',
    circular: 'h-12 w-12 rounded-full',
    rectangular: 'h-6 w-full',
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    card: 'h-48 w-full'
  },

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-bounce',
    none: ''
  },

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(;
              baseClasses,;
              variantClasses.text,;
              animationClasses[animation],;
              i === lines - 1 ? 'w-3/4' : 'w-full',;
              className;
            )}
          />;
        ))}

  class_name?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  animation?: 'pulse' | 'wave' | 'none';
  lines?: number;
export const Skeleton: React.FC < SkeletonProps> = ({
  class_name,
  variant = 'rectangular',
  animation = 'pulse',
  lines = 1,
}) => {
  const base_classes = 'bg - muted rounded';
  const variant_classes = {
    text: 'h - 4 w - full',
    circular: 'h - 12 w - 12 rounded - full',
    rectangular: 'h - 6 w - full',
    card: 'h - 48 w - full',
  }
  const animation_classes = {
    pulse: 'animate - pulse',
    wave: 'animate - bounce',
    none: '',
  }
  // Check condition
if ( {) {
  $2
}
    return (
      <div className='space - y-2'>;
        {Array.from ({ length: lines }).map ((_, i) => (          <div;
            key = {i, }
            class_name = {cn (
              base_classes,
              variant_classes.text,
              animation_classes[animation],
              index === lines - 1 ? 'w - 3/4' : 'w - full',
              class_name), }
          />))}
      </div>);
  }
      />);
}
//Enhanced error state component;
}return undefined;
}, []);
const getErrorConfig = () =>: any {
  switch (variant) {';
  case 'network': return {';
  icon: is_online ? Wifi : WifiOff,  title: title || (is_online ? 'Connection Error' : 'No Internet Connection'), description: description || (is_online ? 'Unable to connect to our servers. Please check your connection.' : 'You appear to be offline. Please check your internet connection.';
export const ErrorState: React.FC < ErrorStateProps> = ({
  error,
  title,
  description,
  action,
  secondary_action,
  variant = 'generic',
  show_retry = true,
  retry_count = 0,
  max_retries = 3,
  on_retry,
  class_name,

}) => {
  const [is_online, setIsOnline] = useState (true);
  useEffect (() => {
    const handle_online = () =>: any setIsOnline (true);
    const handle_offline = () =>: any setIsOnline (false);
    // Check condition
if ( {) {
  $2
}
      setIsOnline (navigator.on_line);
      window.addEventListener ('online', handle_online);
      window.addEventListener ('offline', handle_offline);
=======
}) => {
  const [isOnline, setIsOnline] = useState(true)
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    if (typeof window !== 'undefined') {
      setIsOnline(navigator.onLine)
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return () => {
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('offline', handleOffline)
      }
    }
<<<<<<< HEAD

    return undefined;
  }, []);
  const getErrorConfig = () =>: any {

=======
    return undefined
  }, [])
  const getErrorConfig = () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    switch (variant) {
      case 'network':
        return {
<<<<<<< HEAD

          icon: is_online ? Wifi : WifiOff,
          title:;
            title || (is_online ? 'Connection Error' : 'No Internet Connection'),
          description:;
            description ||;
            (is_online;
              ? 'Unable to connect to our servers. Please check your connection.';
              : 'You appear to be offline. Please check your internet connection.'),
          color: 'text - orange - 500',

=======
          icon: isOnline ? Wifi : WifiOff
          title:
            title |(isOnline ? 'Connection Error' : 'No Internet Connection')
          description:
            description |
            (isOnline
              ? 'Unable to connect to our servers. Please check your connection.'
              : 'You appear to be offline. Please check your internet connection.')
          color: 'text-orange-500'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      case 'timeout':
        return {
<<<<<<< HEAD

          icon: Clock,
          title: title || 'Request Timeout',
          description:;
            description ||;
            'The request took too long to complete. Please try again.',
          color: 'text - yellow - 500',

=======
          icon: Clock
          title: title |'Request Timeout'
          description:
            description |
            'The request took too long to complete. Please try again.'
          color: 'text-yellow-500'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      case 'permission':
        return {
<<<<<<< HEAD

          icon: AlertTriangle,
          title: title || 'Access Denied',
          description:;
            description || "You don't have permission to access this resource.",
          color: 'text - red - 500',

=======
          icon: AlertTriangle
          title: title |'Access Denied'
          description:
            description |"You don't have permission to access this resource."
          color: 'text-red-500'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
      default:
        return {
<<<<<<< HEAD

=======
          icon: AlertTriangle
          title: title |'Something went wrong'
          description:
            description |'An unexpected error occurred. Please try again.'
          color: 'text-red-500'
        }
    }
  }
  const config = getErrorConfig()
  const Icon = config.icon
  const canRetry = showRetry && onRetry && retryCount < maxRetries
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      </div>;
    </div>;
  );
},;
// Enhanced skeleton loader;
interface SkeletonProps {;
  className?: string,;
  variant?: 'text' | 'circular' | 'rectangular' | 'card',;
  animation?: 'pulse' | 'wave' | 'none',;
  lines?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
  animation = 'pulse',
  lines = 1
}) => {
  const baseClasses = 'bg-muted rounded',
  
  const variantClasses = {
    text: 'h-4 w-full',
    circular: 'h-12 w-12 rounded-full',
    rectangular: 'h-6 w-full',
    card: 'h-48 w-full'
  },

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-bounce',
    none: ''
  },

  if (variant === 'text' && lines > 1) {
    return (
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(;
              baseClasses,;
              variantClasses.text,;
              animationClasses[animation],;
              i === lines - 1 ? 'w-3/4' : 'w-full',;
              className;
            )}
          />;
        ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>;
    );
  }
;
  return (;
    <div;
      className={cn(;
        baseClasses,;
        variantClasses[variant],;
        animationClasses[animation],;
        className;
      )}
    />;
  );
},;
// Enhanced error state component;
interface ErrorStateProps {;
  error?: Error | string | null,;
  title?: string,;
  description?: string,;
  action?: {;
    label: string,;
    onClick: () => void;
  },;
  secondaryAction?: {;
    label: string,;
    onClick: () => void;
  },;
  variant?: 'network' | 'generic' | 'timeout' | 'permission',;
  showRetry?: boolean,;
  retryCount?: number,;
  maxRetries?: number,;
  onRetry?: () => void,;
  className?: string;
}
;
export const ErrorState: React.FC<ErrorStateProps> = ({;
  error,;
  title,;
  description,;
  action,;
  secondaryAction,;
  variant = 'generic',;
  showRetry = true,;
  retryCount = 0,;
  maxRetries = 3,;
  onRetry,;
  className;
}) => {;
  const [isOnline, setIsOnline] = useState(true),;
  useEffect(() => {;
    const handleOnline = () => setIsOnline(true),;
    const handleOffline = () => setIsOnline(false),;
    if (typeof window !== 'undefined') {;
      setIsOnline(navigator.onLine),;
      window.addEventListener('online', handleOnline),;
      window.addEventListener('offline', handleOffline),;
      return () => {;
        window.removeEventListener('online', handleOnline),;
        window.removeEventListener('offline', handleOffline);
      }
    }
;
    return undefined;
  }, []),;
  const getErrorConfig = () => {;
    switch (variant) {;
      case 'network':;
        return {;
          icon: isOnline ? Wifi : WifiOff,;
          title: title || (isOnline ? 'Connection Error' : 'No Internet Connection'),;
          description: description || (isOnline;
            ? 'Unable to connect to our servers. Please check your connection.';
            : 'You appear to be offline. Please check your internet connection.';
          ),;
          color: 'text-orange-500';
        },;
      case 'timeout':;
        return {;
          icon: Clock,;
          title: title || 'Request Timeout',;
          description: description || 'The request took too long to complete. Please try again.',;
          color: 'text-yellow-500';
        },;
      case 'permission':;
        return {;
          icon: AlertTriangle,;
          title: title || 'Access Denied',;
          description: description || 'You don\'t have permission to access this resource.',;
          color: 'text-red-500';
        },;
      default:;
        return {;
          icon: AlertTriangle,;
          title: title || 'Something went wrong',;
<<<<<<< HEAD
          description:;
            description || 'An unexpected error occurred. Please try again.',;
          color: 'text-red-500',;
        };
    }
  };

  const config = getErrorConfig();
  const Icon = config && config.icon;
  const canRetry = showRetry && onRetry && retryCount < maxRetries;


  return (
    <Card className={cn('border-destructive/20', className)}>;
      <CardContent className='p-8 text-center'>;
        <motion&& motion.div
          initial={{ scale: 0 && 0.8, opacity: 0 }}
          icon: AlertTriangle,
          title: title || 'Something went wrong',
          description:;
            description || 'An unexpected error occurred. Please try again.',
          color: 'text - red - 500',
=======
          description: description || 'An unexpected error occurred. Please try again.',;
          color: 'text-red-500';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        }
    }
<<<<<<< HEAD
  },

  const config = getErrorConfig(),
  const Icon = config.icon,
  const canRetry = showRetry && onRetry && retryCount < maxRetries,

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (
=======
>>>>>>>   return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    <Card className={cn('border-destructive/20', className)}>
      <CardContent className="p-8 text-center">
        <motion.div
ursor/fix-website-loading-errors-and-merge-6662
=======
  }
  const config = getErrorConfig ();
  const Icon = config.icon;
  const can_retry = show_retry && on_retry && retry_count < max_retries;
},;
// Enhanced skeleton loader;
interface SkeletonProps {;
  className?: string,;
  variant?: 'text' | 'circular' | 'rectangular' | 'card',;
  animation?: 'pulse' | 'wave' | 'none',;
  lines?: number;
}


export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
  animation = 'pulse',

  lines = 1
}) => {
  const baseClasses = 'bg-muted rounded',
  

  const variantClasses = {
    text: 'h-4 w-full',
    circular: 'h-12 w-12 rounded-full',
    rectangular: 'h-6 w-full',


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
  return (
    <Card className={cn ('border - destructive / 20', class_name)}>;
      <CardContent className='p - 8 text - center'>;
        <motion.div;
<<<<<<< HEAD
>>>>>>>           initial={{ scale: 0.8, opacity: 0 }}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
          initial={{ scale: 0.8, opacity: 0 }}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          animate={{ scale: 1, opacity: 1 }}

          </p>;

          {error && process.env.NODE_ENV === 'development' && (

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return (
    <Card className={cn('border-destructive/20', className)}>
      <CardContent className="p-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className={cn('mx-auto mb-4 h-12 w-12', config.color)} />
          <h3 className="text-lg font-semibold mb-2">{config.title}</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {config.description}
          </p>
          {error && process.env.NODE_ENV === 'development' && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <details className="mb-4 text-left">
              <summary className="text-sm text-muted-foreground cursor-pointer">
                Error Details (Development)
              </summary>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                {typeof error === 'string' ? error : error.message}
              </pre>
            </details>
          )}

=======
              <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-auto'>
>>>>>>>                 {typeof error === 'string' ? error : error.message}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-auto'>
              <pre className="mt-2 p-2 bg-muted rounded text-xs overflow-auto">
<<<<<<< HEAD
                {typeof error === 'string' ? error : error.message}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </pre>
            </details>
          )}
          <div className='flex flex-col sm:flex-row gap-2 justify-center'>
            {canRetry && (
              <Button onClick={onRetry} variant='default'>
                <RefreshCw className='h-4 w-4 mr-2' />
<<<<<<< HEAD
<<<<<<< HEAD
              <Button onClick={onRetry} variant="default">
                <RefreshCw className="h-4 w-4 mr-2" />
              <Button onClick={onRetry} variant='default'>
                <RefreshCw className='h-4 w-4 mr-2' />
>>>>>>>                 Try Again {retryCount > 0 && `(${retryCount}/${maxRetries})`}
              </Button>
            )}
ursor/fix-website-loading-errors-and-merge-6662
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                {typeof error === 'string' ? error : error.message}

          transition={{ duration: 0 && 0.3 }}>;
          <Icon className={cn('mx-auto mb-4 h-12 w-12', config && config.color)} />;
          <h3 className='text-lg font-semibold mb-2'>{config && config.title}</h3>;
          <p className='text-muted-foreground mb-6 max-w-md mx-auto'>;
            {config && config.description}
          </p>;

          {error && process && process.env.NODE_ENV === 'development' && (;
            <details className='mb-4 text-left'>;
              <summary className='text-sm text-muted-foreground cursor-pointer'>;
                Error Details (Development);
              </summary>;
              <pre className='mt-2 p-2 bg-muted rounded text-xs overflow-auto'>;
                {typeof error === 'string' ? error : error && error.message}
              </pre>;
            </details>;
          )}

          <div className='flex flex-col sm:flex-row gap-2 justify-center'>;
            {canRetry && (;
              <Button onClick={onRetry} variant='default'>;
                <RefreshCw className='h-4 w-4 mr-2' />;

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            {canRetry && (

<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            {canRetry && (
              <Button onClick={onRetry} variant="default">
                <RefreshCw className="h-4 w-4 mr-2" />
              <Button onClick={onRetry} variant='default'>
                <RefreshCw className='h-4 w-4 mr-2' />
              <Button onClick={onRetry} variant="default">
                <RefreshCw className="h-4 w-4 mr-2" />
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                Try Again {retryCount > 0 && `(${retryCount}/${maxRetries})`}
              </Button>
            )}

<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
            {action && (;

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
                Try Again {retryCount > 0 && `(${retryCount}/${maxRetries})`}
              </Button>
            )}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {action && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Button
                onClick={action.onClick}
                variant={canRetry ? 'outline' : 'default'}
              >
            
            {action && (
              <Button onClick={action.onClick} variant={canRetry ? "outline" : "default"}>
                {action.label}
              </Button>
            )}
<<<<<<< HEAD




>>>>>>>             {action && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <Button
                onClick={action.onClick}
                variant={canRetry ? 'outline' : 'default'}
              >
<<<<<<< HEAD
<<<<<<< HEAD

            {action && (
              <Button onClick={action.onClick} variant={canRetry ? "outline" : "default"}>

                {action.label}
              </Button>
            )}

            {secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant='ghost'>
<<<<<<< HEAD

=======
            
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            {secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant="ghost">

=======
            
            {action && (
              <Button onClick={action.onClick} variant={canRetry ? "outline" : "default"}>
>>>>>>>                 {action.label}
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

<<<<<<< HEAD
            {secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant='ghost'>
            
            {secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant="ghost">
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
                {secondaryAction.label}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </Button>
            )}
            {secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant='ghost'>
            
            {secondaryAction && (
              <Button onClick={secondaryAction.onClick} variant="ghost">
>>>>>>>                 {secondaryAction.label}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                {secondaryAction.label}
>>>>>>>               </Button>
            )}
          </div>
          {!isOnline && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <WifiOff className="h-4 w-4" />
              <span>Offline</span>
            </div>
          )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        </motion.div>
      </CardContent>
    </Card>
  )
}
<motion.div initial= {
  {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  scale: 0.8, opacity: 0
export const LoadingGrid: React.FC<LoadingGridProps> = ({
  count = 8
  columns = 4
  variant = 'card'
  className
}) => {  const gridClasses = {
    card: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} gap-6`
    list: 'space-y-4'
    table: 'space-y-2'
  }
  const itemClasses = {
    card: 'p-6 space-y-4'
    list: 'p-4 space-y-3'
    table: 'p-3 space-y-2'
  }
  return (
    <div className={cn(gridClasses[variant], className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className='animate-pulse'>          <CardContent className={itemClasses[variant]}>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======


            {secondaryAction && (;
              <Button onClick={secondaryAction && secondaryAction.onClick} variant='ghost'>;
                {secondaryAction && secondaryAction.label}
              </Button>;
            )}
          </div>;

          {!isOnline && (;
            <div className='mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground'>;
              <WifiOff className='h-4 w-4' />;
              <span>Offline</span>;
            </div>;
          )}
        </motion && motion.div>;

  scale: 0.8, opacity: 0 

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        </motion.div>;

      </CardContent>;
    </Card>;
  );
};
<motion&& motion.div initial= {
  {
  scale: 0 && 0.8, opacity: 0 

<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  scale: 0.8, opacity: 0 
        </motion.div>;
      </CardContent>;
    </Card>;
  );
},;
// Loading state for lists/grids;
interface LoadingGridProps {;
  count?: number,;
  columns?: number,;
  variant?: 'card' | 'list' | 'table',;
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
}
// Performance indicator;
interface PerformanceIndicatorProps {

  is_loading?: boolean;
  load_time?: number;
  item_count?: number;
  class_name?: string;
export const PerformanceIndicator: React.FC < PerformanceIndicatorProps> = ({
  is_loading = false,
  load_time,
  item_count,
  class_name,

}) => {
  const getPerformanceColor = (time: number) =>: any {
    // Check condition
if (return 'text - green - 500') {
  $2
}
    // Check condition
if (return 'text - yellow - 500') {
  $2
}
    return 'text - red - 500';
  }
  // Check condition
if ( {) {
  $2
}


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
export const LoadingGrid: React.FC<LoadingGridProps> = ({
  count = 8,
  columns = 4,
  variant = 'card',
<<<<<<< HEAD
<<<<<<< HEAD

=======
xport const LoadingGrid: React.FC<LoadingGridProps> = ({
  count = 8,
  columns = 4,
  variant = 'card',
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  className,
}) => {  const gridClasses = {
    card: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} gap-6`,
    list: 'space-y-4',
    table: 'space-y-2',
  }
  const itemClasses = {
    card: 'p-6 space-y-4',
    list: 'p-4 space-y-3',
    table: 'p-3 space-y-2',
  }
  return (
    <div className={cn(gridClasses[variant], className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className='animate-pulse'>          <CardContent className={itemClasses[variant]}>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  className
}) => {
  const gridClasses = {
    card: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} gap-6`,
    list: 'space-y-4',
    table: 'space-y-2'
  },
<<<<<<< HEAD
export const LoadingGrid: React.FC<LoadingGridProps> = ({
  count = 8,
  columns = 4,
  variant = 'card',
>>>>>>> 
=======

  const itemClasses = {
    card: 'p-6 space-y-4',
    list: 'p-4 space-y-3',
    table: 'p-3 space-y-2'
  },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  return (
    <div className={cn(gridClasses[variant], className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="animate-pulse">
          <CardContent className={itemClasses[variant]}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            {variant === 'card' && (
=======
>>>>>>>             {variant === 'card' && (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {variant === 'card' && (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <>
                <Skeleton variant="rectangular" className="h-32" />
                <div className="space-y-2">
                  <Skeleton variant="text" className="h-6 w-3/4" />
                  <Skeleton variant="text" lines={2} />
                  <div className="flex gap-2">
                    <Skeleton variant="text" className="h-4 w-16" />
                    <Skeleton variant="text" className="h-4 w-20" />
                  </div>
                </div>
              </>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
            
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {variant === 'list' && (
              <div className="flex gap-4">
                <Skeleton variant="circular" />
                <div className="flex-1 space-y-2">
                  <Skeleton variant="text" className="h-5 w-1/2" />
                  <Skeleton variant="text" lines={2} />
                </div>
              </div>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
            
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
            
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            {variant === 'table' && (
              <div className="flex items-center gap-4">
                <Skeleton variant="text" className="h-4 w-1/4" />
                <Skeleton variant="text" className="h-4 w-1/3" />
                <Skeleton variant="text" className="h-4 w-1/6" />
                <Skeleton variant="text" className="h-4 w-1/4" />
              </div>
            )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
// Performance indicator
interface PerformanceIndicatorProps {
  isLoading?: boolean
  loadTime?: number
  itemCount?: number
  className?: string
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const PerformanceIndicator: React.FC<PerformanceIndicatorProps> = ({
  isLoading = false
  loadTime
  itemCount
  className
}) => {
  const getPerformanceColor = (time: number) => {
    if (time < 100) return 'text-green-500'
    if (time < 300) return 'text-yellow-500'
    return 'text-red-500'
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          </CardContent>;
        </Card>;
      ))}
    </div>;
  );
},;
// Performance indicator;
interface PerformanceIndicatorProps {;
  isLoading?: boolean,;
  loadTime?: number,;
  itemCount?: number,;
  className?: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export const PerformanceIndicator: React.FC<PerformanceIndicatorProps> = ({
  isLoading = false,
  loadTime,
  itemCount,
<<<<<<< HEAD
<<<<<<< HEAD

=======
xport const PerformanceIndicator: React.FC<PerformanceIndicatorProps> = ({
  isLoading = false,
  loadTime,
  itemCount,
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  className,
}) => {
  const getPerformanceColor = (time: number) => {
    if (time < 100) return 'text-green-500'
    if (time < 300) return 'text-yellow-500'
    return 'text-red-500'
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  className
}) => {
  const getPerformanceColor = (time: number) => {
    if (time < 100) return 'text-green-500',
    if (time < 300) return 'text-yellow-500',
    return 'text-red-500'
  },

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (isLoading) {
    return (
      <Badge variant="outline" className={cn('text-xs', className)}>
        <LoadingSpinner size="sm" />
        <span className="ml-1">Loading...</span>
      </Badge>
    )
<<<<<<< HEAD
<<<<<<< HEAD
  }

=======
>>>>>>>   if (isLoading) {
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
export const PerformanceIndicator: React.FC<PerformanceIndicatorProps> = ({
  isLoading = false,
  loadTime,
  itemCount,


  if (isLoading) {
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>     return (
=======
    return (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      <Badge variant='outline' className={cn ('text - xs', class_name)}>;
        <LoadingSpinner size='sm' />;
        <span className='ml - 1'>Loading...</span>;
      </Badge>);
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
    >
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

  return (
    <div className={cn('flex items-center gap-2 text-xs text-muted-foreground', className)}>
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  }
    >

  return (
    <div className={cn('flex items-center gap-2 text-xs text-muted-foreground', className)}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {loadTime && (
        <Badge variant="outline" className={getPerformanceColor(loadTime)}>
          <Zap className="h-3 w-3 mr-1" />
          {loadTime}ms
        </Badge>
      )}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

}
}
}
}

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      {itemCount && (;
        <span>{itemCount} items loaded</span>;
      )}

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {itemCount && <span>{itemCount} items loaded</span>}
    </div>
  )
};
};
};
}
}
}

}
}
}
}
      {itemCount && (;
        <span>{itemCount} items loaded</span>;
      )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </div>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> 
>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======

    >;
      {load_time && (
        <Badge variant='outline' className={getPerformanceColor (load_time)}>;
          <Zap className='h - 3 w - 3 mr - 1' />;
          {load_time}ms;
        </Badge>)}
      {item_count && <span>{item_count} items loaded</span>}
    </div>);
}
}
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
