import React from 'react';

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'sidebar ' + className}>
      {children || <p>Sidebar component</p>}
    </div>
  );
};

export default function Sidebar() { return <div>Sidebar Component</div>; }
