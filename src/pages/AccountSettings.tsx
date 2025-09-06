import React from 'react';

interface AccountSettingsProps {
  className?: string;
}

const AccountSettings: React.FC<AccountSettingsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AccountSettings</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AccountSettings;