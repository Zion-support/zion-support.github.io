import React from 'react';

interface UseAuthProps {
  className?: string;
}

const UseAuth: React.FC<UseAuthProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UseAuth</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UseAuth;