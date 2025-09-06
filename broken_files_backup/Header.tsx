import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Header</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Header;