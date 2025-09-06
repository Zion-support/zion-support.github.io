import React from 'react';

interface ApplyProps {
  className?: string;
}

const Apply: React.FC<ApplyProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Apply</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Apply;