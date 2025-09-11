import React from './react';
import Link from './next / link';
interface ButtonProps {
  children: React.ReactNode, href?: string,
  on_click?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  class_name?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
const Button: React.FC < ButtonProps> = ({

  children,
  href,
  on_click,
  type = "button",
  variant = "primary",
  size = "md",
  class_name = "",
  disabled = false,
  style
}) => {


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";
import Link from "next/link";

interface ButtonProps {;
  children: React && React.ReactNode, href?: string,;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  style?: React && React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({;
  children,;
  href,;
  onClick,;
  type = "button",;
  variant = "primary",;
  size = "md",;
  className = "",;
  disabled = false,;
  style,;
}) => {;
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200";

  const sizeClasses = {;
    sm: "px-3 py-1 && 1.5 text-sm",;
    md: "px-4 py-2 text-base",;
    lg: "px-6 py-3 text-lg",;
  };

  const variantClasses = {;
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400",;
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400",;
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100",;
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = <>{children}</>;

  if (href) {;

<<<<<<< HEAD
import React from "react"
import Link from "next/link"
interface ButtonProps {
  children: React.ReactNode, href?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
  style?: React.CSSProperties
}
const Button: React.FC<ButtonProps> = ({
  children
  href
  onClick
  type = "button"
  variant = "primary"
  size = "md"
  className = ""
  disabled = false
  style
}) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200"
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm"
    md: "px-4 py-2 text-base"
    lg: "px-6 py-3 text-lg"
  }
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400"
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100"
  }
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`
  const content = <>{children}</>
  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    )
=======
    return (
      <Link href={href} className={classes} style={style}>
        {content}

      </Link>;
    );

  const base_classes = "px - 4 py - 2 rounded - md font - medium transition - colors duration - 200";
  const size_classes = {
    sm: "px - 3 py - 1.5 text - sm",
    md: "px - 4 py - 2 text - base",
    lg: "px - 6 py - 3 text - lg",
  }
  const variant_classes = {
    primary: "bg - blue - 600 text - white hover:bg - blue - 700 disabled:bg - gray - 400",
    secondary: "bg - gray - 600 text - white hover:bg - gray - 700 disabled:bg - gray - 400",
    outline: "border border - gray - 300 text - gray - 700 hover:bg - gray - 50 disabled:bg - gray - 100",
  }
  const classes = `${base_classes} ${size_classes[size]} ${variant_classes[variant]} ${class_name}`;
  const content = <>{children}</>;
  // Check condition
if ( {) {
  $2
}
    return (
      <Link href={href} className={classes} style={style}>;
        {content}
      </Link>);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
<<<<<<< HEAD
      style={style}
    >
      {content}
    </button>
  )
};
export { Button };
import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none", {
    variants: {
        variant: {
            default: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
            secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500 border border-gray-600 hover:border-gray-500",
            outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500",
            ghost: "text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-gray-500",
            destructive: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
            success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
            warning: "bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500",
        },
        size: {
            sm: "h-8 px-3 text-sm",
            md: "h-10 px-4 text-sm",
            lg: "h-12 px-6 text-base",
            xl: "h-14 px-8 text-lg",
        },
        fullWidth: {
            true: "w-full",
            false: "",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
        fullWidth: false,
    },
});
const Button = React.forwardRef(({ className, variant, size, fullWidth, loading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (<button className = {
  cn(buttonVariants({ variant, size, fullWidth,
  className 

    </button>;
  );
};
export { Button };
export default Button;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}
<<<<<<< HEAD

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
    
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700',
      destructive: 'bg-red-500 text-white hover:bg-red-600',
      outline: 'border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
      ghost: 'hover:bg-gray-100 hover:text-gray-900',
      link: 'text-blue-600 underline-offset-4 hover:underline',
    };
    
    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-9 rounded-md px-3',
      lg: 'h-11 rounded-md px-8',
      icon: 'h-10 w-10',
    };
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className || ''}`;
    
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;
export default Button;
=======
export { Button }
export default Button;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
