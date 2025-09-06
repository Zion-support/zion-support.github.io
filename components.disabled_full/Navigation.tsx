import React from 'react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Navigation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Navigation;