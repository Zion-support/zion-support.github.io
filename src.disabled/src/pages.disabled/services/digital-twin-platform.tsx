import React from 'react';

interface Digital-twin-platformProps {
  className?: string;
}

const Digital-twin-platform: React.FC<Digital-twin-platformProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Digital-twin-platform</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Digital-twin-platform;