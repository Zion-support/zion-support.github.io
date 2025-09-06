import React from 'react';

interface TimelineStepProps {
  className?: string;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TimelineStep</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TimelineStep;