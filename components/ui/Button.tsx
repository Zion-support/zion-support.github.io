<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
import React from 'react';
import Link from 'next/link';

<<<<<<< HEAD
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md'
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-primary text-primary-foreground hover: bg-primary/90':
              variant === 'default',
            'bg-destructive text-destructive-foreground hover: bg-destructive/90':
              variant === 'destructive',
            'border border-input bg-background hover: bg-accent hover:text-accent-foreground':
              variant === 'outline',
            'bg-secondary text-secondary-foreground hover: bg-secondary/80':
              variant === 'secondary',
            'hover: bg-accent hover:text-accent-foreground':
              variant === 'ghost',
            'text-primary underline-offset-4 hover: underline':
              variant === 'link',
          },
          {
            'h-10 px-4 py-2': size === 'default',
            'h-9 rounded-md px-3': size === 'sm',
            'h-11 rounded-md px-8': size === 'lg',
            'h-10 w-10': size === 'icon',
          },
          className
        )}
        ref={ref}
        {...props}
      />
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import React from "react";

import React from 'react';
import Link from 'next/link';
import React from "react";
origin/cursor/automate-test-improve-and-merge-code-2533
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;


  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset',
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right',
  style?: React.CSSProperties
}
const Button: React.FC<ButtonProps> = ({
    primary:
      'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 border-0',
    secondary:
      'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 hover:shadow-lg hover:-translate-y-0.5',
    ghost:
      'bg-transparent hover:bg-white/5 text-gray-300 hover:text-white hover:shadow-md hover:-translate-y-0.5',
    outline:
      'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 hover:shadow-md hover:-translate-y-0.5',
  };
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

export { Button };
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
