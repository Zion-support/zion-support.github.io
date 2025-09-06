import React from 'react';

interface MainLayoutProps {
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MainLayout</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MainLayout;