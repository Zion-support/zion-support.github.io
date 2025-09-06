import React from 'react';

interface ConstitutionProps {
  className?: string;
}

const Constitution: React.FC<ConstitutionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Constitution</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Constitution;