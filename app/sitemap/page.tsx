import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SitemapPage() {
import React from 'react';

const SitemapPage: React.FC = () => {
  const pages = [
    { path: '/', title: 'Home', description: 'Zion Tech Group - Advanced AI and IT Solutions' ,},
    { path: '/about', title: 'About Us', description: 'Learn about our mission and expertise' ,},
    { path: '/services', title: 'All Services', description: 'Comprehensive AI, IT, and micro SAAS solutions' },
    { path: '/micro-saas', title: 'Micro SAAS Solutions', description: 'Affordable, powerful AI-driven tools for modern businesses' },
    { path: '/ai-services', title: 'AI Services', description: 'Advanced artificial intelligence solutions' ,},
    { path: '/ai-marketing', title: 'AI Marketing', description: 'Revolutionary AI-powered marketing automation' ,},
    { path: '/ai-automation', title: 'AI Automation', description: 'Intelligent automation of business processes' ,},
    { path: '/ai-healthcare', title: 'AI Healthcare', description: 'Cutting-edge AI solutions for medical applications' ,},
    { path: '/ai-fintech', title: 'AI Fintech', description: 'Revolutionary AI-powered financial services' ,},
    { path: '/it-services', title: 'IT Services', description: 'Comprehensive IT solutions and infrastructure' ,},
    { path: '/quantum-computing', title: 'Quantum Computing', description: 'Next-generation quantum computing capabilities' ,},
    { path: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing and self-optimizing systems' ,},
    { path: '/business-intelligence', title: 'Business Intelligence', description: 'Data-driven insights and analytics' ,},
    { path: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Decentralized applications and smart contracts' ,},
    { path: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Connected devices and edge analytics' ,},
    { path: '/cybersecurity', title: 'Cybersecurity', description: 'Advanced security services and threat detection' ,},
    { path: '/services-advertising', title: 'AI Advertising', description: 'AI-powered advertising and marketing solutions' ,},
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and client implementations' ,},
    { path: '/enterprise', title: 'Enterprise Solutions', description: 'Advanced AI and IT solutions for large organizations' ,},
    { path: '/team', title: 'Our Team', description: 'Meet the experts behind our innovative solutions' ,},
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team of experts' ,},
    { path: '/blog', title: 'Blog & Insights', description: 'Latest insights and trends in AI and technology' ,},
    { path: '/guides', title: 'Technical Guides', description: 'Comprehensive guides and documentation' ,},
    { path: '/privacy', title: 'Privacy Policy', description: 'Our privacy policy and data protection practices' ,},
    { path: '/terms', title: 'Terms of Service', description: 'Terms and conditions for our services' ,},
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Sitemap solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Sitemap</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive sitemap solutions designed to meet your business needs.
          </p>
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Professional sitemap services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6"  >Sitemap</h1>
        <p className="text-lg text-gray-300 mb-8">Professional sitemap services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
'use client';

import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const SitemapPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Sitemap - Zion Tech Group"
        description="Sitemap for Zion Tech Group website"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Sitemap</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/" className="text-cyan-400 hover:text-cyan-300">Home</a>
            <a href="/about" className="text-cyan-400 hover:text-cyan-300">About</a>
            <a href="/services" className="text-cyan-400 hover:text-cyan-300">Services</a>
            <a href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact</a>
          </div>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default SitemapPage;
import React from 'react';

import {Helmet} from 'react-helmet-async';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Sitemap() {return (
    <>
      <title>Sitemap - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Sitemap</h1>
            <p className="text-lg text-gray-300 mb-8">Professional sitemap services coming soon.</p>

              Contact Us

      <  />
  );}

        <meta name="description" content="Professional sitemap services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Sitemap</h1>
          <p className="text-lg text-gray-300 mb-8">Professional sitemap services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
