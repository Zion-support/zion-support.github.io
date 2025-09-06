import React from 'react';

interface NotificationProps {
  className?: string;
}

const Notification: React.FC<NotificationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Notification</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Notification;