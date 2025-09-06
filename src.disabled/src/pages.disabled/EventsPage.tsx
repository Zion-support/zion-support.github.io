import React from 'react';

interface EventsPageProps {
  className?: string;
}

const EventsPage: React.FC<EventsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EventsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EventsPage;