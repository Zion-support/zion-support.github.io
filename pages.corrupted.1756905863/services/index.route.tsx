import React from 'react';

interface Index.routeProps {
  className?: string;
}

const Index.route: React.FC<Index.routeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Index.route</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Index.route;