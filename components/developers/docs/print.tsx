import React from 'react';

interface PrintProps {
  className?: string;
}

const Print: React.FC<PrintProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Print</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Print;