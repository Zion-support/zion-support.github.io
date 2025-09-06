import React from 'react';

interface TextareaProps {
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Textarea</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Textarea;