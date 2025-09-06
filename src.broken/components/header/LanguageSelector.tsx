import React from 'react';

interface LanguageSelectorProps {
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LanguageSelector</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LanguageSelector;