import React from 'react';

interface HostProps {
  className?: string;
}

const Host: React.FC<HostProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Host</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Host;