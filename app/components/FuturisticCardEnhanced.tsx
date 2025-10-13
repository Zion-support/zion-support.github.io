import React from 'react';
interface FuturisticCardEnhancedProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass';
}

const FuturisticCardEnhanced: React.FC<FuturisticCardEnhancedProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = "relative rounded-xl overflow-hidden transition-all duration-300";
  
  const variantClasses = {
    default: "bg-slate-800/50 border border-cyan-500/20 hover:border-cyan-500/40",
    gradient: "bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-cyan-500/20 hover:border-cyan-500/40",
    glass: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
};

export default FuturisticCardEnhanced;