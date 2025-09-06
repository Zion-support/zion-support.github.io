import React from 'react';

interface MobileFilterBarProps {
  className?: string;
}

const MobileFilterBar: React.FC<MobileFilterBarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileFilterBar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileFilterBar;