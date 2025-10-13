import React from 'react';
import { ArrowRight, Play, Sparkles, Zap, Star, Rocket } from 'lucide-react';

interface FuturisticButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'neon' | 'cyber' | 'holographic';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: 'arrow' | 'play' | 'sparkles' | 'zap' | 'star' | 'rocket' | 'none';
  iconPosition?: 'left' | 'right';
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  glow?: boolean;
  animated?: boolean;
}

const FuturisticButton: React.FC<FuturisticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'none',
  iconPosition = 'right',
  className = '',
  onClick,
  href,
  disabled = false,
  glow = true,
  animated = true
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white',
    secondary: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900',
    neon: 'bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white shadow-lg shadow-pink-500/25',
    cyber: 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg shadow-green-500/25',
    holographic: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white shadow-lg shadow-purple-500/25'
  };

  const iconComponents = {
    arrow: ArrowRight,
    play: Play,
    sparkles: Sparkles,
    zap: Zap,
    star: Star,
    rocket: Rocket
  };

  const IconComponent = icon !== 'none' ? iconComponents[icon] : null;

  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${glow ? 'shadow-lg hover:shadow-xl' : ''}
    ${animated ? 'hover:shadow-cyan-500/25' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}
    ${className}
  `.trim();

  const buttonContent = (
    <>
      {icon !== 'none' && iconPosition === 'left' && IconComponent && (
        <IconComponent className={`w-5 h-5 ${iconPosition === 'left' ? 'mr-2' : 'ml-2'} group-hover:scale-110 transition-transform`} />
      )}
      {children}
      {icon !== 'none' && iconPosition === 'right' && IconComponent && (
        <IconComponent className={`w-5 h-5 ${iconPosition === 'left' ? 'mr-2' : 'ml-2'} group-hover:scale-110 transition-transform`} />
      )}
      
      {/* Animated background effect */}
      {animated && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      )}
      
      {/* Glow effect */}
      {glow && variant === 'neon' && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-20"></div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} group`}
        onClick={onClick}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} group`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default FuturisticButton;