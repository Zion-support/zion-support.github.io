import React, { ReactNode } from 'react';

interface FuturisticCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  hover = true 
}) => {
  const baseClasses = 'bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300';
  const hoverClasses = hover ? 'hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10' : '';
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;