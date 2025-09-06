import React from 'react';

interface NotificationItemProps {
  className?: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotificationItem</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotificationItem;