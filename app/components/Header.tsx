import React from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}
<<<<<<< HEAD
const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
export default Header;
=======

const Header: React.FC<HeaderProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'header ' + className}>
      {children || <p>Header component</p>}
    </div>
  );
};

export default Header;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
