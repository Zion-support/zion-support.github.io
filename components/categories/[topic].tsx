import React from 'react';

interface [topic]Props {
  className?: string;
}

const [topic]: React.FC<[topic]Props> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>[topic]</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default [topic];