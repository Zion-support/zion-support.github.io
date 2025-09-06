import React from 'react';

interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Spinner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Spinner;