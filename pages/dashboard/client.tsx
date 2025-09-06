import React from 'react';

interface ClientProps {
  className?: string;
}

const Client: React.FC<ClientProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Client</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Client;