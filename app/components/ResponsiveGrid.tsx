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
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

const ResponsiveGrid = ({ 
  children, 
  className,
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md'
}: ResponsiveGridProps) => {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8'
  };

  const gridColsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  };

  const responsiveClasses = [
    `grid ${gridColsClasses[cols.default]}`,
    cols.sm && `sm:${gridColsClasses[cols.sm]}`,
    cols.md && `md:${gridColsClasses[cols.md]}`,
    cols.lg && `lg:${gridColsClasses[cols.lg]}`,
    cols.xl && `xl:${gridColsClasses[cols.xl]}`,
    gapClasses[gap]
  ].filter(Boolean).join(' ');

  return (
    <div className={cn(responsiveClasses, className)}>
      {children}
    </div>
  );
};

export default ResponsiveGrid;