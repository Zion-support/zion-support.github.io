<<<<<<< HEAD
import React from 'react',;
;
interface FilterSidebarProps {;
  className?:string,;
  children?:React.ReactNode,;
}
;
export const FilterSidebar:React.FC<FilterSidebarProps> = ({ ;
  className,;
  children ;
}) => {;
  return (;
    <div className={`filter-sidebar ${className || ''}`}>;
      {children}
    </div>;
  ),;
},;
;
=======
import React from 'react',
interface FilterSidebarProps {
  className?: string,
  children?: React.ReactNode
}
export const FilterSidebar: React.FC<FilterSidebarProps> = (_{_className, _children}) => {_return (
    <div className={`filter-sidebar ${className || ''}`}>
      {_children}
    </div>
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default FilterSidebar,