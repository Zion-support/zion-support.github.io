import React from 'react';

interface WorkExperienceSectionProps {
  className?: string;
}

const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WorkExperienceSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WorkExperienceSection;