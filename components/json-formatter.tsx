import React from 'react';

interface Json-formatterProps {
  className?: string;
}

const Json-formatter: React.FC<Json-formatterProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Json-formatter</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Json-formatter;