import React from 'react';

interface MenubarProps {
  className?: string;
}

const Menubar: React.FC<MenubarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Menubar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Menubar;