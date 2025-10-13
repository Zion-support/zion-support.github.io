import React from 'react';
interface ResponsiveGridProps 
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = (
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 'md'
}) => 
  };

  const gridCols = `grid-cols-${cols.default || 1} $
    cols.sm ? `sm:grid-cols-${cols.sm}` : ''
  } ${cols.md ? `md:grid-cols-${cols.md}` : ''} $
    cols.lg ? `lg:grid-cols-${cols.lg}` : ''
  } ${cols.xl ? `xl:grid-cols-${cols.xl}` : ''}`;

  return (
    <div className={`grid ${gridCols} ${gapClasses[gap]} ${className}`} />
      {children}
    </div>
  );
};

export default ResponsiveGrid;
