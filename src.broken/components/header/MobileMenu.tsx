import React from 'react';

interface MobileMenuProps {
  className?: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileMenu</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileMenu;