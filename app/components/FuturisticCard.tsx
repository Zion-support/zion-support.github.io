import React from 'react';

interface FuturisticCardProps {
  children: .Node;
  className?: string;
  variant?: &apos;default&apos; | &apos;glow&apos; | &apos;gradient&apos;;
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '', 
  variant = 'default' 
}) => {
  const baseClasses = &apos;rounded-xl p-6 border border-white/20 backdrop-blur-sm&apos;;
  
  const variantClasses = {
    default: &apos;bg-white/10&apos;,
    glow: &apos;bg-white/10 shadow-lg shadow-blue-500/20&apos;,
    gradient: &apos;bg-gradient-to-br from-blue-500/20 to-purple-500/20&apos;
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;