import React from 'react';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
interface FilterSidebarProps {
  className?: string;
  children?: React.ReactNode
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  className,
  children 
}) => {
  return (
    <div className={`filter-sidebar ${className || ''}`}>
      {children}
    </div>
  )
};

export default FilterSidebar;
=======
export default FilterSidebar;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
