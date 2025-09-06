import React from 'react';

interface PopoverProps {
  className?: string;
}

const Popover: React.FC<PopoverProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Popover</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Popover;