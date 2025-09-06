import React from 'react';

interface ConsentContextProps {
  className?: string;
}

const ConsentContext: React.FC<ConsentContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ConsentContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ConsentContext;