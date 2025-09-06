import React from 'react';

interface APIDocumentationProps {
  className?: string;
}

const APIDocumentation: React.FC<APIDocumentationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>APIDocumentation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default APIDocumentation;