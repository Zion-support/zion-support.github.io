import React from 'react';

interface CybersecurityProps {
  className?: string;
}

const Cybersecurity: React.FC<CybersecurityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Cybersecurity</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Cybersecurity;