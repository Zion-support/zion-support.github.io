'use client';
import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, FileText, ArrowRight, Star, Target, Settings, Globe, Brain, Cpu, Database, Cloud, Lock, Eye, Activity, Zap, Shield, Users } from 'lucide-react';

const AiDocumentProcessingPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Intelligent OCR',
      description: 'Advanced optical character recognition that extracts text from any document format with 99.9% accuracy',
      benefits: ['99.9% accuracy', 'Multi-format support', 'Handwriting recognition', 'Language detection']
    },
    {
      icon: Brain,
      title: 'AI Classification',
      description: 'Automatically classify and categorize documents using machine learning algorithms',
      benefits: ['Auto-classification', 'Smart routing', 'Content analysis', 'Metadata extraction']
    },
    {
      icon: Database,
      title: 'Data Extraction',
      description: 'Extract structured data from unstructured documents with AI-powered parsing',
      benefits: ['Structured extraction', 'Field mapping', 'Data validation', 'Format conversion']
    },
    {
      icon: Shield,
      title: 'Document Security',
      description: 'Secure document processing with encryption and compliance features',
      benefits: ['Data encryption', 'Access control', 'Audit trails', 'Compliance monitoring']
    }
  ];

  const capabilities = [
    {
      title: 'Document Types',
      description: 'Support for all major document formats and types',
      icon: FileText,
      features: ['PDF documents', 'Images', 'Scanned files', 'Handwritten text', 'Forms', 'Invoices']
    },
    {
      title: 'Data Processing',
      description: 'Advanced data extraction and processing capabilities',
      icon: Database,
      features: ['Text extraction', 'Table recognition', 'Form processing', 'Data validation']
    },
    {
      title: 'Workflow Automation',
      description: 'Automated document processing workflows',
      icon: Activity,
      features: ['Batch processing', 'Auto-routing', 'Approval workflows', 'Integration APIs']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting for document processing',
      icon: TrendingUp,
      features: ['Processing metrics', 'Error tracking', 'Performance analytics', 'Custom reports']
    }
  ];

  const benefits = [
    'Reduce processing time by 90%',
    'Improve accuracy by 95%',
    'Eliminate manual data entry',
    'Scale document processing',
    'Enhance compliance',
    'Reduce operational costs'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic OCR processing',
        'Up to 1,000 documents/month',
        'Email support',
        'Standard formats',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI features',
        'Unlimited documents',
        'Priority support',
        'All formats',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Full customization',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Document Processing - Zion Tech Group"
        description="Intelligent document processing with AI-powered extraction, classification, and analysis."
        keywords={["document processing","OCR","data extraction","document AI","automated processing"]}
        canonicalUrl="https://ziontechgroup.com/ai-document-processing"
      />

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Document Processing
                <span className="block text-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Intelligent document processing with AI-powered extraction, classification, and analysis. 
                Transform your document workflows with cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Document Processing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for document processing
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Processing Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive document processing solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Document Processing?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that transform your document workflows
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing for document processing solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm p-8 rounded-xl border ${plan.popular ? 'border-purple-400' : 'border-white/20'}`}>
                  {plan.popular && (
                    <div className="bg-purple-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-purple-600 text-white hover:bg-purple-700' 
                      : 'border border-white/30 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Process Your Documents?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI-powered document processing journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 hover:text-purple-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiDocumentProcessingPage;