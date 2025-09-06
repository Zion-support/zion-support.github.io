import React from 'react';

interface FoundationProps {
  className?: string;
}

const Foundation: React.FC<FoundationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Foundation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Foundation;