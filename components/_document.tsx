import React from 'react';

interface _documentProps {
  className?: string;
}

const _document: React.FC<_documentProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>_document</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default _document;