import React from 'react';

interface CaseStudiesPageProps {
  className?: string;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CaseStudiesPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CaseStudiesPage;