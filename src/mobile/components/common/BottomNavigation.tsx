import React from 'react';

interface BottomNavigationProps {
  className?: string;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BottomNavigation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BottomNavigation;