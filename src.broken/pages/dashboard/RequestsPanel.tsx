import React from 'react';

interface RequestsPanelProps {
  className?: string;
}

const RequestsPanel: React.FC<RequestsPanelProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RequestsPanel</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RequestsPanel;