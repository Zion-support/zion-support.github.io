import React from 'react';

interface ResultsHeaderProps {
  className?: string;
}

const ResultsHeader: React.FC<ResultsHeaderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResultsHeader</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResultsHeader;