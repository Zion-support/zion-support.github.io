import React from 'react';

interface Index.htmlProps {
  className?: string;
}

const Index.html: React.FC<Index.htmlProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Index.html</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Index.html;