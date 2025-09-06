import React from 'react';

interface WebhookRelayReplayProps {
  className?: string;
}

const WebhookRelayReplay: React.FC<WebhookRelayReplayProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WebhookRelayReplay</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WebhookRelayReplay;