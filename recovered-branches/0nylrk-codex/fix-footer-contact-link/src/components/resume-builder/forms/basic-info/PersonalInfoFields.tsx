import React from 'react';

interface PersonalInfoFieldsProps {
  className?: string;
}

const PersonalInfoFields: React.FC<PersonalInfoFieldsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PersonalInfoFields</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PersonalInfoFields;