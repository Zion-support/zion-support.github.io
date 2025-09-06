import React from 'react';

interface Api-docsProps {
  className?: string;
}

const Api-docs: React.FC<Api-docsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Api-docs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Api-docs;