import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'sm' | 'default' | 'lg' | 'icon';
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  default: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border border-gray-300 text-gray-900 hover:bg-gray-50',
  ghost: 'hover:bg-gray-50 text-gray-900',
  link: 'text-blue-600 underline-offset-4 hover:underline bg-transparent',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-9 px-3 rounded-md text-sm',
  default: 'h-10 px-4 rounded-md text-sm',
  lg: 'h-11 px-8 rounded-md text-base',
  icon: 'h-10 w-10 rounded-md',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
    const base = 'inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50';
    const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = 'Button';

export default Button;