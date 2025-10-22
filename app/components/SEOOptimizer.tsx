'use client'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

interface SEOOptimizerProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  structuredData?: Record<string, unknown>
}

const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Zion Tech Group - Advanced AI and IT Solutions',
  description = 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
  keywords = ['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI'],
  canonicalUrl = 'https://ziontechgroup.com',
  ogImage = 'https://ziontechgroup.com/og-image.jpg',
  structuredData
}) => {
  useEffect(() => {
    // Update page title
    document.title = title
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = description
      document.head.appendChild(meta)
    }
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
    
    // Add structured data
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      script.id = 'structured-data'
      // Remove existing structured data
      const existing = document.getElementById('structured-data')
      if (existing) {
        existing.remove()
      }
      document.head.appendChild(script)
    }
    
    // Add breadcrumb structured data
    const breadcrumbData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://ziontechgroup.com'
        }
      ]
    }
    const breadcrumbScript = document.createElement('script')
    breadcrumbScript.type = 'application/ld+json'
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData)
    breadcrumbScript.id = 'breadcrumb-structured-data'
    // Remove existing breadcrumb data
    const existingBreadcrumb = document.getElementById('breadcrumb-structured-data')
    if (existingBreadcrumb) {
      existingBreadcrumb.remove()
    }
    document.head.appendChild(breadcrumbScript)
    
    // Add organization structured data
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Zion Tech Group',
      'url': 'https://ziontechgroup.com',
      'logo': 'https://ziontechgroup.com/logo.png',
      'description': 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
      'foundingDate': '2020',
      'numberOfEmployees': '50-100',
      'industry': 'Technology',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+1-555-0123',
        'contactType': 'customer service',
        'availableLanguage': 'English'
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '123 Tech Street',
        'addressLocality': 'San Francisco',
        'addressRegion': 'CA',
        'postalCode': '94105',
        'addressCountry': 'US'
      },
      'sameAs': [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup',
        'https://github.com/ziontechgroup'
      ]
    }
    const orgScript = document.createElement('script')
    orgScript.type = 'application/ld+json'
    orgScript.textContent = JSON.stringify(organizationData)
    orgScript.id = 'organization-structured-data'
    // Remove existing organization data
    const existingOrg = document.getElementById('organization-structured-data')
    if (existingOrg) {
      existingOrg.remove()
    }
    document.head.appendChild(orgScript)
    
    // Add FAQ structured data
    const faqData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What services does Zion Tech Group offer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We offer AI-powered enterprise solutions, quantum computing services, autonomous systems development, and comprehensive digital transformation consulting.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How can I get started with your services?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Contact us through our website or call us directly. We offer free consultations to assess your needs and provide tailored solutions.'
          }
        }
      ]
    }
    const faqScript = document.createElement('script')
    faqScript.type = 'application/ld+json'
    faqScript.textContent = JSON.stringify(faqData)
    faqScript.id = 'faq-structured-data'
    // Remove existing FAQ data
    const existingFaq = document.getElementById('faq-structured-data')
    if (existingFaq) {
      existingFaq.remove()
    }
    document.head.appendChild(faqScript)
    
  }, [title, description, canonicalUrl, structuredData])

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Helmet>
  )
}

export default SEOOptimizer