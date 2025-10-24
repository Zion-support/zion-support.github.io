import React from 'react';

interface RootLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ className = '', children }) => {
  return (
    <div className={`rootlayout ${className}`}>
      {children}
    </div>
  );
};

export default RootLayout;