'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Search, Zap, CheckCircle, Clock, TrendingUp, Shield, Globe, ArrowRight, Phone, Mail, MapPin, Star, Award, Brain, Eye, Database, Settings, Users, Target, BarChart, MessageSquare, Calendar, Download, Upload, Filter, RefreshCw } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIDocumentProcessorPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered OCR',
      description: 'Advanced optical character recognition with 99.5% accuracy for any document type',
      benefits: ['99.5% accuracy rate', 'Multi-language support', 'Handwriting recognition', 'Real-time processing']
    },
    {
      icon: Search,
      title: 'Intelligent Data Extraction',
      description: 'Automatically extract structured data from unstructured documents',
      benefits: ['Smart field detection', 'Data validation', 'Format standardization', 'Error correction']
    },
    {
      icon: Filter,
      title: 'Document Classification',
      description: 'Automatically categorize and organize documents by type and content',
      benefits: ['Auto-categorization', 'Content analysis', 'Priority scoring', 'Workflow routing']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate document processing workflows with intelligent decision-making',
      benefits: ['Process automation', 'Exception handling', 'Approval workflows', 'Integration APIs']
    }
  ];

  const documentTypes = [
    {
      title: 'Invoices & Receipts',
      description: 'Extract financial data from invoices, receipts, and billing documents',
      icon: FileText,
      accuracy: '99.8%',
      processingTime: '< 2 seconds'
    },
    {
      title: 'Contracts & Legal',
      description: 'Process legal documents, contracts, and compliance paperwork',
      icon: Shield,
      accuracy: '99.2%',
      processingTime: '< 5 seconds'
    },
    {
      title: 'Forms & Applications',
      description: 'Handle application forms, surveys, and structured documents',
      icon: Target,
      accuracy: '99.6%',
      processingTime: '< 3 seconds'
    },
    {
      title: 'Medical Records',
      description: 'Process medical documents, prescriptions, and health records',
      icon: Users,
      accuracy: '99.4%',
      processingTime: '< 4 seconds'
    },
    {
      title: 'Technical Documents',
      description: 'Handle technical manuals, specifications, and engineering documents',
      icon: Settings,
      accuracy: '99.1%',
      processingTime: '< 6 seconds'
    },
    {
      title: 'Identity Documents',
      description: 'Process IDs, passports, driver licenses, and verification documents',
      icon: Shield,
      accuracy: '99.9%',
      processingTime: '< 2 seconds'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$119/month',
      description: 'Perfect for small businesses with basic document processing needs',
      features: [
        'Up to 1,000 documents/month',
        'Basic OCR processing',
        'Standard data extraction',
        'Email support',
        'Basic integrations',
        'PDF export'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses with advanced processing requirements',
      features: [
        'Up to 10,000 documents/month',
        'Advanced AI processing',
        'Custom data extraction',
        'Priority support',
        'Advanced integrations',
        'API access',
        'Custom workflows',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      description: 'For large organizations with high-volume document processing',
      features: [
        'Unlimited documents',
        'Full AI suite',
        'Custom AI training',
        '24/7 dedicated support',
        'White-label options',
        'On-premise deployment',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '☁️', description: 'CRM integration' },
    { name: 'QuickBooks', icon: '💰', description: 'Accounting software' },
    { name: 'Google Drive', icon: '📁', description: 'Cloud storage' },
    { name: 'Microsoft 365', icon: '📄', description: 'Office suite' },
    { name: 'Dropbox', icon: '📦', description: 'File sharing' },
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Zapier', icon: '⚡', description: 'Workflow automation' },
    { name: 'API', icon: '🔌', description: 'Custom integrations' }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Operations Manager, FinanceCorp',
      content: 'AI Document Processor has revolutionized our invoice processing. We reduced manual work by 90% and improved accuracy significantly.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'CTO, LegalTech Solutions',
      content: 'The document classification feature is incredible. It automatically sorts our legal documents and extracts key information with amazing accuracy.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'HR Director, GlobalCorp',
      content: 'Processing employee documents is now effortless. The AI understands context and extracts exactly what we need every time.',
      rating: 5
    }
  ];

  return (
    <div><SEOOptimizer
        title="AI Document Processor - Intelligent Document Analysis & Data Extraction | Zion Tech Group"
        description="Transform document processing with AI-powered OCR, data extraction, and workflow automation. Achieve 99.5% accuracy and 80% time savings with our intelligent document processor."
        keywords={['AI document processing', 'OCR', 'data extraction', 'document automation', 'intelligent document analysis', 'workflow automation']}
        canonicalUrl="https://ziontechgroup.com/ai-document-processor"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                AI-Powered Document Processing
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Document Processor
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform document processing with intelligent OCR, automated data extraction, and workflow automation. 
                Achieve 99.5% accuracy and 80% time savings with our AI-powered document processor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
                <div className="text-gray-300">OCR Accuracy</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div className="text-gray-300">Document Types</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Processing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4" id="features">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to revolutionize your document processing workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Document Types Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Supported Document Types
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Process any document type with our advanced AI technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentTypes.map((type, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{type.accuracy}</div>
                      <div className="text-sm text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{type.processingTime}</div>
                      <div className="text-sm text-gray-400">Processing</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="text-sm text-white font-semibold mb-1">{integration.name}</div>
                  <div className="text-xs text-gray-400">{integration.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/50" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your document processing needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Document Processor ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
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
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using AI Document Processor to transform their workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Document Processing?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Start your free trial today and experience the power of AI-driven document processing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Document Processor Free Trial Request"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default AIDocumentProcessorPage;
