import React from 'react';

interface ApiKeysManagerProps {
  className?: string;
}

const ApiKeysManager: React.FC<ApiKeysManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiKeysManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiKeysManager;