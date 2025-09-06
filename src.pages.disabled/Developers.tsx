import React from 'react';

interface DevelopersProps {
  className?: string;
}

const Developers: React.FC<DevelopersProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Developers</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Developers;