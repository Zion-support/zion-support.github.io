'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { BookOpen, FileText, Video, Download, ArrowRight, CheckCircle, Star, Phone, Mail, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Documentation',
      icon: BookOpen,
      description: 'Comprehensive guides and technical documentation',
      resources: [
        { title: 'API Documentation', description: 'Complete API reference and integration guides', type: 'Documentation' },
        { title: 'Developer Guide', description: 'Step-by-step development tutorials', type: 'Guide' },
        { title: 'Architecture Overview', description: 'System architecture and design principles', type: 'Technical' },
        { title: 'Best Practices', description: 'Industry best practices and recommendations', type: 'Guide' }
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'White Papers',
      icon: FileText,
      description: 'In-depth research and analysis papers',
      resources: [
        { title: 'AI in Enterprise', description: 'How AI transforms enterprise operations', type: 'Research' },
        { title: 'Digital Transformation', description: 'Strategies for successful digital transformation', type: 'Strategy' },
        { title: 'ROI of AI Implementation', description: 'Measuring and maximizing AI ROI', type: 'Business' },
        { title: 'Future of Technology', description: 'Emerging technologies and their impact', type: 'Research' }
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Case Studies',
      icon: CheckCircle,
      description: 'Real-world success stories and implementations',
      resources: [
        { title: 'Financial Services Success', description: '40% increase in trading profits', type: 'Case Study' },
        { title: 'Healthcare Transformation', description: '60% faster diagnosis with AI', type: 'Case Study' },
        { title: 'Manufacturing Optimization', description: '30% increase in production efficiency', type: 'Case Study' },
        { title: 'Retail Personalization', description: '45% increase in conversion rates', type: 'Case Study' }
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Webinars & Videos',
      icon: Video,
      description: 'Educational content and training materials',
      resources: [
        { title: 'AI Implementation Webinar', description: 'How to successfully implement AI', type: 'Webinar' },
        { title: 'Technology Trends 2024', description: 'Latest trends in AI and IT', type: 'Video' },
        { title: 'ROI Optimization', description: 'Maximizing your technology ROI', type: 'Webinar' },
        { title: 'Security Best Practices', description: 'Enterprise security strategies', type: 'Training' }
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const featuredResources = [
    {
      title: 'Complete AI Implementation Guide',
      description: 'A comprehensive 50-page guide covering everything from strategy to execution',
      type: 'Guide',
      downloadCount: '2.5K+',
      rating: 4.9
    },
    {
      title: 'Enterprise AI ROI Calculator',
      description: 'Interactive tool to calculate potential ROI from AI implementations',
      type: 'Tool',
      downloadCount: '1.8K+',
      rating: 4.8
    },
    {
      title: 'Digital Transformation Checklist',
      description: 'Step-by-step checklist for successful digital transformation',
      type: 'Template',
      downloadCount: '3.2K+',
      rating: 4.9
    }
  ];

  const benefits = [
    {
      title: 'Expert Knowledge',
      description: 'Access to insights from our team of AI and IT experts'
    },
    {
      title: 'Practical Guidance',
      description: 'Real-world examples and actionable recommendations'
    },
    {
      title: 'Free Access',
      description: 'All resources are available at no cost to help you succeed'
    },
    {
      title: 'Regular Updates',
      description: 'Fresh content added regularly to keep you current'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Resources - Zion Tech Group"
        description="Free resources including documentation, white papers, case studies, webinars, and tools to help you succeed with AI and IT solutions."
        keywords={['AI resources', 'IT documentation', 'white papers', 'case studies', 'webinars', 'free guides']}
        canonicalUrl="https://ziontechgroup.com/resources"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Resources & Knowledge
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Access our comprehensive library of free resources to accelerate your AI and IT journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Expert Consultation
            </a>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">{resource.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{resource.downloadCount} downloads</span>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Download <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resource Categories */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Resource Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <div key={index} className="cyber-card p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <ul className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <li key={resourceIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-white font-medium">{resource.title}</div>
                        <div className="text-sm text-gray-400">{resource.description}</div>
                        <div className="text-xs text-cyan-400 mt-1">{resource.type}</div>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors mt-6"
                >
                  View All {category.title} <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Our Resources?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="cyber-card p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest resources, insights, and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:border-cyan-400 focus:outline-none"
              />
              <button className="cyber-button px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Custom Resources?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our experts can create custom documentation, guides, and training materials tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              ✉️ Email Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResourcesPage;