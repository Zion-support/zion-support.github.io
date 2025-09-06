import React from 'react';

interface SkillCategoryProps {
  className?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SkillCategory</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SkillCategory;