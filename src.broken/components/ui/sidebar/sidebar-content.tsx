import React from 'react';

interface Sidebar-contentProps {
  className?: string;
}

const Sidebar-content: React.FC<Sidebar-contentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sidebar-content</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sidebar-content;