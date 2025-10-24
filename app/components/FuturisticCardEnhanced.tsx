import React from 'react';
interface FuturisticcardenhancedProps {
  className?: string;
<<<<<<< HEAD
  children?: React.ReactNode;
}
export default function Futuristiccardenhanced({ className = '', children, ...props }: FuturisticcardenhancedProps) {
=======
  variant?: 'default' | 'gradient' | 'glass';
  glowColor?: string;
  hoverEffect?: boolean;
  animated?: boolean;
  neon?: boolean;
}

const FuturisticCardEnhanced: React.FC<FuturisticCardEnhancedProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  glowColor,
  hoverEffect = true,
  animated = false,
  neon = false
}) => {
  const baseClasses = "relative rounded-xl overflow-hidden transition-all duration-300";
  
  const variantClasses = {
    default: "bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40",
    gradient: "bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-cyan-500/20 hover:border-cyan-500/40",
    glass: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
  };

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0326
  return (
    <div className={`futuristiccardenhanced-component ${className}`} {...props}>
      {children}
    </div>
  );
}