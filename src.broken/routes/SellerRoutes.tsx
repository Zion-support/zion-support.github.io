import React from 'react';

interface SellerRoutesProps {
  className?: string;
}

const SellerRoutes: React.FC<SellerRoutesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SellerRoutes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SellerRoutes;