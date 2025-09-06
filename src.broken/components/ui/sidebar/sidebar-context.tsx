import React from 'react';

interface Sidebar-contextProps {
  className?: string;
}

const Sidebar-context: React.FC<Sidebar-contextProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sidebar-context</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sidebar-context;