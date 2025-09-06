import React from 'react';

interface BookBuilderProps {
  className?: string;
}

const BookBuilder: React.FC<BookBuilderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>BookBuilder</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default BookBuilder;