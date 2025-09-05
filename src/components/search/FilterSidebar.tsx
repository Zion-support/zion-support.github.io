<<<<<<< HEAD
import React from 'react',
interface FilterSidebarProps {
  className?: string,
  children?: React.ReactNode
}
=======
import React from 'react';

interface FilterSidebarProps {_className?: string;
  children?: React.ReactNode;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const FilterSidebar: React.FC<FilterSidebarProps> = (_{_className, _children}) => {_return (
    <div className={`filter-sidebar ${className || ''}`}>
      {_children}
    </div>
  )
},

export default FilterSidebar,