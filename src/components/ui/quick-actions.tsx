import React from 'react';

interface Quick-actionsProps {
  className?: string;
}

const Quick-actions: React.FC<Quick-actionsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Quick-actions</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Quick-actions;