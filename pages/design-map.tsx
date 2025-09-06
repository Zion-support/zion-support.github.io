import React from 'react';

interface DesignMapProps {
  className?: string;
}

const DesignMap: React.FC<DesignMapProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DesignMap</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DesignMap;