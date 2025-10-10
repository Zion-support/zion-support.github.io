'use client';
import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Scan, 
  Upload, 
  Download, 
  Search, 
  Settings, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Users, 
  Clock, 
  Database,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Eye,
  FileImage,
  Archive
} from 'lucide-react';

const AIDocumentScannerPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Eye,
      title: 'Advanced OCR Technology',
      description: '99% accuracy OCR with support for 100+ languages and handwriting recognition',
      benefits: ['Multi-language OCR', 'Handwriting recognition', 'Table extraction', 'Image enhancement']
    },
    {
      icon: Zap,
      title: 'Batch Processing',
      description: 'Process 1000+ documents per hour with automated workflow management',
      benefits: ['Bulk processing', 'Queue management', 'Progress tracking', 'Error handling']
    },
    {
      icon: Search,
      title: 'Smart Data Extraction',
      description: 'Intelligent data extraction with AI-powered field recognition and validation',
      benefits: ['Auto field detection', 'Data validation', 'Format recognition', 'Error correction']
    },
    {
      icon: Database,
      title: 'Cloud Storage Integration',
      description: 'Seamless integration with major cloud storage providers and databases',
      benefits: ['AWS S3 integration', 'Google Drive sync', 'Database export', 'API connectivity']
    },
    {
      icon: Settings,
      title: 'Custom Workflows',
      description: 'Create automated document processing workflows tailored to your business needs',
      benefits: ['Visual workflow builder', 'Custom rules', 'Conditional logic', 'Integration APIs']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with encryption, access controls, and compliance features',
      benefits: ['End-to-end encryption', 'Role-based access', 'Audit logs', 'GDPR compliance']
    }
  ];

  const documentTypes = [
    {
      type: 'Invoices & Receipts',
      icon: FileText,
      description: 'Extract data from invoices, receipts, and financial documents',
      accuracy: '99.2%',
      processingTime: '2-5 seconds',
      fields: ['Amount', 'Date', 'Vendor', 'Tax ID', 'Line items']
    },
    {
      type: 'Forms & Applications',
      icon: FileImage,
      description: 'Process application forms, surveys, and structured documents',
      accuracy: '98.8%',
      processingTime: '3-7 seconds',
      fields: ['Personal info', 'Checkboxes', 'Signatures', 'Dates', 'Numbers']
    },
    {
      type: 'Legal Documents',
      icon: Archive,
      description: 'Extract data from contracts, agreements, and legal paperwork',
      accuracy: '99.5%',
      processingTime: '5-10 seconds',
      fields: ['Parties', 'Terms', 'Dates', 'Signatures', 'Clauses']
    },
    {
      type: 'Medical Records',
      icon: FileText,
      description: 'Process medical forms, prescriptions, and healthcare documents',
      accuracy: '99.1%',
      processingTime: '4-8 seconds',
      fields: ['Patient info', 'Diagnosis', 'Medications', 'Dates', 'Provider']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        'Up to 1,000 documents/month',
        'Basic OCR processing',
        '5 document types',
        'Email support',
        'Cloud storage (10GB)',
        'Standard processing speed'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 10,000 documents/month',
        'Advanced OCR + AI extraction',
        'Unlimited document types',
        'Priority support',
        'Cloud storage (100GB)',
        'Fast processing speed',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited documents',
        'Premium OCR + AI extraction',
        'All document types',
        '24/7 dedicated support',
        'Unlimited cloud storage',
        'Ultra-fast processing',
        'Custom integrations',
        'White-label options',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99%', label: 'OCR Accuracy' },
    { number: '1000+', label: 'Docs/Hour Processing' },
    { number: '100+', label: 'Languages Supported' },
    { number: '50+', label: 'Document Types' }
  ];

  const integrations = [
    { name: 'AWS S3', icon: '☁️' },
    { name: 'Google Drive', icon: '📁' },
    { name: 'Dropbox', icon: '📦' },
    { name: 'Salesforce', icon: '⚡' },
    { name: 'HubSpot', icon: '🎯' },
    { name: 'Zapier', icon: '🔗' },
    { name: 'Microsoft 365', icon: '📊' },
    { name: 'Slack', icon: '💬' }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 matrix-bg">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI Document Scanner Pro
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Intelligent document scanning with 99% OCR accuracy, automated data extraction, 
              and smart organization. Transform your document workflow with AI-powered processing.
            </p>
            
            {/* Interactive Demo */}
            <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                  onClick={() => setIsScanning(!isScanning)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isScanning 
                      ? 'bg-green-500 hover:bg-green-600 animate-pulse' 
                      : 'bg-cyan-500 hover:bg-cyan-600'
                  }`}
                >
                  {isScanning ? <CheckCircle className="w-8 h-8 text-white" /> : <Scan className="w-8 h-8 text-white" />}
                </button>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    {isScanning ? 'Processing...' : 'Ready to Scan'}
                  </div>
                  <div className="text-sm text-gray-300">
                    {isScanning ? 'Extracting data from document' : 'Upload your document to start'}
                  </div>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                  <Upload className="w-4 h-4 inline mr-2" />
                  Upload
                </button>
                <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                  <Download className="w-4 h-4 inline mr-2" />
                  Download
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">99% OCR Accuracy</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">1000+ Docs/Hour</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-pink-400 font-semibold">100+ Languages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Document Processing Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven document processing with industry-leading accuracy and speed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Supported Document Types
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Process any document type with specialized AI models for maximum accuracy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentTypes.map((docType, index) => (
              <div key={index} className="futuristic-card hover-lift p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <docType.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{docType.type}</h3>
                    <div className="text-cyan-400 font-semibold">{docType.accuracy} accuracy</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{docType.description}</p>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Processing time: {docType.processingTime}</div>
                  <div className="text-sm text-gray-400 mb-2">Extracted fields:</div>
                  <div className="flex flex-wrap gap-2">
                    {docType.fields.map((field, fieldIndex) => (
                      <span key={fieldIndex} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a complete document workflow
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="futuristic-card hover-lift p-4 text-center">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm text-gray-300">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your document processing needs. All plans include our core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`futuristic-card hover-lift p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Document Processing?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 2,100+ businesses already using our AI Document Scanner Pro. Start your free trial today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDocumentScannerPage;