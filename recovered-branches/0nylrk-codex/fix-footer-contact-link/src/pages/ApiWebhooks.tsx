import React from 'react';

interface ApiWebhooksProps {
  className?: string;
}

const ApiWebhooks: React.FC<ApiWebhooksProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiWebhooks</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiWebhooks;