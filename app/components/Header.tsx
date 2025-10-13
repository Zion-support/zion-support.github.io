import React from 'react';

interface HeaderProps {
  // Add props here as needed
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Header</h2>
      <p>This component is under development.</p>
    </div>
  );
};

export default Header;