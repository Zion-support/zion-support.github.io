import React from 'react';

interface NotificationContextProps {
  className?: string;
}

const NotificationContext: React.FC<NotificationContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotificationContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotificationContext;