import React from 'react';

interface Header.testProps {
  className?: string;
}

const Header.test: React.FC<Header.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Header.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Header.test;