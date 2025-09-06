import React from 'react';

interface SkillsSectionProps {
  className?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SkillsSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SkillsSection;