import React from 'react';

interface ResponsiveCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsivePadding?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  responsive?: boolean;
}

const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  padding = 'md',
  responsivePadding,
  hover = false,
  clickable = false,
  onClick,
  responsive = true
}) => {
  const baseClasses = [
    'rounded-xl',
    'transition-all',
    'duration-300',
    'backdrop-blur-sm'
  ];

  const variantClasses = {
    default: 'bg-white/10 border border-white/20',
    elevated: 'bg-white/10 border border-white/20 shadow-lg hover:shadow-xl',
    outlined: 'bg-transparent border border-white/30',
    filled: 'bg-slate-800/50 border border-slate-700/50'
  };

  const sizeClasses = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-2 sm:p-3',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
    xl: 'p-8 sm:p-12'
  };

  const responsivePaddingClasses = responsive && responsivePadding ? [
    responsivePadding.sm && `sm:${responsivePadding.sm}`,
    responsivePadding.md && `md:${responsivePadding.md}`,
    responsivePadding.lg && `lg:${responsivePadding.lg}`,
    responsivePadding.xl && `xl:${responsivePadding.xl}`
  ].filter(Boolean) : [];

  const interactiveClasses = [
    clickable && 'cursor-pointer',
    hover && 'hover:scale-105 hover:shadow-2xl',
    clickable && 'hover:border-cyan-400/50',
    onClick && 'focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2'
  ];

  const cardClasses = [
    ...baseClasses,
    variantClasses[variant],
    responsive ? paddingClasses[padding] : sizeClasses[size],
    ...responsivePaddingClasses,
    ...interactiveClasses,
    className
  ].filter(Boolean).join(' ');

  const content = <>{children}</>;

  if (clickable || onClick) {
    return (
      <div
        className={cardClasses}
        onClick={onClick}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onKeyDown={(e) => {
          if (clickable && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            onClick?.();
          }
        }}
      >
        {content}
      </div>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
};

export default ResponsiveCard;