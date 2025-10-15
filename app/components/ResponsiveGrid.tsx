import React from 'react';';
import SEOHead from './components/SEOHead';
import { cn } from "../lib/utils;
interface ResponsiveGridProps {},
      children: React.ReactNode
  className?: string
  cols?: {},
      default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  },
      gap?: 'sm' | 'md' | 'lg' | 'xl'
},
      const ResponsiveGrid  =  (_{},)
      children, className, cols = { default: 1, _sm: 2, _md: 3, _lg: 4 }, gap = 'md'
}: ResponsiveGridProps) => {},
      const gapClasses = {},
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8'
  },
      const gridColsClasses = {},
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6'
  },
      const responsiveClasses = []
    `grid ${gridColsClasses[cols.default]}`,
      cols.sm && `sm:${gridColsClasses[cols.sm]}`,
      cols.md && `md:${gridColsClasses[cols.md]}`,
      cols.lg && `lg:${gridColsClasses[cols.lg]}`,
      cols.xl && `xl:${gridColsClasses[cols.xl]}`,
      gapClasses[gap]
  ].filter(Boolean).join(' ')
  return ()
    <div className={cn(responsiveClasses, className)}></div>;
      {children};
    </div>
  )
},
      export default ResponsiveGrid

const ComponentsPage: React.FC  =  () => {
  return (;
    <>;
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;"
export default ComponentsPage;'";'";
"