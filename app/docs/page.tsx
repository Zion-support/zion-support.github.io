'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function DocsZionTechGroup() {
'use client';
import React, { useState } from 'react';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Globe, Brain, Cloud, Shield, Settings, Users, Database, Zap, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: 'rocket',
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' ,},
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' ,},
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' ,}
      ]
    },
    {
      title: 'API Reference',
      icon: 'code',
      description: 'Complete API documentation and endpoints',
      docs: [
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' ,},
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' ,},
        { title: 'SDKs', description: 'Client SDKs and libraries', link: '/docs/api/sdks' ,}
      ]
    },
    {
      title: 'AI Solutions',
      icon: 'brain',
      description: 'AI and machine learning documentation',
      docs: [
        { title: 'AI Models', description: 'Available AI models and capabilities', link: '/docs/ai/models' ,},
        { title: 'Training Data', description: 'Data preparation and training', link: '/docs/ai/training' ,},
        { title: 'Deployment', description: 'Deploying AI models to production', link: '/docs/ai/deployment' ,}
      ]
    },
    {
      title: 'Cloud Services',
      icon: 'cloud',
      description: 'Cloud infrastructure and services',
      docs: [
        { title: 'Infrastructure', description: 'Cloud infrastructure setup', link: '/docs/cloud/infrastructure' ,},
        { title: 'Security', description: 'Cloud security best practices', link: '/docs/cloud/security' ,},
        { title: 'Monitoring', description: 'Monitoring and logging', link: '/docs/cloud/monitoring' ,}
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', description: 'Get started in minutes', category: 'Getting Started', link: '/docs/quick-start' ,},
    { title: 'API Authentication', description: 'Learn how to authenticate', category: 'API Reference', link: '/docs/api/auth' ,},
    { title: 'AI Model Training', description: 'Train your own models', category: 'AI Solutions', link: '/docs/ai/training' ,},
    { title: 'Cloud Security', description: 'Secure your cloud infrastructure', category: 'Cloud Services', link: '/docs/cloud/security' ,}
  ];

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Docs - Zion Tech Group</title>
        <meta name="description" content="Docs solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Docs</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive docs solutions designed to meet your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      </section>

      {/* Popular Docs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDocs.map((doc, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div></div></div></div></div>
                  <span className="text-purple-400 text-sm font-medium">{doc.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{doc.description}</p>
                <a
                  href={doc.link}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDocs.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div></div></div></div></div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.docs.map((doc, docIndex) => (
                    <a
                      key={docIndex}
                      href={doc.link}
                      className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                            {doc.title}
                          </h4>
                          <p className="text-gray-300 text-sm">{doc.description}</p>
                        </div></div></div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Join Community
            </button>
          </div></div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const DocumentationPage: React.FC = () => {
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
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for all our services." />
        <meta name="keywords" content="documentation, guides, API docs, tutorials" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Documentation
import React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Docs() {return (
    <title>Docs - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Docs</h1>
            <p className="text-lg text-gray-300 mb-8">Professional docs services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Docs - Zion Tech Group</title>
        <meta name="description" content="Docs services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="docs, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Docs;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive documentation for all our services.
import React  from 'react';
const DocsPage: React.FC = () => {
  return (
      <Helmet>
        <title>Docs - Zion Tech Group</title>
        <meta name="description" content="Docs services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="docs, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Docs
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional docs services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive docs solutions. 
              Contact us to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive docs solutions.
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
            </button>
      </div>
        </div>
      </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

  );
};

export default DocumentationPage;
'use client';

import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const DocsPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Documentation - Zion Tech Group"
        description="Documentation for Zion Tech Group services"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Documentation</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default DocsPage;
    <  />
  );
};

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Docs - Zion Tech Group</title>
        <meta name="description" content="Professional docs services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Docs</h1>
          <p className="text-lg text-gray-300 mb-8">Professional docs services coming soon.</p>
          
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
