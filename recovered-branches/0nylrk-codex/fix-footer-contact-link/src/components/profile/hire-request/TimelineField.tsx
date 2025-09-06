import React from 'react';

interface TimelineFieldProps {
  className?: string;
}

const TimelineField: React.FC<TimelineFieldProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TimelineField</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TimelineField;