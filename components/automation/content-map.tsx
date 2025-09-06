import React from 'react';

interface Content-mapProps {
  className?: string;
}

const Content-map: React.FC<Content-mapProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Content-map</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Content-map;