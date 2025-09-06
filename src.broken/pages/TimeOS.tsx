import React from 'react';

interface TimeOSProps {
  className?: string;
}

const TimeOS: React.FC<TimeOSProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TimeOS</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TimeOS;