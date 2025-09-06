import React from 'react';

interface DataCatalogLineageProps {
  className?: string;
}

const DataCatalogLineage: React.FC<DataCatalogLineageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DataCatalogLineage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DataCatalogLineage;