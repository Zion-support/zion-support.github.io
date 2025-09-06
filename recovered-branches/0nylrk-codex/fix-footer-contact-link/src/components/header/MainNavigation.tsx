import React from 'react';

interface MainNavigationProps {
  className?: string;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MainNavigation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MainNavigation;