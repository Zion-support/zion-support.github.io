import React from 'react';

interface AddSkillFormProps {
  className?: string;
}

const AddSkillForm: React.FC<AddSkillFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AddSkillForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AddSkillForm;