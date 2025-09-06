import React from 'react';

interface ListingGridSkeletonProps {
  className?: string;
}

const ListingGridSkeleton: React.FC<ListingGridSkeletonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ListingGridSkeleton</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ListingGridSkeleton;