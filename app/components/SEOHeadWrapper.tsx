'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOHeadProps {
<<<<<<< HEAD
  title: string
  description: string
  keywords: string[]

const SEOHeadWrapper: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
    </Helmet>
=======
  title: string,
  description: string,
  keywords: string[],
}

const SEOHeadWrapper: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  return (
    <Helmet> </Helmet><title>{title}</title>
      <meta name="description" content={description} /> </meta><meta name="keywords" content={keywords.join(', ')} /> </meta></Helmet>
  )
}
>>>>>>> cursor/fix-errors-and-merge-to-main-998c

export default SEOHeadWrapper