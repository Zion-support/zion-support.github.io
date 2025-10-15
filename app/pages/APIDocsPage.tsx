import React from 'react';

interface APIDocsPageProps {
  className?: string;
  children?: React.ReactNode;
}

const APIDocsPage: React.FC<APIDocsPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`apidocspage ${className}`}>
      {children}
    </div>
  );
};

export default APIDocsPage;