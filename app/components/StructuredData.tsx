import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  data: Record<string, unknown>;
  type?: 'application/ld+json' | 'application/json';
}

const StructuredData: React.FC<StructuredDataProps> = ({
  data,
  type = 'application/ld+json'
}) => {
  return (
    <Helmet>
      <script type={type}>
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

export default StructuredData;