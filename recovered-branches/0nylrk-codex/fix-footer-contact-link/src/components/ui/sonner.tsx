import React from 'react';

interface SonnerProps {
  className?: string;
}

const Sonner: React.FC<SonnerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sonner</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sonner;