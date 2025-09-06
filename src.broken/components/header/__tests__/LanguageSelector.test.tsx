import React from 'react';

interface LanguageSelector.testProps {
  className?: string;
}

const LanguageSelector.test: React.FC<LanguageSelector.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LanguageSelector.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LanguageSelector.test;