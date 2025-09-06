import React from 'react';

interface StartupProps {
  className?: string;
}

const Startup: React.FC<StartupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Startup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Startup;