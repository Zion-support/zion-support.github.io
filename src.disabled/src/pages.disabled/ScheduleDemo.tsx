import React from 'react';

interface ScheduleDemoProps {
  className?: string;
}

const ScheduleDemo: React.FC<ScheduleDemoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ScheduleDemo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ScheduleDemo;