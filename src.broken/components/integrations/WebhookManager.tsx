import React from 'react';

interface WebhookManagerProps {
  className?: string;
}

const WebhookManager: React.FC<WebhookManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WebhookManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WebhookManager;