import React from 'react';

interface EventsProps {
  className?: string;
}

const Events: React.FC<EventsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Events</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Events;