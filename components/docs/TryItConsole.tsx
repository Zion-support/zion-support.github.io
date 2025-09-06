import React from 'react';

interface TryItConsoleProps {
  className?: string;
}

const TryItConsole: React.FC<TryItConsoleProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TryItConsole</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TryItConsole;