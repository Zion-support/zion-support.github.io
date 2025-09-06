

import React from "react";

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

  children
  variant = "primary"
  size = "md"
  className = ""
  onClick
  disabled = false
  type = "button"
  asChild = false
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700"
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300"
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50"
    ghost: "hover:bg-gray-100"
  }
  const sizeClasses = {
    sm: "h-8 px-3 text-xs"
    md: "h-10 px-4 py-2"
    lg: "h-12 px-8 text-lg"
  }
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: classes
      onClick
      disabled
      type
      ...props
    });
  }
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
export { Button }


export { Button };

