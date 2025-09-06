import React from 'react';

interface ConfigProps {
  className?: string;
}

const Config: React.FC<ConfigProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Config</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Config;