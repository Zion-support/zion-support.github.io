<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
interface ResponsiveGridProps {
=======
interface ResponsivegridProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface ResponsiveGridProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
interface ResponsiveGridProps {
  children: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function ResponsiveGrid({ className = '', children }: ResponsiveGridProps) {
=======
export default function Responsivegrid({ className = '', children, ...props }: ResponsivegridProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function ResponsiveGrid({ children, className = '', ...props }: ResponsiveGridProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
}
=======
export default function ResponsiveGrid({ className = '', children, ...props }: ResponsiveGridProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
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

=======

import React from 'react';

interface ResponsivegridProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Responsivegrid({ className = '', children, ...props }: ResponsivegridProps) {
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return (
    <div className={`grid ${gridCols} ${gapClasses[gap]} ${className}`}>
      {children}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
    </div>
  );
};

export default ResponsiveGrid;
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
  return (;
    <div className={`responsivegrid-component ${className}`} {...props}></div>;
      {children}
;
</div>;
);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-c68e
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
