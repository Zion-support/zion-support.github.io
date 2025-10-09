'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { FileText, Eye, Zap, Brain, BarChart, Shield, Users, CheckCircle, Phone, Mail, ArrowRight, Database, Globe, Settings, FileImage, Search } from 'lucide-react';
const AIDocumentProcessingPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Advanced OCR',
      description: 'State-of-the-art optical character recognition that extracts text from any document with 99.9% accuracy.',
      benefits: ['99.9% accuracy', 'Multi-language support', 'Handwriting recognition']
    },
    {
      icon: Brain,
      title: 'AI Data Extraction',
      description: 'Intelligent data extraction that understands document structure and extracts relevant information automatically.',
      benefits: ['Smart parsing', 'Context understanding', 'Field mapping']
    },
    {
      icon: Zap,
      title: 'Automated Processing',
      description: 'Fully automated document processing workflows that handle large volumes of documents without human intervention.',
      benefits: ['Batch processing', 'Real-time processing', 'Error handling']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics on document processing performance, accuracy rates, and processing times.',
      benefits: ['Performance metrics', 'Accuracy tracking', 'Cost analysis']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, audit logs, and compliance with GDPR, HIPAA, and other standards.',
      benefits: ['Data encryption', 'Audit trails', 'Compliance ready']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative features that allow teams to review, approve, and manage document processing workflows.',
      benefits: ['Review workflows', 'Approval processes', 'Team management']
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 pages/month',
        'Basic OCR',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Standard security'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 pages/month',
        'Advanced AI extraction',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'Enhanced security',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited pages',
        'Custom AI models',
        'All features',
        'Dedicated support',
        'Custom development',
        'Advanced compliance',
        'On-premise option',
        'SLA guarantee'
      ],
      popular: false
    }
  ];
  const stats = [
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '90%', label: 'Time Savings' },
    { number: '50+', label: 'Document Types' },
    { number: '24/7', label: 'Processing' }
  ];
  const useCases = [
    {
      title: 'Invoice Processing',
      description: 'Automatically extract data from invoices, validate information, and integrate with accounting systems.',
      icon: FileText
    },
    {
      title: 'Contract Analysis',
      description: 'Analyze contracts to extract key terms, dates, and clauses with AI-powered natural language processing.',
      icon: FileImage
    },
    {
      title: 'Form Processing',
      description: 'Process application forms, surveys, and other structured documents with intelligent data extraction.',
      icon: Search
    },
    {
      title: 'Medical Records',
      description: 'Extract patient information from medical records while maintaining HIPAA compliance and data security.',
      icon: Shield
    }
  ];
  return (
    <>
      <SEOOptimizer
        title="AI Document Processing Platform - Zion Tech Group"
        description="Automate document processing with AI-powered OCR and data extraction. 99.9% accuracy, 90% time savings, and 50+ document types supported."
        keywords={['AI document processing', 'OCR', 'data extraction', 'document automation', 'AI parsing']}
        canonicalUrl="https://ziontechgroup.com/ai-document-processing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Document Processing Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Automate document processing with 99.9% accuracy
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered document processing platform automatically extracts, analyzes, and processes 
                documents with advanced OCR and intelligent data extraction capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Document Processing Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Use Cases Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Perfect for Every Document Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Automate Your Documents?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 1,800+ companies already using our document processing platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
  );
};
export default AIDocumentProcessingPage;