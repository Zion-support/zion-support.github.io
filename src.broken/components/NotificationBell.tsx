import React from 'react';

interface NotificationBellProps {
  className?: string;
}

const NotificationBell: React.FC<NotificationBellProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotificationBell</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotificationBell;