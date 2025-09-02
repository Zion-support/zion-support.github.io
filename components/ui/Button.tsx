import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  className?: string;
}

const variantClasses: Record<string, string> = {
  default: 'bg-blue-600 text-white hover:bg-blue-700',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
  outline: 'border border-slate-600 text-slate-200 hover:bg-slate-700',
  secondary: 'bg-slate-700 text-slate-100 hover:bg-slate-600',
  ghost: 'hover:bg-slate-700 text-slate-200',
  link: 'text-blue-500 underline-offset-4 hover:underline',
};

const sizeClasses: Record<string, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp: any = asChild ? 'span' : 'button';
    const classes = `${baseClasses} ${variantClasses[variant] || variantClasses['default']} ${sizeClasses[size] || sizeClasses['default']} ${className}`.trim();
    return <Comp className={classes} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button };