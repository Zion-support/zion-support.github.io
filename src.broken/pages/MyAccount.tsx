import React from 'react';

interface MyAccountProps {
  className?: string;
}

const MyAccount: React.FC<MyAccountProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MyAccount</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MyAccount;