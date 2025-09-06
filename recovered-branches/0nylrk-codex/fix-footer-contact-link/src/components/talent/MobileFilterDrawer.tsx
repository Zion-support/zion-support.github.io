import React from 'react';

interface MobileFilterDrawerProps {
  className?: string;
}

const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileFilterDrawer</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileFilterDrawer;