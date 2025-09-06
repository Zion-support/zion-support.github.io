import React from 'react';

interface MainSidebarProps {
  className?: string;
}

const MainSidebar: React.FC<MainSidebarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MainSidebar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MainSidebar;