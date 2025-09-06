import React from 'react';

interface TranslationsProps {
  className?: string;
}

const Translations: React.FC<TranslationsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Translations</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Translations;