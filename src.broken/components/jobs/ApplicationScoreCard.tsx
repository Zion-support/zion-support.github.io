import React from 'react';

interface ApplicationScoreCardProps {
  className?: string;
}

const ApplicationScoreCard: React.FC<ApplicationScoreCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApplicationScoreCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApplicationScoreCard;