import React from 'react';

interface WebhooksManagerProps {
  className?: string;
}

const WebhooksManager: React.FC<WebhooksManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WebhooksManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WebhooksManager;