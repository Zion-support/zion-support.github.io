import React from 'react'
import {cn} from '../$1/utils'
interface ResponsiveContainerProp s {children: React.ReactNode;
  class Nam e?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2 xl' | '3 xl' | '4 xl' | '5 xl' | '6 xl' | '7 xl' | 'full';}

constResponsiveContainer= ({children,
  class Nam e,
  maxWidth= '7 xl'}: ResponsiveContainerProps) =>{constmaxWidthClasses= {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2 xl': 'max-w-2 xl',
    '3 xl': 'max-w-3 xl',
    '4 xl': 'max-w-4 xl',
    '5 xl': 'max-w-5 xl',
    '6 xl': 'max-w-6 xl',
    '7 xl': 'max-w-7 xl',
    full: 'max-w-full'
 };

  return (
  <divclassName={cn(
      'mx-auto px-4 sm:px-6 lg:px-8',
      maxWidthClasses[maxWidth],
      class Nam e
   )}>{children}
  </di>
  );
};

export default ResponsiveContainer;