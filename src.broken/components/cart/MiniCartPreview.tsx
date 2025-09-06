import React from 'react';

interface MiniCartPreviewProps {
  className?: string;
}

const MiniCartPreview: React.FC<MiniCartPreviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MiniCartPreview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MiniCartPreview;