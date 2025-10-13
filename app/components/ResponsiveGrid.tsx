import React from 'react';

interface ResponsivegridProps {
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
export default function Responsivegrid({ className = '', children, ...props }: ResponsivegridProps) {
=======
const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({
//   children,
  className = '',
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md'
}) => {
  const gapClasses = {
//     sm: 'gap-2',
//     md: 'gap-6',
//     lg: 'gap-8',
//     xl: 'gap-12'
  };

  const gridCols = `grid-cols-${cols.default || 1} ${
    cols.sm ? `sm:grid-cols-${cols.sm}` : ''
  } ${cols.md ? `md:grid-cols-${cols.md}` : ''} ${
    cols.lg ? `lg:grid-cols-${cols.lg}` : ''
  } ${cols.xl ? `xl:grid-cols-${cols.xl}` : ''}`;

>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
  return (
    <div className={`responsivegrid-component ${className}`} {...props}>
      {children}
</div>
  );
}
