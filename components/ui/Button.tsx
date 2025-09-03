<<<<<<< HEAD
import React from 'react;
import { cva, type VariantProps } from 'class-variance-authority;
import { cn } from '../../src/lib/utils;

const buttonVariants = cva(;
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible: outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', {'    variants: {'      variant: {;
        default: 'bg-primary text-primary-foreground hover: bg-primary/90',
    default: '        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    outline: '        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    ghost: '        link: 'text-primary underline-offset-4 hover:underline', },'      size: {'        default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    sm: '        lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
    icon: '      }, },'    defaultVariants: {;
      variant: 'default',
    size: 'default',
    size: '    }, }');

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(;
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? 'span' : 'button;
    return ('      <CompclassName={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button;
=======
import React from "react"
import * as React from "react""
import { Slot } from "@radix-ui/react-slot""
import { cva, type VariantProps } from "class-variance-authority"
"
import { cn } from "../../src/lib/utils"
const buttonVariants = cva()
}
export interface ButtonProps,
extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean,
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {"
    const Comp = asChild ? Slot : "button"
    return ("
      <Comp className="{cn(buttonVariants({" variant, size, className }))}"
        ref="{ref}"
        {...props}      />
    )
}

<<<<<<< HEAD
<<<<<<< HEAD
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
=======
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
>>>>>>> main

export default Button;
>>>>>>> origin/main
=======
)"
Button.displayName = "Button"

export default Component
>>>>>>> main
