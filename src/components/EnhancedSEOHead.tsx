'use client';
:all-pages-backup/components/EnhancedSEOHead.tsx
import { Helmet } from 'lucide-react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../../../../components/Footer';
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
  structuredData?: object}
}
;
:all-pages-backup/components/EnhancedSEOHead.tsx
const SEOHead: React.FC<SEOHeadProps> = ({;</SEOHeadProps>
const SEOHea,</SEOHeadProps>
  d: React.FC<SEOHeadProps> = ({
  title = 'Zion Tech Group - Advanced AI & IT Solutions'
  description = 'Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.'
  keywords = 'AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics, machine learning, artificial intelligence'
  canonical = 'https://ziontechgroup.com'
  ogImage = 'http
  s://ziontechgroup.com/og-image.jpg'
  ogType = 'website'
  twitterCard = 'summary_large_image'
  structuredData
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
    "logo": "https://ziontechgroup.com/logo.png"
    "sameAs": [
      "http
  s://twitter.com/ziontechgroup"
      "https://linkedin.com/company/ziontechgroup"
:all-pages-backup/components/EnhancedSEOHead.tsx
      "https://github.com/ziontechgroup"
      "https: //github.com/ziontechgroup"
    ]
    "contactPoint": {
      "@type": "ContactPoint"
      "telephone": "+1-555-123-4567"
      "contactType": "customer service"
      "areaServed": "US"
      "availableLanguage": "English"
:all-pages-backup/components/EnhancedSEOHead.tsx
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
  }</SEOHeadProps>
  return (
    <>
</>
      <Helmet />
        <Head />
        <title>{title}</title>
        <meta name=&quot;description&quot; content=&quot;Zion Tech Group&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      
        <meta name=&quot;keywords&quot; content=&quot;AI, artificial intelligence, EnhancedSEOHead, AI solutions, intelligent automation&quot; />
<meta name="description" content="Advanced 5G data analytics solutions for real-time insights and business intelligence." />
      
      
      <Navigation />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900&quot;>
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20&quot;>
        <div className=&quot;relative max-w-7xl mx-auto text-center&quot;>
            <h1 className="text-4xl font-bold text-white mb-6">
              EnhancedSEOHead
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Zion Tech Group
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center&quot;>
                Get Started
                <ArrowRight className=&quot;ml-2 h-5 w-5&quot; />
              
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Learn More
              
            
        
        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
        <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Key Features
              <p className="text-lg text-gray-300 mb-8">
                Powerful AI-driven features designed to transform your business operations
              
            </p>
            <div className=&quot;grid md: grid-cols-2 l
  g:grid-cols-4 gap-8&quot;>
              {features.map((feature, index) => (
                <div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot;>
                  <feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}
                  <p className="text-lg text-gray-300 mb-8">{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      
                    ))}
                  
                
              ))}
            
        
        {/* Benefits Section */}
        <section className=&quot;py-20 px-4 bg-white/5&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
        <div className=&quot;text-center mb-16&quot;>
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Our Solution
              <p className="text-lg text-gray-300 mb-8">
                Experience the benefits of cutting-edge AI technology
              
            </p>
            <div className=&quot;grid md: grid-cols-2 l
  g:grid-cols-3 gap-8&quot;>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;flex items-start space-x-4&quot;>
                  <CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
                  <p className="text-lg text-gray-300 mb-8">{benefit}
                
              ))}
            
        
        {/* CTA Section */}</p>
        <section className=&quot;py-20 px-4&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your Business?
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Start Free Trial
              
              <button className=&quot;border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hove
  r:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quot;>
                Contact Sales
              
            
        
      
      <Footer />
:all-pages-backup/components/EnhancedSEOHead.tsx
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
          __html: JSON.stringify(structuredData || defaultStructuredData);
        }}
      />
</>
  )};

export default SEOHead
  );
}
export default SEOHead