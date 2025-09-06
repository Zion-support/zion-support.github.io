import React from 'react';

interface Content-creationProps {
  className?: string;
}

const Content-creation: React.FC<Content-creationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Content-creation</h1>
      <p>This component is under development.</p>
    </div>
  );
