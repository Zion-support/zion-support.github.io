import React from 'react';

interface StructuredDataProps {
  type: string;
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
    />
  );
};

export default StructuredData;