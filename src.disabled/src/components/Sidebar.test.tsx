import React from 'react';

interface Sidebar.testProps {
  className?: string;
}

const Sidebar.test: React.FC<Sidebar.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sidebar.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sidebar.test;