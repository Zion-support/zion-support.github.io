import React from 'react';

interface NotificationListProps {
  className?: string;
}

const NotificationList: React.FC<NotificationListProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotificationList</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotificationList;