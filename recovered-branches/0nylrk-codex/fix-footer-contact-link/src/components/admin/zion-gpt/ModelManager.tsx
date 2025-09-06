import React from 'react';

interface ModelManagerProps {
  className?: string;
}

const ModelManager: React.FC<ModelManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ModelManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ModelManager;