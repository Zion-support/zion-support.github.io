import React from 'react';

interface Footer.testProps {
  className?: string;
}

const Footer.test: React.FC<Footer.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Footer.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Footer.test;