import React from 'react';

interface TableProps {
  className?: string;
}

const Table: React.FC<TableProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Table</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Table;