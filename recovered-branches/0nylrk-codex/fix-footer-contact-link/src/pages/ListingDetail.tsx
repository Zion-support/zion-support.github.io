import React from 'react';

interface ListingDetailProps {
  className?: string;
}

const ListingDetail: React.FC<ListingDetailProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ListingDetail</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ListingDetail;