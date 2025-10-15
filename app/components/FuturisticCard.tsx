import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
}

const FuturisticCard: React.FC<FuturisticCardProps> = ({ 
  children, 
  className = '',
  variant = 'default'
}) => {
  const variantClasses = {
    default: 'bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20',
    elevated: 'bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 shadow-lg shadow-cyan-500/10',
    outlined: 'bg-transparent border border-cyan-500/30',
  };

  return (
    <div className={`rounded-xl p-6 ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default FuturisticCard;
