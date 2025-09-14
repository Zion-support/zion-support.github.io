import React from 'react';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'premium' | 'enterprise';
}

export default function UltraFuturisticCard({ 
  children
  className = ''
  variant = 'default' 
}: UltraFuturisticCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'premium':
        return 'border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-blue-900/20';
      case 'enterprise':
        return 'border-cyan-500/50 bg-gradient-to-br from-cyan-900/20 to-purple-900/20';
      default:
        return 'border-white/20 bg-white/5';
    }
  };

  return (
    <div className={`
      relative p-6 rounded-xl border backdrop-blur-sm
      ${getVariantClasses()}
      hover:border-white/40 transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}