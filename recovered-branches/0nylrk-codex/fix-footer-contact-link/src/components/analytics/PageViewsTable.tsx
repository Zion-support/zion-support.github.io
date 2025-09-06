import React from 'react';

interface PageViewsTableProps {
  className?: string;
}

const PageViewsTable: React.FC<PageViewsTableProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PageViewsTable</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default PageViewsTable;