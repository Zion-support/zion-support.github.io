import React from 'react';

interface CongressProps {
  className?: string;
}

const Congress: React.FC<CongressProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Congress</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Congress;