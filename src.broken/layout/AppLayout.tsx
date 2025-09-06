import React from 'react';

interface AppLayoutProps {
  className?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AppLayout</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AppLayout;