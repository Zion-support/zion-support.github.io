import React from 'react';
import Link from 'next/link';
interface ButtonProps {
  children: React.ReactNode,
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline',
  size?: 'sm' | 'md' | 'lg',
  href?: string,
  onClick?: () => void,
  className?: string,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset',
  icon?: React.ReactNode,
  iconPosition?: 'left' | 'right',
  style?: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = $2;
  size = $2;
  href,
  onClick,
  className = $2;
  disabled = $2;
  type = $2;
  icon,
  iconPosition = $2;
  style}) => {
  const baseClasses = $2;
  const variantClasses = $2;
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 hover:shadow-lg hover:-translate-y-0.5',
    ghost: 'bg-transparent hover:bg-white/5 text-gray-300 hover:text-white hover:shadow-md hover:-translate-y-0.5',
    outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40 hover:shadow-md hover:-translate-y-0.5'},

  const sizeClasses = $2;
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'},

  const classes = $2;
  const content = $2;
  if (href) {
    return (
      <Link href = $2;
export default Button,