<<<<<<< HEAD

=======
import React from 'react'
>>>>>>> cursor/fix-errors-and-merge-to-main-50ad

interface RootLayoutProps {
}

const RootLayout: React.FC<RootLayoutProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'root-layout ' + className}>
      {children || <p>Root-layout component</p>}
    </div>
  );
};

export default RootLayout;