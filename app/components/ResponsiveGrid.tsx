import React from 'react';
import { ResponsiveGridProps } from 'lucide-react';
interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}
const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ 
  children, 
  className = '', 
  const cols = { default: 1, sm: 2, md: 3, lg: 4 } 
}) => {
  const gridClasses = [
    'grid',
    `grid-cols-${cols.default || 1}`,
    cols.sm && `sm: grid-cols-${cols.sm}`,
    cols.md && `md: grid-cols-${cols.md}`,
    cols.lg && `lg: grid-cols-${cols.lg}`,
    cols.xl && `xl: grid-cols-${cols.xl}`,
    'gap-6',
    className
  ].filter(Boolean).join(' ');
  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
};
export default ResponsiveGrid;