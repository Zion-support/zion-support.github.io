import React from 'react';
export function Button({ children, variant = 'default', size = 'md', asChild = false, className = '', onClick, type = 'button', disabled = false }) {
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantClasses = {
        default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan',
        outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan',
        ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate',
        link: 'text-zion-cyan hover:underline focus:ring-zion-cyan'
    };
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
        icon: 'w-10 h-10 p-0'
    };
    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    if (asChild) {
        return <span className={classes}>{children}</span>;
    }
    return (<button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>);
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth, 
    loading = false, 
    leftIcon, 
    rightIcon, 
    children, 
    disabled, 
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg 
            className="animate-spin -ml-1 mr-2 h-4 w-4" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && (
          <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
