import React from 'react';

interface NotificationsProps {
  className?: string;
}

const Notifications: React.FC<NotificationsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Notifications</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Notifications;