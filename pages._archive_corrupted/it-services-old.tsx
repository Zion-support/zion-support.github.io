import React from 'react';

interface It-services-oldProps {
  className?: string;
}

const It-services-old: React.FC<It-services-oldProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>It-services-old</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default It-services-old;