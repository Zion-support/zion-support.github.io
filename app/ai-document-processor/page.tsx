'use client';
import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, FileText, Search, Database, Zap, Shield, Clock, Users, BarChart, Target, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIDocumentProcessorPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Advanced OCR Technology',
      description: 'Extract text from any document with 99.5% accuracy using state-of-the-art OCR',
      benefits: ['99.5% accuracy rate', 'Multi-language support', 'Handwriting recognition', 'Image enhancement']
    },
    {
      icon: Search,
      title: 'Intelligent Document Classification',
      description: 'Automatically categorize and organize documents using AI-powered classification',
      benefits: ['95% classification accuracy', 'Custom categories', 'Auto-tagging', 'Smart filing']
    },
    {
      icon: Database,
      title: 'Data Extraction & Validation',
      description: 'Extract structured data from unstructured documents with validation',
      benefits: ['Structured data output', 'Data validation', 'Format conversion', 'API integration']
    },
    {
      icon: Zap,
      title: 'Automated Workflow Processing',
      description: 'Process documents through custom workflows with AI decision-making',
      benefits: ['Custom workflows', 'Automated routing', 'Exception handling', 'Process optimization']
    }
  ];

  const documentTypes = [
    {
      title: 'Invoices & Receipts',
      description: 'Extract financial data from invoices, receipts, and billing documents',
      icon: FileText,
      accuracy: '99.2%',
      features: ['Amount extraction', 'Vendor identification', 'Date parsing', 'Tax calculation']
    },
    {
      title: 'Contracts & Legal',
      description: 'Process legal documents, contracts, and compliance paperwork',
      icon: Shield,
      accuracy: '98.8%',
      features: ['Clause extraction', 'Key terms identification', 'Risk assessment', 'Compliance checking']
    },
    {
      title: 'Forms & Applications',
      description: 'Handle application forms, surveys, and structured documents',
      icon: Target,
      accuracy: '99.1%',
      features: ['Field extraction', 'Validation rules', 'Auto-completion', 'Error detection']
    },
    {
      title: 'Reports & Analytics',
      description: 'Process business reports, analytics, and data-heavy documents',
      icon: BarChart,
      accuracy: '98.9%',
      features: ['Data visualization', 'Trend analysis', 'Metric extraction', 'Chart generation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$139',
      period: '/month',
      description: 'Perfect for small businesses with basic document processing needs',
      features: [
        '1,000 documents/month',
        'Basic OCR processing',
        'Standard templates',
        'Email support',
        'PDF export',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced processing requirements',
      features: [
        '10,000 documents/month',
        'Advanced OCR + AI classification',
        'Custom templates',
        'Priority support',
        'API access',
        'Advanced integrations',
        'Custom workflows',
        'Data validation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited documents',
        'Full AI suite',
        'White-label processing',
        '24/7 dedicated support',
        'Custom development',
        'On-premise deployment',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Operations Manager, FinanceCorp',
      content: 'AI Document Processor reduced our invoice processing time by 80%. The accuracy is incredible!',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Legal Director, LawFirm Inc',
      content: 'We process hundreds of contracts daily. This AI solution has revolutionized our workflow.',
      rating: 5
    },
    {
      name: 'Sarah Thompson',
      role: 'HR Director, TechStart',
      content: 'The automated form processing saves us 15+ hours per week. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Document Processor - Intelligent Document Processing | Zion Tech Group"
        description="Transform document processing with AI-powered OCR, classification, and data extraction. Achieve 95% accuracy and 80% time savings with our intelligent document processor."
        keywords={['AI document processing', 'OCR technology', 'document classification', 'data extraction', 'automated workflows', 'document automation']}
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
                Transform your document processing with intelligent OCR, classification, and data extraction. 
                Achieve 95% accuracy and 80% time savings with our AI-powered solution.
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
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Processing Accuracy</div>
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
                <div className="text-3xl font-bold text-green-400 mb-2">99.5%</div>
                <div className="text-gray-300">OCR Accuracy</div>
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
                Process any type of document with specialized AI models for maximum accuracy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {documentTypes.map((type, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{type.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm">{type.description}</p>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{type.accuracy}</div>
                    <div className="text-gray-400 text-sm">Accuracy Rate</div>
                  </div>
                  <ul className="space-y-1">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 text-center">• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4" id="pricing">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your document processing volume and requirements
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
                    <div className="text-gray-400">{plan.period}</div>
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
                Join thousands of businesses already using AI Document Processor to streamline their operations
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
    </>
  );
};

export default AIDocumentProcessorPage;