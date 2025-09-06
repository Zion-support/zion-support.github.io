import React from 'react';

interface TranslationPreviewProps {
  className?: string;
}

const TranslationPreview: React.FC<TranslationPreviewProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TranslationPreview</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TranslationPreview;