import React from 'react';

interface ApiDocsProps {
  className?: string;
}

const ApiDocs: React.FC<ApiDocsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiDocs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiDocs;