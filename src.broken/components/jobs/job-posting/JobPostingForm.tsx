import React from 'react';

interface JobPostingFormProps {
  className?: string;
}

const JobPostingForm: React.FC<JobPostingFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>JobPostingForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default JobPostingForm;