import React from 'react';

interface FilterSidebarSkeletonProps {
  className?: string;
}

const FilterSidebarSkeleton: React.FC<FilterSidebarSkeletonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FilterSidebarSkeleton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FilterSidebarSkeleton;