import React from 'react';

interface NavLinkProps {
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NavLink</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NavLink;