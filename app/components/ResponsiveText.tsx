<<<<<<< HEAD
interface ResponsiveTextProps {
  size?: {
}
const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  className = '',
  size = { default: 'base', sm: 'lg', md: 'xl' },
  weight = 'normal',
  color = 'white'
}) => {
  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400',
    muted: 'text-gray-400',
    white: 'text-white',
    gray: 'text-gray-300'
  const sizeClasses = `text-${size.default || 'base'} ${
    size.sm ? `sm:text-${size.sm}` : ''
  } ${size.md ? `md:text-${size.md}` : ''} ${
    size.lg ? `lg:text-${size.lg}` : ''
=======
import React from 'react';

interface ResponsivetextProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivetext({ className = '', children, ...props }: ResponsivetextProps) {
>>>>>>> origin/main
  return (
    <div className={`responsivetext-component ${className}`} {...props}>
      {children}
<<<<<<< HEAD
    </span>
=======
    </div>
  );
}
>>>>>>> origin/main
