import React from 'react';

interface DocumentationProps {
  className?: string;
}

const Documentation: React.FC<DocumentationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Documentation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Documentation;