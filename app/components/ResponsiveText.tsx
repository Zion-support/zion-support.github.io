import React from 'react';
import { ResponsiveTextProps } from 'lucide-react';
interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: string;
}
const ResponsiveText: React.FC<ResponsiveTextProps> = ({ 
  children, 
  className = '', 
  size = 'base',
  weight = 'normal',
  color = 'text-gray-300'
}) => {
  const textClasses = [
    `text-${size}`,
    `font-${weight}`,
    color,
    className
  ].filter(Boolean).join(' ');
  return (
    <p className={textClasses}>
      {children}
    </p>
  );
};
export default ResponsiveText;