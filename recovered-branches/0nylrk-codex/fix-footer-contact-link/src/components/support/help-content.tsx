import React from 'react';

interface Help-contentProps {
  className?: string;
}

const Help-content: React.FC<Help-contentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Help-content</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Help-content;