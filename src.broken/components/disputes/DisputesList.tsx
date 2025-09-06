import React from 'react';

interface DisputesListProps {
  className?: string;
}

const DisputesList: React.FC<DisputesListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DisputesList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DisputesList;