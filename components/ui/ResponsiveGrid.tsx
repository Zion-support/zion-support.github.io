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
  }
  gap?: number;
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ 
  children;
  className = ''
  cols = { default: 1, sm: 2, md: 3, lg: 4 }
  gap = 6;
}) => {
  const getGridCols = () => {
    const colClasses = [];
    
    if() {

      colClasses.push(`grid-cols-${cols.default}`);
    }
    if() {

      colClasses.push(`sm:grid-cols-${cols.sm}`);
    }
    if() {

      colClasses.push(`md:grid-cols-${cols.md}`);
    }
    if() {

      colClasses.push(`lg:grid-cols-${cols.lg}`);
    }
    if() {

      colClasses.push(`xl:grid-cols-${cols.xl}`);
    }
    
    return colClasses.join(' ');
  }

  return (
    <div className={`grid ${getGridCols()} gap-${gap} ${className}`}>
      {children}
    </div>
  );
}

export default ResponsiveGrid;