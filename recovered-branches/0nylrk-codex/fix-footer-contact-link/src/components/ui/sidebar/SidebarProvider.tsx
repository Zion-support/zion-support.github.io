import React from 'react';

interface SidebarProviderProps {
  className?: string;
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SidebarProvider</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SidebarProvider;