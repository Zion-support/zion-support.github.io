import React from 'react';

interface AppMinimalProps {
  className?: string;
}

const AppMinimal: React.FC<AppMinimalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AppMinimal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AppMinimal;