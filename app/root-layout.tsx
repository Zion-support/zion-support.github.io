import React from 'react'

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