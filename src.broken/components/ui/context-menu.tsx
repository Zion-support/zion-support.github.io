import React from 'react';

interface Context-menuProps {
  className?: string;
}

const Context-menu: React.FC<Context-menuProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Context-menu</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Context-menu;