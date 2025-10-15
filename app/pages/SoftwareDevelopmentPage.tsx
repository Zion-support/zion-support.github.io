import React from 'react';

interface SoftwareDevelopmentPageProps {
  className?: string;
  children?: React.ReactNode;
}

const SoftwareDevelopmentPage: React.FC<SoftwareDevelopmentPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`softwaredevelopmentpage ${className}`}>
      {children}
    </div>
  );
};

export default SoftwareDevelopmentPage;