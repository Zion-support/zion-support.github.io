import React from 'react';

interface ApplyFormProps {
  className?: string;
}

const ApplyForm: React.FC<ApplyFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApplyForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApplyForm;