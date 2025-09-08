<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ButtonProps } from '../../types/components';
import LoadingSpinner from '../LoadingSpinner';
import { cn } from '../../utils/cn';
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-zion-blue text-white hover:bg-zion-blue-dark focus:ring-zion-blue",
        secondary: "bg-zion-slate text-white hover:bg-zion-slate-dark focus:ring-zion-slate",
        outline: "border-2 border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white focus:ring-zion-blue",
        ghost: "text-zion-blue hover:bg-zion-blue/10 focus:ring-zion-blue",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500"
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export { buttonVariants };
export type { VariantProps };

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
<<<<<<< HEAD
=======
=======
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  children: React.ReactNode
}

export function Button({ 
  variant = "default", 
  size = "default", 
  className = "", 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground"
  }
  
  const sizeClasses = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10"
  }
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
