import React from 'react';

interface PreviewProps {
  className?: string;
}

const Preview: React.FC<PreviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Preview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Preview;