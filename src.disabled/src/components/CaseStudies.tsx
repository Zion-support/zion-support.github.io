import React from 'react';

interface CaseStudiesProps {
  className?: string;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CaseStudies</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CaseStudies;