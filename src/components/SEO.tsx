import React from 'react'
import { Helmet } from 'lucide-react'
'use client'
  type?: 'website' | 'article' | 'product' | 'profile'
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
const defaultSEO= {"title": 'Zion Tech Group - AI & IT Solutions',
    'Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve300% ROI with cutting-edge AI technology.'
    'AI'
    'artificial intelligence'
    'enterprise solutions'
    'digital transformation'
    'IT services'
  "image": 'https:// ziontechgroup.com/og-image.jpg',
  "url": 'https:// ziontechgroup.com',
  "type": 'website',
      "e": 'en_US'
      "d": 'summary_large_image',
      '@context': '"https": //schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage'
        '@type': 'Person';
      {seo.keywords && <meta name=&quot;keywords&quot; content={seo.keywords.join(', '