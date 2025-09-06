import React from 'react';

interface SuccessProps {
  className?: string;
}

const Success: React.FC<SuccessProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Success</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Success;