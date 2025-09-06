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
<<<<<<< HEAD


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
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return (
      <Link href={href} className={classes} style={style}>;
        {content}
<<<<<<< HEAD

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
=======
      </Link>
    )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
  return (
    <button;
      type={type}
      className={classes}
      on_click={on_click}
      disabled={disabled}
<<<<<<< HEAD
<<<<<<< HEAD

    </button>;
  );
=======
      style={style}
    >
      {content}
    </button>
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
};

export { Button };
<<<<<<< HEAD
export default Button;
=======
import React from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}
<<<<<<< HEAD
export { Button }
export default Button;
=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
