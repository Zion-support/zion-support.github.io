import React from 'react';

interface CloudSolutionsPageProps {
  className?: string;
  children?: React.ReactNode;
}

const CloudSolutionsPage: React.FC<CloudSolutionsPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`cloudsolutionspage ${className}`}>
      {children}
    </div>
  );
};

export default CloudSolutionsPage;