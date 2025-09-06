import React from 'react';

interface WhitepaperPreviewPanelProps {
  className?: string;
}

const WhitepaperPreviewPanel: React.FC<WhitepaperPreviewPanelProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WhitepaperPreviewPanel</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WhitepaperPreviewPanel;