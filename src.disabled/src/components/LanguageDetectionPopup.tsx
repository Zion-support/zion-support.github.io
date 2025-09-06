import React from 'react';

interface LanguageDetectionPopupProps {
  className?: string;
}

const LanguageDetectionPopup: React.FC<LanguageDetectionPopupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LanguageDetectionPopup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LanguageDetectionPopup;