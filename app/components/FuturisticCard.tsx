import React from 'react';
interface FuturisticcardProps {
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode;
}
export default function Futuristiccard({ className = '', children, ...props }: FuturisticcardProps) {
=======
  variant?: 'default' | 'glow' | 'border';
  glowColor?: string;
  hoverEffect?: boolean;
  animated?: boolean;
  neon?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  glowColor,
  hoverEffect = true,
  animated = false,
  neon = false
}) => {
  const baseClasses = 'bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-300';
  
  const variantClasses = {
    default: 'border border-cyan-500/20 hover:border-cyan-500/40',
    glow: 'border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20',
    border: 'border-2 border-cyan-500/30 hover:border-cyan-500/60'
  };

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0326
  return (
    <div className={`futuristiccard-component ${className}`} {...props}>
      {children}
    </div>
  );
}