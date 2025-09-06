import React from 'react';

interface SkillsFormProps {
  className?: string;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SkillsForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SkillsForm;