import React from 'react';

interface FilterSidebarProps {
  className?: string;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FilterSidebar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FilterSidebar;