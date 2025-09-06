import React from 'react';

interface LoadingStateProps {
  className?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoadingState</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoadingState;