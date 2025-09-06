import React from 'react';

interface CoachWidgetProps {
  className?: string;
}

const CoachWidget: React.FC<CoachWidgetProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CoachWidget</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CoachWidget;