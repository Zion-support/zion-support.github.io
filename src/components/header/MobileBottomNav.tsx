import React from 'react';

interface MobileBottomNavProps {
  className?: string;
}

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileBottomNav</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileBottomNav;