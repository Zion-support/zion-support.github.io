import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Zap, Brain, Cpu, Rocket, Shield, Cloud, Database } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'zion' | 'ai' | 'quantum' | 'cyber' | 'futuristic';
  text?: string;
  showText?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24'
};

const textSizes = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-lg'
};

export function LoadingSpinner({
  size = 'md',
  variant = 'default',
  text = 'Loading...',
  showText = true,
  className = ''
}: LoadingSpinnerProps) {
  const renderSpinner = () => {
    switch (variant) {
      case 'zion':
        return <ZionSpinner size={size} />;
      case 'ai':
        return <AISpinner size={size} />;
      case 'quantum':
        return <QuantumSpinner size={size} />;
      case 'cyber':
        return <CyberSpinner size={size} />;
      case 'futuristic':
        return <FuturisticSpinner size={size} />;
      default:
        return <DefaultSpinner size={size} />;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {renderSpinner()}
      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`mt-3 text-center ${textSizes[size]}`}
        >
          <span className="text-slate-300 font-medium">{text}</span>
        </motion.div>
      )}
    </div>
  );
}

// Default Spinner
function DefaultSpinner({ size }: { size: LoadingSpinnerProps['size'] }) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} border-4 border-slate-200 border-t-cyan-500 rounded-full`}
    />
  );
}

// Zion Branded Spinner
function ZionSpinner({ size }: { size: LoadingSpinnerProps['size'] }) {
  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className={`${sizeClasses[size]} border-4 border-cyan-400/20 rounded-full`}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-t-cyan-400 rounded-full`}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="text-cyan-400 font-bold text-xs">ZION</span>
      </motion.div>
    </div>
  );
}

// AI Themed Spinner
function AISpinner({ size }: { size: LoadingSpinnerProps['size'] }) {
  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className={`${sizeClasses[size]} border-4 border-blue-400/20 rounded-full`}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-t-blue-400 rounded-full`}
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Brain className="w-1/2 h-1/2 text-blue-400" />
      </motion.div>
    </div>
  );
}

// Quantum Computing Spinner
function QuantumSpinner({ size }: { size: LoadingSpinnerProps['size'] }) {
  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className={`${sizeClasses[size]} border-4 border-purple-400/20 rounded-full`}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-t-purple-400 rounded-full`}
      />
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 5, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Cpu className="w-1/2 h-1/2 text-purple-400" />
      </motion.div>
    </div>
  );
}

// Cyberpunk Spinner
function CyberSpinner({ size }: { size: LoadingSpinnerProps['size'] }) {
  return (
    <div className="relative">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className={`${sizeClasses[size]} border-4 border-green-400/20 rounded-full`}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-t-green-400 rounded-full`}
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Shield className="w-1/2 h-1/2 text-green-400" />
      </motion.div>
    </div>
  );
}

// Futuristic Spinner
function FuturisticSpinner({ size }: { size: LoadingSpinnerProps['size'] }) {
  return (
    <div className="relative">
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className={`${sizeClasses[size]} border-4 border-cyan-400/20 rounded-full`}
      />
      
      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-2 ${sizeClasses[size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm']} border-4 border-transparent border-t-blue-400 rounded-full`}
      />
      
      {/* Inner ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className={`absolute inset-4 ${sizeClasses[size === 'xl' ? 'md' : size === 'lg' ? 'sm' : 'sm']} border-4 border-transparent border-t-purple-400 rounded-full`}
      />
      
      {/* Center icon */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "linear" }
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Rocket className="w-1/3 h-1/3 text-cyan-400" />
      </motion.div>
    </div>
  );
}

// Full Screen Loading Component
export function FullScreenLoader({
  variant = 'zion',
  text = 'Loading amazing experiences...',
  className = ''
}: Omit<LoadingSpinnerProps, 'size'>) {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center ${className}`}>
      <div className="text-center">
        <LoadingSpinner variant={variant} size="xl" text={text} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="text-cyan-400 text-sm animate-pulse">
            Powered by Zion Tech Group
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Inline Loading Component
export function InlineLoader({
  size = 'sm',
  variant = 'default',
  className = ''
}: Omit<LoadingSpinnerProps, 'text' | 'showText'>) {
  return (
    <LoadingSpinner
      size={size}
      variant={variant}
      showText={false}
      className={className}
    />
  );
}

// Button Loading State
export function ButtonLoader({
  size = 'sm',
  className = ''
}: {
  size?: LoadingSpinnerProps['size'];
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={className}
    >
      <Loader2 className={`${sizeClasses[size]} animate-spin text-current`} />
    </motion.div>
  );
}

// Page Loading Component
export function PageLoader({
  variant = 'zion',
  text = 'Loading page...',
  className = ''
}: Omit<LoadingSpinnerProps, 'size'>) {
  return (
    <div className={`min-h-[50vh] flex items-center justify-center ${className}`}>
      <LoadingSpinner variant={variant} size="lg" text={text} />
    </div>
  );
}

// Content Loading Skeleton
export function LoadingSkeleton({
  lines = 3,
  className = ''
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="h-4 bg-slate-700 rounded animate-pulse"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
}