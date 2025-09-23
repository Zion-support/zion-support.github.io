<<<<<<< HEAD

import React from "react";


import React from './react';
;
=======
import React from 'react';
import Link from 'next/link';
>>>>>>> origin/auto/autonomy-17186719616

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
<<<<<<< HEAD
interface ButtonProps {;
  children: React && React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";

import React from 'react';
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string, onClick?: () => void, disabled?: boolean, type?: 'button' | 'submit' | 'reset';
}
=======
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
}

>>>>>>> origin/auto/autonomy-17186719616
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
<<<<<<< HEAD
className = '',
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus: outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white focus:ring-cyan-500',
    secondary: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white focus:ring-purple-500',
    outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black focus:ring-cyan-400',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-gray-500',
  };
  

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


  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (asChild) {;
    return React && React.cloneElement(children as React && React.ReactElement, {;
      className: classes,;
      onClick,;
      disabled,;
      type,;
      ...props,;
    });
  }


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
  as_child = false,
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


export { Button };

=======
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
  }

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
>>>>>>> origin/auto/autonomy-17186719616
