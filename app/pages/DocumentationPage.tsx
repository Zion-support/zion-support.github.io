import React from 'react';

interface DocumentationPageProps {
  className?: string;
  children?: React.ReactNode;
}

const DocumentationPage: React.FC<DocumentationPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`documentationpage ${className}`}>
      {children}
    </div>
  );
};

export default DocumentationPage;