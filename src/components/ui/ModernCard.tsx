import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'glass' | 'neon';
  hoverEffect?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className,
  variant = 'default',
  hoverEffect = true,
  onClick,
  disabled = false,
}) => {
  const baseClasses = cn(
    'relative overflow-hidden rounded-2xl transition-all duration-300',
    'focus-within:ring-2 focus-within:ring-zion-cyan focus-within:ring-offset-2 focus-within:ring-offset-zion-slate',
    className
  );

  const variantClasses = {
    default: 'bg-zion-slate/80 backdrop-blur-sm border border-zion-slate-light/20',
    elevated: 'bg-zion-slate/90 backdrop-blur-md border border-zion-cyan/30 shadow-2xl',
    glass: 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl',
    neon: 'bg-zion-slate/80 backdrop-blur-sm border border-zion-cyan/50 shadow-neon'
  };

  const hoverClasses = hoverEffect && !disabled ? 'hover:scale-105 hover:shadow-2xl' : '';

  return (
    <motion.div
      className={cn(baseClasses, variantClasses[variant], hoverClasses)}
      whileHover={hoverEffect && !disabled ? { y: -8 } : {}}
      whileTap={onClick && !disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && !disabled && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
      disabled={disabled}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-zion-cyan/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-zion-purple/20 to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Hover glow effect */}
      {hoverEffect && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 via-transparent to-zion-purple/10 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
};