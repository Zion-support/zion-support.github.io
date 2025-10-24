'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
interface SEOHeadProps {
  title: string,
  description: string,
  keywords: string[],
}
const SEOHeadWrapper: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  return (
    <Helmet> </Head><title>{title}</title>
      <meta name="description" content={description} /> </meta><meta name="keywords" content={keywords.join(', ')} /> </meta></Head>
  )
}
export default SEOHeadWrapper