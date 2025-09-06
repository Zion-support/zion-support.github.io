import React from 'react';

interface InterviewsProps {
  className?: string;
}

const Interviews: React.FC<InterviewsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Interviews</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Interviews;