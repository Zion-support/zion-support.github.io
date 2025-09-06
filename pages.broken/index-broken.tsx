import React from 'react';

interface Index-brokenProps {
  className?: string;
}

const Index-broken: React.FC<Index-brokenProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Index-broken</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Index-broken;