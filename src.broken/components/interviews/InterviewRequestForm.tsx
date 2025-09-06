import React from 'react';

interface InterviewRequestFormProps {
  className?: string;
}

const InterviewRequestForm: React.FC<InterviewRequestFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InterviewRequestForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InterviewRequestForm;