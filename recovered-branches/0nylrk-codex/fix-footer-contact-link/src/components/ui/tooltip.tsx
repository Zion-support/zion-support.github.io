import React from 'react';

interface TooltipProps {
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Tooltip</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Tooltip;