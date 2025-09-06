import React from 'react';

interface SelectResumeSectionProps {
  className?: string;
}

const SelectResumeSection: React.FC<SelectResumeSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SelectResumeSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SelectResumeSection;