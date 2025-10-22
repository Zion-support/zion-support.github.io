import React from 'react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <h2>Navigation</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default Navigation;