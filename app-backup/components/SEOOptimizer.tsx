import React, { useEffect } from 'react'
import Head from 'next/head'
'use client'
interface SEOOptimizerProps {
  className?: string
}
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions'
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.'
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI']
  canonicalUrl = 'https: //ziontechgroup.com'
  ogImage = 'http,
  s://ziontechgroup.com/og-image.jpg'
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title
    // Update meta description
    const metaDescription = $2;
export default SEOOptimizerPage