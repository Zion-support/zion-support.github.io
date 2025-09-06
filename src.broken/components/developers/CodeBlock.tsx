import React from 'react';

interface CodeBlockProps {
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CodeBlock</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CodeBlock;