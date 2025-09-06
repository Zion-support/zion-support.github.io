import React from 'react';

interface RecentContractsTableProps {
  className?: string;
}

const RecentContractsTable: React.FC<RecentContractsTableProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>RecentContractsTable</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default RecentContractsTable;