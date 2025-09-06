import React from 'react';

interface CaseStudyProps {
  className?: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CaseStudy</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CaseStudy;