<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
  variant?: 'default' | 'pulse' | 'dots';
=======
<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
=======
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
>>>>>>> origin/cursor/build-and-fix-errors-e276

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
<<<<<<< HEAD
  variant?: 'default' | 'primary' | 'secondary' | 'white';
  className?: string;
  text?: string;
<<<<<<< HEAD
=======
  className?: string;
  text?: string;
  variant?: 'default' | 'pulse' | 'dots';
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
}

export function LoadingSpinner({ 
  size = 'md', 
<<<<<<< HEAD
  className, 
  text,
  variant = 'default' 
=======
<<<<<<< HEAD
  variant = 'default',
  className = '',
  text
=======
  className, 
  text,
  variant = 'default' 
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

<<<<<<< HEAD
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
=======
<<<<<<< HEAD
  const variantClasses = {
    default: 'text-zion-cyan',
    primary: 'text-zion-blue',
    secondary: 'text-zion-purple',
    white: 'text-white'
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  };

  if (variant === 'pulse') {
    return (
      <div className={cn("flex flex-col items-center justify-center", className)}>
        <div className={cn(
          "rounded-full bg-zion-purple animate-pulse",
          sizeClasses[size]
        )} />
        {text && (
          <p className={cn(
            "mt-2 text-zion-slate-light text-center",
            textSizeClasses[size]
          )}>
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn("flex flex-col items-center justify-center", className)}>
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        {text && (
          <p className={cn(
            "mt-3 text-zion-slate-light text-center",
            textSizeClasses[size]
          )}>
            {text}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <motion.div
        className={cn(
          "border-2 border-zion-blue-light border-t-zion-purple rounded-full",
          sizeClasses[size]
        )}
<<<<<<< HEAD
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
=======
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </motion.div>
      
=======
  variant?: "default" | "pulse" | "dots" | "bars";
}

export function LoadingSpinner({ 
  size = "md", 
  className, 
  text,
  variant = "default" 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg"
  };

  if (variant === "pulse") {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        <div className={cn("relative", sizeClasses[size])}>
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple"
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
          <motion.div
            className="absolute inset-1 rounded-full bg-zion-blue-dark"
            animate={{
              scale: [1, 0.8, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        {text && (
          <motion.p
            className={cn("text-zion-slate-light font-medium", textSizes[size])}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        {text && (
          <motion.p
            className={cn("text-zion-slate-light font-medium", textSizes[size])}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  if (variant === "bars") {
    return (
      <div className={cn("flex flex-col items-center gap-3", className)}>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-gradient-to-t from-zion-cyan to-zion-purple rounded-full"
              style={{ height: `${(i + 1) * 8}px` }}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        {text && (
          <motion.p
            className={cn("text-zion-slate-light font-medium", textSizes[size])}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {text}
          </motion.p>
        )}
      </div>
    );
  }

  // Default spinner
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-zion-cyan/20"
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-zion-cyan"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-zion-purple"
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      {text && (
        <motion.p 
          className={cn(
            "mt-3 text-zion-slate-light text-center",
            textSizeClasses[size]
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ delay: 0.5, duration: 0.5 }}
=======
          transition={{ delay: 0.2 }}
          className="text-zion-slate-light font-medium text-sm"
=======
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  if (variant === 'pulse') {
    return (
      <div className={cn("flex flex-col items-center justify-center", className)}>
        <div className={cn(
          "rounded-full bg-zion-purple animate-pulse",
          sizeClasses[size]
        )} />
        {text && (
          <p className={cn(
            "mt-2 text-zion-slate-light text-center",
            textSizeClasses[size]
          )}>
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn("flex flex-col items-center justify-center", className)}>
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-zion-cyan rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        {text && (
          <p className={cn(
            "mt-3 text-zion-slate-light text-center",
            textSizeClasses[size]
          )}>
            {text}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center justify-center", className)}>
      <motion.div
        className={cn(
          "border-2 border-zion-blue-light border-t-zion-purple rounded-full",
          sizeClasses[size]
        )}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {text && (
        <motion.p 
          className={cn(
            "mt-3 text-zion-slate-light text-center",
            textSizeClasses[size]
          )}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

<<<<<<< HEAD
export function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" text="Loading amazing content..." />
=======
<<<<<<< HEAD
<<<<<<< HEAD
// Page loading component
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      <div className="text-center text-white">
        <LoadingSpinner size="xl" variant="white" className="mx-auto mb-4" />
        <h1 className="text-2xl font-bold">Loading Zion Tech Group...</h1>
        <p className="mt-2 text-blue-200">Please wait while we prepare your experience.</p>
=======
// Full page loading component
export function FullPageLoader({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-zion-blue-dark/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="xl" text={text} variant="pulse" />
        <motion.div
          className="mt-8 text-zion-slate-light text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Please wait while we prepare your experience...
        </motion.div>
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
export function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="xl" text="Loading amazing content..." />
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      </div>
    </div>
  );
}

<<<<<<< HEAD
export function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <LoadingSpinner size="lg" text="Loading section..." />
    </div>
  );
}

export function CardLoader() {
  return (
    <div className="p-8 flex items-center justify-center">
      <LoadingSpinner size="md" text="Loading..." />
=======
<<<<<<< HEAD
// Inline loading component
export function InlineLoader({ size = 'sm', variant = 'default' }: LoadingSpinnerProps) {
  return (
<<<<<<< HEAD
    <div className="inline-flex items-center">
      <LoadingSpinner size={size} variant={variant} className="mr-2" />
      <span className="text-sm text-gray-600">Loading...</span>
=======
    <div className="inline-flex items-center gap-2">
      <LoadingSpinner size={size} variant="dots" />
      {text && <span className="text-zion-slate-light text-sm">{text}</span>}
>>>>>>> origin/cursor/build-and-fix-errors-e276
=======
export function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <LoadingSpinner size="lg" text="Loading section..." />
    </div>
  );
}

export function CardLoader() {
  return (
    <div className="p-8 flex items-center justify-center">
      <LoadingSpinner size="md" text="Loading..." />
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    </div>
  );
}