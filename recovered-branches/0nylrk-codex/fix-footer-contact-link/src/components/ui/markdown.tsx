import React from 'react';

interface MarkdownProps {
  className?: string;
}

const Markdown: React.FC<MarkdownProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Markdown</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Markdown;