<<<<<<< HEAD
import React from 'react';

export function Button({ 
  children, 
  variant = 'default', 
  size = 'md', 
  asChild = false, 
  className = '', 
  onClick, 
  type = 'button', 
  disabled = false 
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan',
    outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan',
    ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate',
    link: 'text-zion-cyan hover:underline focus:ring-zion-cyan'
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  style,
}) => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

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
  style,
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200";
<<<<<<< HEAD
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200";
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400",
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/merged-prs
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
  
  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
<<<<<<< HEAD
=======

    </button>;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      style={style}
>>>>>>> origin/merged-prs
    >
      {children}
    </button>
<<<<<<< HEAD
  );
}

// Export buttonVariants for backward compatibility
export const buttonVariants = {
  default: 'bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light focus:ring-zion-cyan',
  outline: 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark focus:ring-zion-cyan',
  ghost: 'text-zion-slate hover:bg-zion-slate-light focus:ring-zion-slate',
  link: 'text-zion-cyan hover:underline focus:ring-zion-cyan'
};
=======
<<<<<<< HEAD
  );
};

export { Button };
export default Button;
=======

  );
};

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/merged-prs
