import React from 'react';

interface RootLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = (_{ 
  className = '', _children 
}) => {
  return (
    <div className={'root-layout ' + className}>
      {children || <p>Root-layout component</p>}
    </div>
  );
};

export default RootLayout;