

import React from "react"

interface ButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "ghost";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({ 
  className = "", 
  size = "md", 
  variant = "default", 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg"
  }
  
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50",
    ghost: "hover:bg-gray-100"
  }
  
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
>>>>>>> main
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  style
}) => {
>>>>>>> main


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

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  style?: React && React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  style
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100",
>>>>>>> main
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = <>{children}</>;

  if (href) {;

    return (
      <Link href={href} className={classes} style={style}>;
        {content}

      </Link>;
    );

  const base_classes = "px - 4 py - 2 rounded - md font - medium transition - colors duration - 200";
  const size_classes = {
    sm: "px - 3 py - 1.5 text - sm",
    md: "px - 4 py - 2 text - base",
    lg: "px - 6 py - 3 text - lg"
  }
  const variant_classes = {
    primary: "bg - blue - 600 text - white hover:bg - blue - 700 disabled:bg - gray - 400",
    secondary: "bg - gray - 600 text - white hover:bg - gray - 700 disabled:bg - gray - 400",
    outline: "border border - gray - 300 text - gray - 700 hover:bg - gray - 50 disabled:bg - gray - 100"
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
  if (href) {
    return (
      <Link href={href} className={classes} style={style}>
        {content}
      </Link>
    );
>>>>>>> main
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
>>>>>>> main

    </button>;
      style={style}
    >
      {content}
    </button>
  );
};

export { Button };
export default Button;
export default Button;
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
