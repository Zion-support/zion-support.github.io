import React from 'react';

interface ApplicationProgressProps {
  className?: string;
}

const ApplicationProgress: React.FC<ApplicationProgressProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApplicationProgress</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApplicationProgress;