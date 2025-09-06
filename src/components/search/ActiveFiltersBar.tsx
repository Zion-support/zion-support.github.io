import React from 'react';

interface ActiveFiltersBarProps {
  className?: string;
}

const ActiveFiltersBar: React.FC<ActiveFiltersBarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ActiveFiltersBar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ActiveFiltersBar;