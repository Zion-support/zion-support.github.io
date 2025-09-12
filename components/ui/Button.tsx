import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../src/lib/utils';

<<<<<<< HEAD
const buttonVariants = cva(;
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {;
    variants: {;
      variant: {;
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:;
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:;
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:;
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",,
},
      size: {;
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",,
},,
},
    defaultVariants: {;
      variant: "default",
      size: "default",,
}
=======
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  style,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 border-0',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 hover:shadow-lg hover:-translate-y-0.5',
    ghost: 'bg-transparent hover:bg-white/5 text-gray-300 hover:text-white hover:shadow-md hover:-translate-y-0.5',
    outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 hover:shadow-md hover:-translate-y-0.5',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {/* Shine effect for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
      )}
      
      {icon && iconPosition === 'left' && <span className="mr-2 transition-transform duration-200 group-hover:scale-110">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 transition-transform duration-200 group-hover:scale-110">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    );
>>>>>>> origin/automation/changelog
  }
);

<<<<<<< HEAD
export interface ButtonProps;
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(;
  ({ className, variant, size, asChild = false, ...props }, ref) => {;
    const Comp = asChild ? 'span' : 'button';
    return (;
      <Comp;
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />;
    );
}
);
Button.displayName = "Button";

export default Button
=======
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {content}
    </button>
  );
};

export default Button;
>>>>>>> origin/automation/changelog
