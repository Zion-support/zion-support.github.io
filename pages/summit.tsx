import React from 'react';

interface SummitProps {
  className?: string;
}

const Summit: React.FC<SummitProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Summit</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Summit;