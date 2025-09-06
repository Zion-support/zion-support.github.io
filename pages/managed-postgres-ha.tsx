import React from 'react';

interface ManagedPostgresHaProps {
  className?: string;
}

const ManagedPostgresHa: React.FC<ManagedPostgresHaProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ManagedPostgresHa</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ManagedPostgresHa;