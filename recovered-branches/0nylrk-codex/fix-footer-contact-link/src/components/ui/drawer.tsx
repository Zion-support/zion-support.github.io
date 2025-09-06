import React from 'react';

interface DrawerProps {
  className?: string;
}

const Drawer: React.FC<DrawerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Drawer</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Drawer;