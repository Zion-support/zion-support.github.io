import React from 'react';

interface AppHeaderProps {
  className?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AppHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AppHeader;