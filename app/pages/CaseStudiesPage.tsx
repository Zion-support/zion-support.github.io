import React from 'react';

interface CaseStudiesPageProps {
  className?: string;
  children?: React.ReactNode;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`casestudiespage ${className}`}>
      {children}
    </div>
  );
};

export default CaseStudiesPage;