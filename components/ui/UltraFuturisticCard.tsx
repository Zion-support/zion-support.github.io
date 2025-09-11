import React from 'react';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'premium' | 'enterprise';
  glow?: boolean;
}

const UltraFuturisticCard: React.FC<UltraFuturisticCardProps> = ({
  children,
  className = '',
  variant = 'default',
  glow = false
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'premium':
        return 'border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-blue-900/20';
      case 'enterprise':
        return 'border-yellow-500/50 bg-gradient-to-br from-yellow-900/20 to-orange-900/20';
      default:
        return 'border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-purple-900/20';
    }
  }[variant];

  const getGlowClasses = () => {
    if (!glow) return '';
    switch (variant) {
      case 'premium':
        return 'shadow-purple-500/25 shadow-2xl';
      case 'enterprise':
        return 'shadow-yellow-500/25 shadow-2xl';
      default:
        return 'shadow-blue-500/25 shadow-2xl';
    }
  };

  return (
    <div className={`
      relative p-6 rounded-xl border backdrop-blur-sm
      ${getVariantClasses()}
      ${getGlowClasses()}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default UltraFuturisticCard;