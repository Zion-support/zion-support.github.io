import React from 'react';

interface Sidebar-menuProps {
  className?: string;
}

const Sidebar-menu: React.FC<Sidebar-menuProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sidebar-menu</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sidebar-menu;