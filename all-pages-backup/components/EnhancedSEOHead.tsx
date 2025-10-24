<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/components/EnhancedSEOHead.tsx
import {Helmet} from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';
'use client';

<<<<<<< HEAD:all-pages-backup/components/EnhancedSEOHead.tsx
const SEOHead: React.FC<SEOHeadProps> = ({;
<<<<<<< HEAD:all-pages-backup/components/EnhancedSEOHead.tsx
  const defaultStructuredData = {;
<<<<<<< HEAD:all-pages-backup/components/EnhancedSEOHead.tsx
      "https://github.com/ziontechgroup"
<<<<<<< HEAD:all-pages-backup/components/EnhancedSEOHead.tsx
    }
    "address": {
      "@type": "PostalAddress"
      "streetAddress": "123 Tech Street"
      "addressLocality": "San Francisco"
      "addressRegion": "CA"
      "postalCode": "94105"
      "addressCountry": "US"
    }};

<<<<<<< HEAD:all-pages-backup/components/EnhancedSEOHead.tsx
      {/* Basic Meta Tags */}
      <title>{title}</title>
        <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Zion Tech Group" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData)
        }}
      />
    </>
  )};

export default SEOHead
=======
'use client'
import {Helmet} from 'lucide-react'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react'
'use client'
  title = 'Zion Tech Group - Advanced AI & IT Solutions'
  description = 'Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.'
  keywords = 'AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics, machine learning, artificial intelligence'
  canonical = '"https": //ziontechgroup.com',
  ogImage = '"https": //ziontechgroup.com/og-image.jpg',
  ogType = 'website';
  twitterCard = 'summary_large_image'
>>>>>>> origin/main
