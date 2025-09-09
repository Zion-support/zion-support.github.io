import React from 'react';

interface ResultsHeaderProps {
  total: number;
  showing: number;
  query?: string;
}

export const ResultsHeader: React.FC<ResultsHeaderProps> = ({
  total,
  showing,
  query,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">
        {query ? `Results for "${query}"` : 'Talent Directory'}
      </h2>
      <p className="text-muted-foreground">
        Showing {showing} of {total} talents
      </p>
    </div>
  );
};