import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ButtonProps } from '../../types/components';
import { LoadingSpinner } from '../LoadingSpinner';
import { cn } from '../../utils/cn';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps & { asChild?: boolean }>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    disabled = false, 
    loading = false, 
    onClick, 
    type = 'button', 
    fullWidth = false, 
    className = '', 
    asChild = false,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      primary: 'bg-zion-blue text-white hover:bg-zion-blue-dark focus:ring-zion-blue',
      secondary: 'bg-zion-slate text-white hover:bg-zion-slate-dark focus:ring-zion-slate',
      outline: 'border-2 border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white focus:ring-zion-blue',
      ghost: 'text-zion-blue hover:bg-zion-blue/10 focus:ring-zion-blue',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
    };
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    };
    
    const widthClasses = fullWidth ? 'w-full' : '';
    
    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      widthClasses,
      className
    );

    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={classes}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {loading && (
          <LoadingSpinner 
            size="small" 
            color={variant === 'outline' || variant === 'ghost' ? 'primary' : 'white'} 
            className="mr-2" 
          />
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';