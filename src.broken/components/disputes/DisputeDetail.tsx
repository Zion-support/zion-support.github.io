import React from 'react';

interface DisputeDetailProps {
  className?: string;
}

const DisputeDetail: React.FC<DisputeDetailProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DisputeDetail</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DisputeDetail;