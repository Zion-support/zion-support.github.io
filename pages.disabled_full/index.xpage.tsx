import React from 'react';

interface Index.xpageProps {
  className?: string;
}

const Index.xpage: React.FC<Index.xpageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Index.xpage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Index.xpage;