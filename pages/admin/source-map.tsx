import React from 'react';

interface SourceMapProps {
  className?: string;
}

const SourceMap: React.FC<SourceMapProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SourceMap</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SourceMap;