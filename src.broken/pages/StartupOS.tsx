import React from 'react';

interface StartupOSProps {
  className?: string;
}

const StartupOS: React.FC<StartupOSProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>StartupOS</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default StartupOS;