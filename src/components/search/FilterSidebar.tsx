<<<<<<< HEAD
import React from 'react';

interface FilterSidebarProps {
  className?: string;
  children?: React.ReactNode;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  className,
  children,
}) => {
  return <div className={`filter-sidebar ${className || ''}`}>{children}</div>;
};

export default FilterSidebar;
=======
 export const FilterSidebar: React.FC<FilterSidebarProps> = ({;
  className, children ;
}) => {;
  return (<div className= {;
  `filter-sidebar $ {;
  className || '' ;
}` ;
}> {;
  children ;
}</div>) ;
};
export default FilterSidebar;
'
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
