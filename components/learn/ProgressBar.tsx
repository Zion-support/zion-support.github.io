import React from 'react';

interface ProgressBarProps {
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ProgressBar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ProgressBar;