import React from 'react';

interface NotesProps {
  className?: string;
}

const Notes: React.FC<NotesProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Notes</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Notes;