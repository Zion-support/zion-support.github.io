import React from 'react';

interface DialogProps {
  className?: string;
}

const Dialog: React.FC<DialogProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Dialog</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Dialog;