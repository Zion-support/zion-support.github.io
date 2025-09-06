import React from 'react';

interface Knowledge-graphProps {
  className?: string;
}

const Knowledge-graph: React.FC<Knowledge-graphProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Knowledge-graph</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Knowledge-graph;