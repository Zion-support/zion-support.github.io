import React from 'react';

interface NotificationSystem.testProps {
  className?: string;
}

const NotificationSystem.test: React.FC<NotificationSystem.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NotificationSystem.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NotificationSystem.test;