import React from 'react';

interface JournalProps {
  className?: string;
}

const Journal: React.FC<JournalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Journal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Journal;