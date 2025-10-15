import React from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  responsive?: boolean;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ 
  children, 
  className = '', 
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md',
  responsive = true
}) => {
  const gapClasses = {
    none: 'gap-0',
    sm: 'gap-2 sm:gap-3',
    md: 'gap-4 sm:gap-6',
    lg: 'gap-6 sm:gap-8',
    xl: 'gap-8 sm:gap-10',
    '2xl': 'gap-10 sm:gap-12'
  };

  const gridClasses = [
    'grid',
    `grid-cols-${cols.default || 1}`,
    responsive && cols.sm && `sm:grid-cols-${cols.sm}`,
    responsive && cols.md && `md:grid-cols-${cols.md}`,
    responsive && cols.lg && `lg:grid-cols-${cols.lg}`,
    responsive && cols.xl && `xl:grid-cols-${cols.xl}`,
    responsive && cols['2xl'] && `2xl:grid-cols-${cols['2xl']}`,
    gapClasses[gap],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;