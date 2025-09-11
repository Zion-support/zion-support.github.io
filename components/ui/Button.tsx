<<<<<<< HEAD
<<<<<<< HEAD
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../src/lib/utils"
=======
>>>>>>> cursor/check-fix-push-and-merge-to-main-e7fd


import React from "react";


import React from './react';
;
<<<<<<< HEAD
import React from './react';
;
import React from "react";
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
interface ButtonProps {;
  children: React && React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string, onClick?: () => void, disabled?: boolean, type?: 'button' | 'submit' | 'reset';
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
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
<<<<<<< HEAD
=======
  

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
export interface ButtonProps;
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))}
=======
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	as?: 'button' | 'a'
	href?: string
	className?: string
}

export default function Button({ as = 'button', href, className = '', children, ...rest }: ButtonProps) {
	if (as === 'a' && href) {
		return (
			<a href={href} className={`inline-flex items-center justify-center px-4 py-2 rounded ${className}`} {...(rest as any)}>
				{children}
			</a>
		)
	}
	return (
		<button className={`inline-flex items-center justify-center px-4 py-2 rounded ${className}`} {...rest}>
			{children}
		</button>
	)
}
>>>>>>> origin/chore/standardize-pages-router
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover: scale-105 active:scale-95';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;


<<<<<<< HEAD
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover: scale-105 active:scale-95';
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


<<<<<<< HEAD
export { Button };

export default Button;
      {...props}
    >;
      {children}
    </button>);
}
;
export { Button }
;

export { Button };
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

export { Button };

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> cursor/check-fix-push-and-merge-to-main-e7fd
