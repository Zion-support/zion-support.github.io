import React from 'react';

interface MainLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ className = '', children }) => {
  return (
    <div data-testid="ainlayout" className={className}>
      {children || <div>MainLayout Component</div>}
    </div>
  );
};

export default MainLayout;
