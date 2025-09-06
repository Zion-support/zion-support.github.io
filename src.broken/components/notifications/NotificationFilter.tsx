import React from 'react';

interface NotificationFilterProps {
  className?: string;
}

const NotificationFilter: React.FC<NotificationFilterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotificationFilter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotificationFilter;