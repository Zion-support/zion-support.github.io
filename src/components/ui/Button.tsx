import React, { Suspense } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ButtonProps } from '../../types/components';
import LoadingSpinner from '../LoadingSpinner';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, loading = false, disabled, onClick, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    // Map custom variants to cva variants
    const mappedVariant = variant === 'primary' ? 'primary' : 
                         variant === 'danger' ? 'danger' : 
                         variant as 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    
    const mappedSize = size === 'md' ? 'md' : 
                      size === 'sm' ? 'sm' : 
                      size === 'lg' ? 'lg' : 
                      size as 'sm' | 'md' | 'lg';
    
    const classes = cn(buttonVariants({ 
      variant: mappedVariant, 
      size: mappedSize, 
      className 
    }));

    return (
      <Comp
        className={classes}
        disabled={disabled || loading}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {loading && (
          <Suspense fallback={<div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin mr-2" />}>
            <LoadingSpinner
              size="sm"
              className="mr-2"
            />
          </Suspense>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };