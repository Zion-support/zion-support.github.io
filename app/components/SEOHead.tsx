'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
    </Helmet>
  )
}

export default SEOHead
