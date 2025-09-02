import React from 'react';'
import Head from 'next/head' interface StructuredDataProps {;"'"'"
  type?: 'Organization' | 'WebSite' | 'WebPage' | 'Service' | 'Article';"''
   data?: } export const StructuredData: React.FC<StructuredDataProps></StructuredDataProps> = ({ type = 'Organization', data}) => { const getDefaultData = () => { switch (type) { case 'Organization': return { '@context': 'https:',"
}}}}"'"
";'"'"