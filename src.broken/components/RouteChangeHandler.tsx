import React from 'react';

interface RouteChangeHandlerProps {
  className?: string;
}

const RouteChangeHandler: React.FC<RouteChangeHandlerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RouteChangeHandler</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RouteChangeHandler;