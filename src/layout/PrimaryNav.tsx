import React from 'react';

interface PrimaryNavProps {
  className?: string;
}

const PrimaryNav: React.FC<PrimaryNavProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PrimaryNav</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PrimaryNav;