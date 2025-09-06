import React from 'react';

interface ApiDocsLayoutProps {
  className?: string;
}

const ApiDocsLayout: React.FC<ApiDocsLayoutProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiDocsLayout</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiDocsLayout;