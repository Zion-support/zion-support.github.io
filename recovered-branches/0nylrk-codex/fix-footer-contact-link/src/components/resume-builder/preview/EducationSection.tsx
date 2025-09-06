import React from 'react';

interface EducationSectionProps {
  className?: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EducationSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EducationSection;