import React from 'react';

interface AIDockerProps {
  className?: string;
}

const AIDocker: React.FC<AIDockerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIDocker</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIDocker;