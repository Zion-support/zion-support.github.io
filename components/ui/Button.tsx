import React from 'react';
import Link from 'next/link',
import { cn } from '../../lib/utils',
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline',
  size?: 'sm' | 'md' | 'lg',
  href?: string,
  onClick?: () => void,
  className?: string,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset',
  icon?: React.ReactNode,
}
,
const Button: React.FC<ButtonProps> = ({
  children;
  variant = 'primary';
  size = 'md';
  href;
  onClick;
  className = '';
  disabled = false;
  type = 'button';
  icon;
  ...props}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus: outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-lg hover:shadow-xl';
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500';
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500';
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
  };
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm';
    md: 'px-4 py-2 text-base';
    lg: 'px-6 py-3 text-lg',
  };
  const classes = cn(
    baseClasses;
    variantClasses[variant];
    sizeClasses[size];
    className),
  if (href) {
    return (
      <Link href={href} className={classes}>,
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>)}
,
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >,
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>)};
export default Button;