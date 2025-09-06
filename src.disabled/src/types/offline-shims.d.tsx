import React from 'react';

interface Offline-shims.dProps {
  className?: string;
}

const Offline-shims.d: React.FC<Offline-shims.dProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Offline-shims.d</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Offline-shims.d;