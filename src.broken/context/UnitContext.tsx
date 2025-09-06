import React from 'react';

interface UnitContextProps {
  className?: string;
}

const UnitContext: React.FC<UnitContextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UnitContext</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UnitContext;