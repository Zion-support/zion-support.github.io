import React from 'react';

interface ApplicationCardProps {
  className?: string;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApplicationCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApplicationCard;