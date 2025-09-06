import React from 'react';

interface UnauthorizedProps {
  className?: string;
}

const Unauthorized: React.FC<UnauthorizedProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Unauthorized</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Unauthorized;