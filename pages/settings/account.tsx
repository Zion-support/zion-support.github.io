import React from 'react';

interface AccountProps {
  className?: string;
}

const Account: React.FC<AccountProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Account</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Account;