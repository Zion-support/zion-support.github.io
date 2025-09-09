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
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, disabled, onClick, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const classes = cn(buttonVariants({ variant, size, className }));

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