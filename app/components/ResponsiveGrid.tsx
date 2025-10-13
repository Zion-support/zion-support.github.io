import React from 'react';

interface ResponsiveGridProps {
interface ResponsivegridProps {
interface ResponsiveGridProps {
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
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function ResponsiveGrid({ className = '', children }: ResponsiveGridProps) {
export default function Responsivegrid({ className = '', children, ...props }: ResponsivegridProps) {
interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function ResponsiveGrid({ children, className = '', ...props }: ResponsiveGridProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}
export default function ResponsiveGrid({ className = '', children, ...props }: ResponsiveGridProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
}
const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
  children,
  className = '',
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md'
}) => {
  const gapClasses = {
    sm: 'gap-2',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  const gridCols = `grid-cols-${cols.default || 1} ${
    cols.sm ? `sm:grid-cols-${cols.sm}` : ''
  } ${cols.md ? `md:grid-cols-${cols.md}` : ''} ${
    cols.lg ? `lg:grid-cols-${cols.lg}` : ''
  } ${cols.xl ? `xl:grid-cols-${cols.xl}` : ''}`;

import React from 'react';

interface ResponsivegridProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivegrid({ className = '', children, ...props }: ResponsivegridProps) {

  return (
    <div className={`grid ${gridCols} ${gapClasses[gap]} ${className}`}>
      {children}

    </div>
  );
};

export default ResponsiveGrid;
  );
}
  return (;
    <div className={`responsivegrid-component ${className}`} {...props}></div>;
      {children}
;
</div>;
);

}
export default $1;
