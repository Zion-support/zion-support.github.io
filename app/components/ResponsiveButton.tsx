import React from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ResponsiveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  responsiveSize?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  responsive?: boolean;
}

const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  responsiveSize,
  icon,
  iconPosition = 'right',
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  responsive = true
}) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-semibold',
    'rounded-lg',
    'transition-all',
    'duration-300',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'group'
  ];

  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 focus:ring-cyan-500 shadow-lg hover:shadow-cyan-500/25',
    secondary: 'bg-slate-700 text-white hover:bg-slate-600 focus:ring-slate-500',
    outline: 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 focus:ring-cyan-500',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10 focus:ring-white',
    danger: 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 focus:ring-red-500 shadow-lg hover:shadow-red-500/25'
  };

  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const responsiveSizeClasses = responsive && responsiveSize ? [
    responsiveSize.sm && `sm:${responsiveSize.sm}`,
    responsiveSize.md && `md:${responsiveSize.md}`,
    responsiveSize.lg && `lg:${responsiveSize.lg}`,
    responsiveSize.xl && `xl:${responsiveSize.xl}`
  ].filter(Boolean) : [];

  const buttonClasses = [
    ...baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    ...responsiveSizeClasses,
    fullWidth && 'w-full',
    loading && 'cursor-wait',
    className
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {!loading && icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      {!loading && !icon && iconPosition === 'right' && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        aria-disabled={disabled || loading}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {content}
    </button>
  );
};

export default ResponsiveButton;