import React from 'react';

interface PaginationProps {
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Pagination</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Pagination;