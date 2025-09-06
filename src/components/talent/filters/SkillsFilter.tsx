import React from 'react';

interface SkillsFilterProps {
  className?: string;
}

const SkillsFilter: React.FC<SkillsFilterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SkillsFilter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SkillsFilter;