import React from 'react';

interface AgendaTimelineProps {
  className?: string;
}

const AgendaTimeline: React.FC<AgendaTimelineProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AgendaTimeline</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AgendaTimeline;