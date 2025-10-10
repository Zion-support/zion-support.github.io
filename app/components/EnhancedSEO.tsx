import React from 'react';
import { Helmet } from 'react-helmet-async';
const EnhancedSEO: React.FC<EnhancedSEOProps>= ({
const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  const robotsContent = robots || `${noIndex ? 'noindex' : 'index'}, ${noFollow ? 'nofollow' : 'follow'}`;
  const defaultStructuredData = {
  const finalStructuredData = structuredData || defaultStructuredData;
export default EnhancedSEO;