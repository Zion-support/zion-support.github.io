import React from 'react';

interface ResizableProps {
  className?: string;
}

const Resizable: React.FC<ResizableProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Resizable</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Resizable;