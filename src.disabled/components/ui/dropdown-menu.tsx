import React from 'react';

interface Dropdown-menuProps {
  className?: string;
}

const Dropdown-menu: React.FC<Dropdown-menuProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Dropdown-menu</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Dropdown-menu;