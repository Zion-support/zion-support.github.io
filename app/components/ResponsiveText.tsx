<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface ResponsiveTextProps {
=======
interface ResponsivetextProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface ResponsiveTextProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
interface ResponsiveTextProps {
  children: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  className?: string;
  size?: {
    default?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'accent' | 'muted' | 'white' | 'gray';
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function ResponsiveText({ className = '', children }: ResponsiveTextProps) {
=======
export default function Responsivetext({ className = '', children, ...props }: ResponsivetextProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface ResponsiveTextProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function ResponsiveText({ children, className = '', ...props }: ResponsiveTextProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
  return (
    <div className={`${className}`}>
=======
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
  };

  const colorClasses = {
    primary: 'text-cyan-400',
    secondary: 'text-purple-400',
    accent: 'text-pink-400',
    muted: 'text-gray-400',
    white: 'text-white',
    gray: 'text-gray-300'
  };

  const sizeClasses = `text-${size.default || 'base'} ${
    size.sm ? `sm:text-${size.sm}` : ''
  } ${size.md ? `md:text-${size.md}` : ''} ${
    size.lg ? `lg:text-${size.lg}` : ''
  } ${size.xl ? `xl:text-${size.xl}` : ''}`;

  return (
    <span className={`${sizeClasses} ${weightClasses[weight]} ${colorClasses[color]} ${className}`}>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      {children}
    </span>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
export default function ResponsiveText({ className = '', children, ...props }: ResponsiveTextProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
};

export default ResponsiveText;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
  return (;
    <div className={`responsivetext-component ${className}`} {...props}></div>;
      {children}
;
</div>;
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
