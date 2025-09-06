import React from 'react';

interface SidebarProps {
  className?: string;

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sidebar</h1>
      <p>This component is under development.</p>
    </div>
  );

export default Sidebar;