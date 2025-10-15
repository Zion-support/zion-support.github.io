import React from 'react';

interface FuturisticTextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'gradient' | 'neon';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  className?: string;
  glow?: boolean;
  animate?: boolean;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  children,
  variant = 'body',
  size = 'base',
  className = '',
  glow = false,
  animate = false,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'heading':
        return 'font-bold text-white';
      case 'subheading':
        return 'font-semibold text-gray-200';
      case 'body':
        return 'font-normal text-gray-300';
      case 'caption':
        return 'font-light text-gray-400 text-sm';
      case 'gradient':
        return 'font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent';
      case 'neon':
        return 'font-bold text-cyan-400';
      default:
        return 'font-normal text-gray-300';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'text-xs';
      case 'sm':
        return 'text-sm';
      case 'base':
        return 'text-base';
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
      case '2xl':
        return 'text-2xl';
      case '3xl':
        return 'text-3xl';
      case '4xl':
        return 'text-4xl';
      case '5xl':
        return 'text-5xl';
      case '6xl':
        return 'text-6xl';
      case '7xl':
        return 'text-7xl';
      default:
        return 'text-base';
    }
  };

  const getGlowClasses = () => {
    if (!glow) return '';
    return 'drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]';
  };

  const getAnimateClasses = () => {
    if (!animate) return '';
    return 'animate-pulse';
  };

  const combinedClasses = [
    getVariantClasses(),
    getSizeClasses(),
    getGlowClasses(),
    getAnimateClasses(),
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={combinedClasses}>
      {children}
    </span>
  );
};

export default FuturisticText;