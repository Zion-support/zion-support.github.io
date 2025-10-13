import { cn } from '../lib/utils';

interface ResponsiveTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  color?: 'white' | 'gray' | 'cyan' | 'purple' | 'pink' | 'blue' | 'green' | 'orange' | 'red' | 'yellow';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
}

const ResponsiveText = ({ 
  children, 
  as: Component = 'p',
  size = 'base',
  weight = 'normal',
  color = 'white',
  align = 'left',
  className
}: ResponsiveTextProps) => {
  const sizeClasses = {
    xs: 'text-xs sm:text-sm',
    sm: 'text-sm sm:text-base',
    base: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl',
    '2xl': 'text-2xl sm:text-3xl md:text-4xl',
    '3xl': 'text-3xl sm:text-4xl md:text-5xl',
    '4xl': 'text-4xl sm:text-5xl md:text-6xl',
    '5xl': 'text-5xl sm:text-6xl md:text-7xl',
    '6xl': 'text-6xl sm:text-7xl md:text-8xl',
    '7xl': 'text-7xl sm:text-8xl md:text-9xl'
  };

  const weightClasses = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black'
  };

  const colorClasses = {
    white: 'text-white',
    gray: 'text-gray-300',
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    blue: 'text-blue-400',
    green: 'text-green-400',
    orange: 'text-orange-400',
    red: 'text-red-400',
    yellow: 'text-yellow-400'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };

  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Component>
  );
};

export default ResponsiveText;