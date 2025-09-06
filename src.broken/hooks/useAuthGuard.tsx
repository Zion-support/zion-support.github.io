import React from 'react';

interface UseAuthGuardProps {
  className?: string;
}

const UseAuthGuard: React.FC<UseAuthGuardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UseAuthGuard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UseAuthGuard;