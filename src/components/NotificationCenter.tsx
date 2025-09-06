import React from 'react';

interface NotificationCenterProps {
  className?: string;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotificationCenter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotificationCenter;