import React from 'react';

interface ApiGettingStartedProps {
  className?: string;
}

const ApiGettingStarted: React.FC<ApiGettingStartedProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiGettingStarted</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiGettingStarted;