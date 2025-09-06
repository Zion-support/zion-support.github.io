import React from 'react';

interface Layout.testProps {
  className?: string;
}

const Layout.test: React.FC<Layout.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Layout.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Layout.test;