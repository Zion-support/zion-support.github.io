import React from 'react';

interface SidebarGroupContentProps {
  className?: string;
}

const SidebarGroupContent: React.FC<SidebarGroupContentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SidebarGroupContent</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SidebarGroupContent;