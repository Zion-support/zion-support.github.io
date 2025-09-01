import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ModernButtonProps {

  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const ModernButton: React.FC<ModernButtonProps> = ({

  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  className}) => {

  const baseClasses = cn(
    'relative inline-flex items-center justify-center font-semibold transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zion-slate',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    'rounded-xl border-2',
    fullWidth ? 'w-full' : '',
    className
  );

  const sizeClasses = {

    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const variantClasses = {

    primary: 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white border-transparent hover:from-zion-cyan/90 hover:to-zion-blue/90 focus:ring-zion-cyan',
    secondary: 'bg-zion-slate-light/20 text-white border-zion-slate-light/30 hover:bg-zion-slate-light/30 focus:ring-zion-slate-light',
    outline: 'bg-transparent text-zion-cyan border-zion-cyan hover:bg-zion-cyan hover:text-white focus:ring-zion-cyan',
    ghost: 'bg-transparent text-white border-transparent hover:bg-white/10 focus:ring-white/50',
    destructive: 'bg-red-600 text-white border-transparent hover:bg-red-700 focus:ring-red-500',
    neon: 'bg-transparent text-zion-cyan border-zion-cyan shadow-neon hover:shadow-neon-lg focus:ring-zion-cyan'
  };

  const isDisabled = disabled || loading;

  return (
    <motion.button
      type={type}
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant])}
      onClick={onClick}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!isDisabled ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Loading spinner */}
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Loader2 className="w-5 h-5 animate-spin" />
        </motion.div>
      )}

      {/* Content */}
      <div className={cn(
        'flex items-center gap-2',
        loading ? 'opacity-0' : 'opacity-100'
      )}>
        {icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </div>

      {/* Hover effect overlay */}
      {!isDisabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 rounded-xl"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  );
};