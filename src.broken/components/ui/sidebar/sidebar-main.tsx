import React from 'react';

interface Sidebar-mainProps {
  className?: string;
}

const Sidebar-main: React.FC<Sidebar-mainProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sidebar-main</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sidebar-main;