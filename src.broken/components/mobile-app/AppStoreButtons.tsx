import React from 'react';

interface AppStoreButtonsProps {
  className?: string;
}

const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AppStoreButtons</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AppStoreButtons;