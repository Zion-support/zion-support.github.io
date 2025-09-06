import React from 'react';

interface NotificationHeaderProps {
  className?: string;
}

const NotificationHeader: React.FC<NotificationHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotificationHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotificationHeader;