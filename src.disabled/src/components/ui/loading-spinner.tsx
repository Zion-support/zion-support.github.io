import React from 'react';

interface Loading-spinnerProps {
  className?: string;
}

const Loading-spinner: React.FC<Loading-spinnerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Loading-spinner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Loading-spinner;