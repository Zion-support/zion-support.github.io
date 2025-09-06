import React from 'react';

interface TabsProps {
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Tabs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Tabs;