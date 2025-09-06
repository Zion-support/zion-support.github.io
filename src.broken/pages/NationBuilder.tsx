import React from 'react';

interface NationBuilderProps {
  className?: string;
}

const NationBuilder: React.FC<NationBuilderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NationBuilder</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NationBuilder;