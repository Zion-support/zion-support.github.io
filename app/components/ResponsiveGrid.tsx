import React from 'react';

interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  columns = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md',
  className = ''
}) => {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  const gridClasses = `grid grid-cols-${columns.default} ${
    columns.sm ? `sm:grid-cols-${columns.sm}` : ''
  } ${columns.md ? `md:grid-cols-${columns.md}` : ''} ${
    columns.lg ? `lg:grid-cols-${columns.lg}` : ''
  } ${columns.xl ? `xl:grid-cols-${columns.xl}` : ''} ${gapClasses[gap]} ${className}`;

  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;