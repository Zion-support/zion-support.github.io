import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { Loader2 } from 'lucide-react';

interface EnhancedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  rounded?: boolean;
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    loadingText,
    leftIcon,
    rightIcon,
    fullWidth = false,
    rounded = false,
    disabled,
    className = '',
    ...props
  }, ref) => {
    const baseClasses = `
      inline-flex items-center justify-center gap-2 font-semibold
      transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${fullWidth ? 'w-full' : ''}
      ${rounded ? 'rounded-full' : 'rounded-lg'}
    `;

    const variants = {
      primary: `
        bg-gradient-to-r from-zion-cyan to-zion-purple 
        hover:from-zion-cyan-dark hover:to-zion-purple-dark
        text-white shadow-lg hover:shadow-xl
        focus:ring-zion-cyan focus:ring-offset-gray-900
        transform hover:scale-105 active:scale-95
      `,
      secondary: `
        bg-white/10 backdrop-blur-sm border border-white/20
        hover:bg-white/20 hover:border-white/30
        text-white shadow-md hover:shadow-lg
        focus:ring-white focus:ring-offset-gray-900
      `,
      outline: `
        border-2 border-zion-cyan bg-transparent
        hover:bg-zion-cyan hover:border-zion-cyan
        text-zion-cyan hover:text-white
        focus:ring-zion-cyan focus:ring-offset-gray-900
        transition-colors duration-200
      `,
      ghost: `
        bg-transparent hover:bg-white/10
        text-white hover:text-zion-cyan
        focus:ring-white focus:ring-offset-gray-900
      `,
      danger: `
        bg-gradient-to-r from-red-500 to-red-600
        hover:from-red-600 hover:to-red-700
        text-white shadow-lg hover:shadow-xl
        focus:ring-red-500 focus:ring-offset-gray-900
        transform hover:scale-105 active:scale-95
      `,
      success: `
        bg-gradient-to-r from-green-500 to-green-600
        hover:from-green-600 hover:to-green-700
        text-white shadow-lg hover:shadow-xl
        focus:ring-green-500 focus:ring-offset-gray-900
        transform hover:scale-105 active:scale-95
      `
    };

    const sizes = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-8 py-4 text-xl'
    };

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            {loadingText || 'Loading...'}
          </>
        ) : (
          <>
            {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

EnhancedButton.displayName = 'EnhancedButton';

export default EnhancedButton;