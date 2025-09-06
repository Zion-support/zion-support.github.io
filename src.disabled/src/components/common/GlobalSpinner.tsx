import React from 'react';

interface GlobalSpinnerProps {
  className?: string;
}

const GlobalSpinner: React.FC<GlobalSpinnerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GlobalSpinner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlobalSpinner;