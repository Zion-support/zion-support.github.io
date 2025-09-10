import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  asChild?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  style,
  asChild = false,
}) => {
  const baseClasses =
    'px-4 py-2 rounded-md font-medium transition-colors duration-200';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100',
  };

  const classes = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  const content = <>{children}</>;

  if (href) {
    return (
      <Link to={href} className={classes} style={style}>
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

export { Button };
export default Button;
