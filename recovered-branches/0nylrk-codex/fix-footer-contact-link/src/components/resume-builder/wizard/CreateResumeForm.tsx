import React from 'react';

interface CreateResumeFormProps {
  className?: string;
}

const CreateResumeForm: React.FC<CreateResumeFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CreateResumeForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CreateResumeForm;