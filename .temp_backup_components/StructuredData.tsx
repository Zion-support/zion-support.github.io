import React from 'react';

interface StructuredDataProps {
  type: string;
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ typedata }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredDatanull2)
      }}
    />
  );
};

export default StructuredData;