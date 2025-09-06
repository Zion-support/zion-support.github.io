import React from 'react';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SettingsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SettingsPage;