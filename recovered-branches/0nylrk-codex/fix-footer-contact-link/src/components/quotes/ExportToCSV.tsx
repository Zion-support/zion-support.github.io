import React from 'react';

interface ExportToCSVProps {
  className?: string;
}

const ExportToCSV: React.FC<ExportToCSVProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ExportToCSV</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ExportToCSV;