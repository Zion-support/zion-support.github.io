import React from 'react';
import { Helmet } from 'react-helmet-async';
const SEOHead: React.FC<SEOHeadProps> = ({
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`;
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : '');
  const defaultStructuredData = {
export default SEOHead;