import React from 'react';

interface Navigation-menuProps {
  className?: string;
}

const Navigation-menu: React.FC<Navigation-menuProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Navigation-menu</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Navigation-menu;