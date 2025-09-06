import React from 'react';

interface 404.routeProps {
  className?: string;
}

const 404.route: React.FC<404.routeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>404.route</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default 404.route;