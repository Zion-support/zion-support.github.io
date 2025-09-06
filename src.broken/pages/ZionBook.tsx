import React from 'react';

interface ZionBookProps {
  className?: string;
}

const ZionBook: React.FC<ZionBookProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ZionBook</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ZionBook;