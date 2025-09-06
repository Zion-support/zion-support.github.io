import React from 'react';

interface BulkAddSkillsProps {
  className?: string;
}

const BulkAddSkills: React.FC<BulkAddSkillsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BulkAddSkills</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BulkAddSkills;