import React from 'react';

interface ApiDocumentationProps {
  className?: string;
}

const ApiDocumentation: React.FC<ApiDocumentationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiDocumentation</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiDocumentation;