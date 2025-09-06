import React from 'react';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LanguageSwitcher</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LanguageSwitcher;