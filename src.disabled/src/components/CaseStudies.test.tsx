import React from 'react';

interface CaseStudies.testProps {
  className?: string;
}

const CaseStudies.test: React.FC<CaseStudies.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CaseStudies.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CaseStudies.test;