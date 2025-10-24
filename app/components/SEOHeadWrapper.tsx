'use client';
import React from 'react';
import  Helmet  } from 'react-helmet-async';

interface SEOHeadProps {
  title: string,
  description: string
  keyword,
  s: string[]
}
const SEOHeadWrapper: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  return (</SEOHeadProps>
    <Helmet  />
      <title>{title}</title>
      <meta name="description" content={description}      />
      <meta name="keywords" content={keywords.join(', ')}      />
    </Helmet>

export default SEOHeadWrapper;

