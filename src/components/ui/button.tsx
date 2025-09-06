import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  style
}) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 focus:ring-blue-500",
  };

  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export { Button };
export default Button;