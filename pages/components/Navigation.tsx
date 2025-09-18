import React from 'react';

interface NavigationProps {
  children?: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Navigation;