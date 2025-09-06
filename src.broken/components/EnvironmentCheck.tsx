import React from 'react';

interface EnvironmentCheckProps {
  className?: string;
}

const EnvironmentCheck: React.FC<EnvironmentCheckProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnvironmentCheck</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnvironmentCheck;