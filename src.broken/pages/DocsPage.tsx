import React from 'react';

interface DocsPageProps {
  className?: string;
}

const DocsPage: React.FC<DocsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DocsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DocsPage;