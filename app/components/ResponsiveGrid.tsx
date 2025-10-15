
interface ResponsiveGridProps {},
      children: React.ReactNode
  className?: string";"  cols?: {},";"      default: number";"    sm?: number";";"    md?: number";";"    lg?: number";";";"    xl?: number";";";"  },";";";";"      gap?: 'sm' | 'md' | 'lg' | 'xl""},";";"      const ResponsiveGrid  =  (_{},)";";";"      children, className, cols = { default: 1, _sm: 2, _md: 3, _lg: 4 }, gap = 'md""}: ResponsiveGridProps) => {},";";"      const gapClasses = {},";";";"      sm: 'gap-2",";";";"      md: 'gap-4",";";";"      lg: 'gap-6",";";";"      xl: 'gap-8""  },";";"      const gridColsClasses = {},";";";"      1: 'grid-cols-1",";";";"      2: 'grid-cols-2",";";";"      3: 'grid-cols-3",";";";"      4: 'grid-cols-4",";";";"      5: 'grid-cols-5",";";";"      6: 'grid-cols-6""  },'
      {children};
    </div>
  )
},
      export default ResponsiveGrid
;
