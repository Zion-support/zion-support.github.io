import React from 'react';

interface CareersPageProps {
  className?: string;
  children?: React.ReactNode;
}

const CareersPage: React.FC<CareersPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`careerspage ${className}`}>
      {children}
    </div>
  );
};

export default CareersPage;