import React from 'react';

interface SidebarContentProps {
  className?: string;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SidebarContent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SidebarContent;