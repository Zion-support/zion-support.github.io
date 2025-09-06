import React from 'react';

interface Analytics.testProps {
  className?: string;
}

const Analytics.test: React.FC<Analytics.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Analytics.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Analytics.test;