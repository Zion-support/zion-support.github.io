import React from 'react';
interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'border';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = 'bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-300';
  
  const variantClasses = {
    default: 'border border-cyan-500/20 hover:border-cyan-500/40',
    glow: 'border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20',
    border: 'border-2 border-cyan-500/30 hover:border-cyan-500/60'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;