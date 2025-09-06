import React from 'react';

interface SheetProps {
  className?: string;
}

const Sheet: React.FC<SheetProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sheet</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sheet;