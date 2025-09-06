import React from 'react';

interface AppMinimal.testProps {
  className?: string;
}

const AppMinimal.test: React.FC<AppMinimal.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AppMinimal.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AppMinimal.test;