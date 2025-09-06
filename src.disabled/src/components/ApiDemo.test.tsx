import React from 'react';

interface ApiDemo.testProps {
  className?: string;
}

const ApiDemo.test: React.FC<ApiDemo.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiDemo.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiDemo.test;