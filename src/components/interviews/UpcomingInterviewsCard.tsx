import React from 'react';

interface UpcomingInterviewsCardProps {
  className?: string;
}

const UpcomingInterviewsCard: React.FC<UpcomingInterviewsCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UpcomingInterviewsCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UpcomingInterviewsCard;