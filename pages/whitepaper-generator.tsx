import React from 'react';

interface WhitepaperGeneratorProps {
  className?: string;
}

const WhitepaperGenerator: React.FC<WhitepaperGeneratorProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WhitepaperGenerator</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WhitepaperGenerator;