import React from 'react';
import Link from 'next/link';

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
    );
  }
  
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
interface ButtonProps {;
  children: React && React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: classes
      onClick
      disabled
      type
      ...props
const Button: React.FC<ButtonProps> = ({;
  children,;
  variant = "primary",;
  size = "md",;
  className = "",;
  onClick,;
  disabled = false,;
  type = "button",;
  asChild = false,;
  ...props;
}) => {;
  const baseClasses =;
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variantClasses = {;
    primary: "bg-blue-600 text-white hover:bg-blue-700",;
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",;
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",;
    ghost: "hover:bg-gray-100",;
  };
  const sizeClasses = {;
    sm: "h-8 px-3 text-xs",;
    md: "h-10 px-4 py-2",;
    lg: "h-12 px-8 text-lg",;
  };
  class_name?: string;
  on_click?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  as_child?: boolean;
}
const Button: React.FC < ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  class_name = "",
  on_click,
  disabled = false,
  type = "button",
  ...props;
}) => {
  const base_classes =;
    "inline - flex items - center justify - center rounded - md font - medium transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring focus - visible:ring - offset - 2 disabled:pointer - events - none disabled:opacity - 50";
;
  const variant_classes = {
    primary: "bg - blue - 600 text - white hover:bg - blue - 700",
    secondary: "bg - gray - 200 text - gray - 900 hover:bg - gray - 300",
    outline: "border border - gray - 300 bg - transparent hover:bg - gray - 50",
    ghost: "hover:bg - gray - 100",
  }
;
  const size_classes = {
    sm: "h - 8 px - 3 text - xs",
    md: "h - 10 px - 4 py - 2",
    lg: "h - 12 px - 8 text - lg",
  }
;
  const classes = `${base_classes} ${variant_classes[variant]} ${size_classes[size]} ${class_name}`;
;
  // Check condition
if ( {) {
  $2
}
    return React.clone_element (children as React.ReactElement, {
      class_name: classes,
      on_click,
      disabled,
      type,
      ...props,
    });
  }
  return (
    <button;
      className={classes}
      on_click={on_click}
      disabled={disabled}
      type={type}
