import React from 'react';

interface CollapsibleProps {
  className?: string;
}

const Collapsible: React.FC<CollapsibleProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Collapsible</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Collapsible;