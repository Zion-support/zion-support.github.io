import React from 'react';

interface PreviewHeaderProps {
  className?: string;
}

const PreviewHeader: React.FC<PreviewHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PreviewHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PreviewHeader;