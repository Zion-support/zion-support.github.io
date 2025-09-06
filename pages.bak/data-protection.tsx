import React from 'react';

interface Data-protectionProps {
  className?: string;
}

const Data-protection: React.FC<Data-protectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Data-protection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Data-protection;