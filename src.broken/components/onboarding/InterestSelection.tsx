import React from 'react';

interface InterestSelectionProps {
  className?: string;
}

const InterestSelection: React.FC<InterestSelectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>InterestSelection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default InterestSelection;