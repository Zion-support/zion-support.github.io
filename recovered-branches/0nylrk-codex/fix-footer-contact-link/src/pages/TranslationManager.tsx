import React from 'react';

interface TranslationManagerProps {
  className?: string;
}

const TranslationManager: React.FC<TranslationManagerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TranslationManager</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TranslationManager;