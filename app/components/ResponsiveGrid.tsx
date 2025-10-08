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
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
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
    
    if (cols.default) colClasses.push(`grid-cols-${cols.default}`);
    if (cols.sm) colClasses.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) colClasses.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) colClasses.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) colClasses.push(`xl:grid-cols-${cols.xl}`);
    if (cols['2xl']) colClasses.push(`2xl:grid-cols-${cols['2xl']}`);
    
    return colClasses.join(' ');
  };

  const getGapClass = () => {
    switch (gap) {
      case 'none': return 'gap-0';
      case 'sm': return 'gap-2 sm:gap-4';
      case 'md': return 'gap-4 sm:gap-6 lg:gap-8';
      case 'lg': return 'gap-6 sm:gap-8 lg:gap-12';
      case 'xl': return 'gap-8 sm:gap-12 lg:gap-16';
      default: return 'gap-4 sm:gap-6 lg:gap-8';
    }
  };

  const gridClass = `
    grid
    ${getColsClass()}
    ${getGapClass()}
    ${equalHeight ? 'items-stretch' : ''}
    ${className}
  `.trim();

  return (
    <div className={gridClass}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;