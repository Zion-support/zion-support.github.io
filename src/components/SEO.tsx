import React from 'react';
import { _Helmet } from 'react-helmet-async';

import SEO from '@/components/SEO';
import { Helmet } from 'react-helmet-async';
const services = [];
const solutions = [];


}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const _resolvedTitle = title ?? 'Zion Tech Group';
  const _resolvedDescription = description ?? 'AI-powered solutions and IT services by Zion Tech Group';

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      {resolvedDescription && (
        <meta name="description" content={resolvedDescription} />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0ea5e9" />
      <link rel="icon" href="/favicon.svg" />

