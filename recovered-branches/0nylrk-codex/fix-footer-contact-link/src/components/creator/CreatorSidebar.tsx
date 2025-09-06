import React from 'react';

interface CreatorSidebarProps {
  className?: string;
}

const CreatorSidebar: React.FC<CreatorSidebarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CreatorSidebar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CreatorSidebar;