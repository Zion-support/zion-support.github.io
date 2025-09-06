import React from 'react';

interface ApplicationsTableProps {
  className?: string;
}

const ApplicationsTable: React.FC<ApplicationsTableProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ApplicationsTable</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ApplicationsTable;