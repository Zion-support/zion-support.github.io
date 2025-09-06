import React from 'react';

interface SkillItemProps {
  className?: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SkillItem</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SkillItem;