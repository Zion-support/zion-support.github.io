import React from 'react';

interface ApiDocsPageProps {
  className?: string;
}

const ApiDocsPage: React.FC<ApiDocsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApiDocsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApiDocsPage;