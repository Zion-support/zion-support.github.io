import React from 'react';

interface Privacy-settingsProps {
  className?: string;
}

const Privacy-settings: React.FC<Privacy-settingsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Privacy-settings</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Privacy-settings;