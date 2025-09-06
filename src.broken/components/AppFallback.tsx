import React from 'react';

interface AppFallbackProps {
  className?: string;
}

const AppFallback: React.FC<AppFallbackProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AppFallback</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AppFallback;