import React from 'react';

interface Event-managementProps {
  className?: string;
}

const Event-management: React.FC<Event-managementProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Event-management</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Event-management;