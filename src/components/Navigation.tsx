import React from 'react';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  className = ''
}) => {
  return (
    <div className={`navigation ${className}`}>
      <h2>Navigation</h2>
      <p>Component placeholder - needs implementation</p>
    </div>
  );
};

export default Navigation;
