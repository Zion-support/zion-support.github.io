import React from 'react';

interface APIProps {
  className?: string;
}

const API: React.FC<APIProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>API</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default API;