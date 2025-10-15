import React from 'react';

interface PartnershipsPageProps {
  className?: string;
  children?: React.ReactNode;
}

const PartnershipsPage: React.FC<PartnershipsPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`partnershipspage ${className}`}>
      {children}
    </div>
  );
};

export default PartnershipsPage;