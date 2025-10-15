import React from 'react';

interface CloudInfrastructurePageProps {
  className?: string;
  children?: React.ReactNode;
}

const CloudInfrastructurePage: React.FC<CloudInfrastructurePageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`cloudinfrastructurepage ${className}`}>
      {children}
    </div>
  );
};

export default CloudInfrastructurePage;