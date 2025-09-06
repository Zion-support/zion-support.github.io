import React from 'react';

interface LanguageDetectionPopup.testProps {
  className?: string;
}

const LanguageDetectionPopup.test: React.FC<LanguageDetectionPopup.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LanguageDetectionPopup.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LanguageDetectionPopup.test;