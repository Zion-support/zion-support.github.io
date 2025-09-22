import React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    href, 
    onClick, 
    disabled = false, 
    type = 'button',
    icon,
    iconPosition = 'left',
    style,
    ...props 
  }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
      ghost: 'hover:bg-gray-100',
    };
    
    const sizeClasses = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-8 text-lg',
    };
    
    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
    
    const content = (
      <>
        {icon && iconPosition === 'left' && (
          <span className="mr-2">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === 'right' && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );
    
    if (href) {
      return (
        <Link href={href} className={classes} style={style}>
          {content}
        </Link>
      );
    }
    
    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        style={style}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export default Button;