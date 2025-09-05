import React from 'react';

interface FilterSidebarProps {_className?: string;
  children?: React.ReactNode;}

export const FilterSidebar: React.FC<FilterSidebarProps> = (_{_className, _children}) => {_return (
    <div className={`filter-sidebar ${className || ''}`}>
      {_children}
    </div>
  );
};

export default FilterSidebar;