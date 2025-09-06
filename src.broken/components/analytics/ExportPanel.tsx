import React from 'react';

interface ExportPanelProps {
  className?: string;
}

const ExportPanel: React.FC<ExportPanelProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ExportPanel</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ExportPanel;