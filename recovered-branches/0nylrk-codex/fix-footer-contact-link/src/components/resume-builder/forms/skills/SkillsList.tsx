import React from 'react';

interface SkillsListProps {
  className?: string;
}

const SkillsList: React.FC<SkillsListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SkillsList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SkillsList;