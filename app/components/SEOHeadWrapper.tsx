import React from 'react';
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
  title: string
  description: string
  keyword,
  s: string[]
}
const SEOHeadWrapper: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  return (</SEOHeadProps>
    <Helmet></Helmet>
      <title>{title}</title>
      <meta name="description" content={description} /></meta>
      <meta name="keywords" content={keywords.join(', ')} /></meta>
    </Helmet>

export default SEOHeadWrapper