'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  [key: string]: any;
}

const EnhancedSEOHead: React.FC<Props> = (props) => {
  return (
    <Helmet>
      <title>Zion Tech Group</title>
      <meta name="description" content="Professional AI and IT solutions" />
    </Helmet>
  );
};

export default EnhancedSEOHead;