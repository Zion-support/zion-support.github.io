import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
interface FilterSidebarProps {
  className?: string;
  children?: React.ReactNode
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  className;
  children 
}) => {
  return (
    <div className={`filter-sidebar ${className || ''}`}>
      {children}
    </div>
  )
};

<<<<<<< HEAD
export default FilterSidebar;
=======
interface FilterSidebarProps {
  className?: string;
  children?: React.ReactNode
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  className;
  children 
}) => {
  return (
    <div className={`filter-sidebar ${className || ''}`}>
      {children}
    </div>
  )
};

export default FilterSidebar;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default FilterSidebar;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
