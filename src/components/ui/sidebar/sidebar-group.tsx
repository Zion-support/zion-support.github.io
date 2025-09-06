import React from 'react';

interface Sidebar-groupProps {
  className?: string;
}

const Sidebar-group: React.FC<Sidebar-groupProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sidebar-group</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sidebar-group;