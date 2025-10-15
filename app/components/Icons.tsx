
import React from 'react';
import { clsx } from 'clsx';

interface IconProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  [key: string]: unknown;
}

const Icon: React.FC<IconProps> = ({
  name,
  className,
  size = 'md',
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  
  const iconClasses = clsx(
    'icon',
    sizeClasses[size],
    className
  );
  
  return (
    <span className={iconClasses} {...props}>
      {name}
    </span>
  );
};

export default Icon;

