import React from 'react';
import { cn } from '../lib/utils';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  equalHeight?: boolean;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className = '',
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md',
  equalHeight = false
}) => {
  const getColsClass = () => {
    const colClasses = [];
    
    if (cols.default) {
      colClasses.push(`grid-cols-${cols.default}`);
    }
    if (cols.sm) {
      colClasses.push(`sm:grid-cols-${cols.sm}`);
    }
    if (cols.md) {
      colClasses.push(`md:grid-cols-${cols.md}`);
    }
    if (cols.lg) {
      colClasses.push(`lg:grid-cols-${cols.lg}`);
    }
    if (cols.xl) {
      colClasses.push(`xl:grid-cols-${cols.xl}`);
    }
    if (cols['2xl']) {
      colClasses.push(`2xl:grid-cols-${cols['2xl']}`);
    }
    
    return colClasses.join(' ');
  };

  const getGapClass = () => {
    const gaps = {
      none: 'gap-0',
      sm: 'gap-2 sm:gap-4',
      md: 'gap-4 sm:gap-6',
      lg: 'gap-6 sm:gap-8',
      xl: 'gap-8 sm:gap-12',
      '2xl': 'gap-12 sm:gap-16'
    };
    return gaps[gap];
  };

  const baseClasses = cn(
    'grid',
    getColsClass(),
    getGapClass(),
    {
      'items-stretch': equalHeight
    },
    className
  );

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;