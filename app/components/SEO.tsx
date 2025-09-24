import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

const SEO: React.FC<SEOProps> = ({
  title = 'Zion - AI-Powered Solutions',
  description = 'Leading provider of AI-powered solutions for enterprises',
  keywords = 'AI, artificial intelligence, enterprise solutions, automation',
  image = '/og-image.jpg',
  url = 'https://zion.app'
}) => {
  // For now, return null to avoid SSR issues
  // In a real app, you'd use next/head or next.js metadata API
  return null
}

export default SEO