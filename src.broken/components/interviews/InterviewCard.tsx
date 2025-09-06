import React from 'react';

interface InterviewCardProps {
  className?: string;
}

const InterviewCard: React.FC<InterviewCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InterviewCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InterviewCard;