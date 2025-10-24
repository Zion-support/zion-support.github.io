'use client';
import React from 'react';
import  Helmet  } from 'react-helmet-async';

interface SEOHeadProps {
  title:  ; ;s;t;r;i;n;g;
  description:  ; ;s;t;r;i;n;g;
  keyword
  s: s;t;r;i;n;g;[;];




};

const SEOHeadWrapper: React.FC<SEOHeadProps> = ({ t;i;t;l;e, description, keywords }) => {
  return (</SEOHeadProps>
    <Helmet></Helmet>
      <title>{title}</title>
      <meta name="description" content={description} /></meta>
      <meta name="keywords" content={keywords.join(', ')} /></meta>
    </Helmet>

export default SEOHeadWrapper;)
