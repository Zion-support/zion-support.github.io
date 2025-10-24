'use client';
:all-pages-backup/components/EnhancedSEOHead.tsx
import {Helmet} from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check } from 'lucide-react';

import { Helmet, Users, Target } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Helmet, Users, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Helmet, Users, Target } from 'lucide-react';

import React from 'react';
import Head from "next/head";

interface SEOHeadProps {


  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: object


}
:all-pages-backup/components/EnhancedSEOHead.tsx
const SEOHead: React.FC<SEOHeadProps> = ({;
const SEOHead: React.FC<SEOHeadProps> = ({,
  title = 'Zion Tech Group - Advanced AI & IT Solutions',
  description = 'Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.'
  keywords = 'AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics, machine learning, artificial intelligence'
  canonical = 'https://ziontechgroup.com'
  ogImage = 'https://ziontechgroup.com/og-image.jpg'
  ogType = 'website'
  twitterCard = 'summary_large_image',
  structuredData,
}) => {
:all-pages-backup/components/EnhancedSEOHead.tsx
  const defaultStructuredData = {
;
  const defaultStructuredData = {
    "@context": "https://schema.org"
    "@type": "Organization"
    "name": "Zion Tech Group"
    "description": description
    "url": canonical
    "logo": "https://ziontechgroup.com/logo.png",
    "sameAs": [,
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup",
:all-pages-backup/components/EnhancedSEOHead.tsx
      "https://github.com/ziontechgroup",
      "https: //github.com/ziontechgroup"
    ]
    "contactPoint": {
      "@type": "ContactPoint"
      "telephone": "+1-555-123-4567"
      "contactType": "customer service"
      "areaServed": "US"
      "availableLanguage": "English",
:all-pages-backup/components/EnhancedSEOHead.tsx,
    
};
    "address": {
      "@type": "PostalAddress"
      "streetAddress": "123 Tech Street"
      "addressLocality": "San Francisco"
      "addressRegion": "CA"
      "postalCode": "94105"
      "addressCountry": "US"
    }};

    }
    "address": {
      "@type": "PostalAddress"
      "streetAddress": "123 Tech Street"
      "addressLocality": "San Francisco"
      "addressRegion": "CA"
      "postalCode": "94105"
      "addressCountry": "US"
    }
  }
  return (
    <>
      <Helmet></Helmet>
        <Head></Head>
        <title>{title}</title>
    </>
        <meta name=&quot;description&quot; content=&quot;Zion Tech Group&quot; /></meta>
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></meta>
      </Head>
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, EnhancedSEOHead, AI solutions, intelligent automation&quot; /></meta>
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." /></meta>
      </Head>
      </Helmet>
      <Navigation /></Navigation>
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;></div>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;></section>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;></div>
          <div className=&quot;relative max-w-7xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-5xl md: text-7xl font-bold text-white mb-6 leading-tight&quot;></h1>
              EnhancedSEOHead
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed&quot;></p>
              Zion Tech Group
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;></button>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; /></ArrowRight>
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;></button>
                Learn More
              </button>
            </div>
          </div>
        </section>,
,
        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;></p>
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>,
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;></div>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; /></feature>
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;></li>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; /></CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;></section>
          <div className=&quot;max-w-7xl mx-auto&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;></p>
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>,
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;></div>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; /></CheckCircle>
                  <p className=&quot;text-gray-300 text-lg&quot;>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4&quot;></section>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?</h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;></p>
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;></button>
                Start Free Trial
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;></button>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />,
:all-pages-backup/components/EnhancedSEOHead.tsx,
      {/* Basic Meta Tags */}
      <title>{title}</title>
        <meta name="description" content={description} /></meta>
      <meta name="keywords" content={keywords} /></meta>
      <link rel="canonical" href={canonical} /></link>
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} /></meta>
      <meta property="og:description" content={description} /></meta>
      <meta property="og:image" content={ogImage} /></meta>
      <meta property="og:url" content={canonical} /></meta>
      <meta property="og:type" content={ogType} /></meta>
      <meta property="og:site_name" content="Zion Tech Group" /></meta>,
      ,
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} /></meta>
      <meta name="twitter:title" content={title} /></meta>
      <meta name="twitter:description" content={description} /></meta>
      <meta name="twitter:image" content={ogImage} /></meta>
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" /></meta>
      <meta name="author" content="Zion Tech Group" /></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /></meta>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData || defaultStructuredData);,
        }}
      /></script>
    </>
  )};

export default SEOHead
    </>
  );
}
export default SEOHead;
