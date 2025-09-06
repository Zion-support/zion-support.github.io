import React from 'react';

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Separator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Separator;