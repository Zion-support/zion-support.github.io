import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Search, BarChart3, Shield, Zap, CheckCircle, ArrowRight, Download, Upload, Eye, Lock, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIDocumentAnalyzerPage() {
  const features = [
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: 'Multi-Format Support',
      description: 'Analyze PDFs, Word docs, Excel sheets, PowerPoint presentations, and more with advanced OCR technology.'
    },
    {
      icon: <Search className="w-6 h-6 text-green-500" />,
      title: 'Intelligent Search',
      description: 'Find specific information across thousands of documents instantly with AI-powered semantic search.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Data Extraction',
      description: 'Automatically extract key data points, tables, and insights from complex documents and reports.'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Secure Processing',
      description: 'Enterprise-grade security with end-to-end encryption and compliance with GDPR and SOC 2 standards.'
    }
  ]

  const useCases = [
    {
      title: 'Legal Document Review',
      description: 'Quickly analyze contracts, legal briefs, and case files to identify key terms and potential issues.',
      icon: <FileText className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Financial Report Analysis',
      description: 'Extract financial data from quarterly reports, balance sheets, and income statements automatically.',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Research Paper Processing',
      description: 'Analyze academic papers, research documents, and scientific literature for key findings and insights.',
      icon: <Search className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Compliance Monitoring',
      description: 'Monitor regulatory documents and ensure compliance with industry standards and requirements.',
      icon: <Shield className="w-8 h-8 text-red-500" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$15',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 100 documents/month',
        'Basic AI analysis',
        'PDF and Word support',
        'Standard search',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$39',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1,000 documents/month',
        'Advanced AI analysis',
        'All file format support',
        'Advanced search & filters',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited documents',
        'Enterprise AI features',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated support',
        'Custom training'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Document Analyzer - Intelligent Document Processing | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered document analysis tool that extracts insights, searches content, and processes documents automatically with enterprise security." />
        <meta name="keywords" content="AI document analysis, document processing, OCR, text extraction, document search, compliance monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Document Analyzer
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your document workflow with AI-powered analysis, extraction, and intelligent search capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Document Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands context, extracts meaning, and provides actionable insights from any document type.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-600">
              From legal firms to financial institutions, our AI adapts to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes and see results immediately
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Upload Documents</h3>
              <p className="text-gray-600">Drag and drop your documents or connect your cloud storage for automatic processing.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Analysis</h3>
              <p className="text-gray-600">Our AI processes your documents, extracts key information, and builds searchable indexes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Insights</h3>
              <p className="text-gray-600">Search, filter, and analyze your documents with powerful AI-driven insights and summaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that matches your document processing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg p-8 shadow-lg border-2 ${plan.popular ? 'border-indigo-500 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Your documents are protected with military-grade encryption and compliance with the highest security standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Lock className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">End-to-end encryption</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">SOC 2 Type II certified</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">GDPR compliant</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Regular security audits</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">256-bit SSL encryption for data in transit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">AES-256 encryption for data at rest</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Multi-factor authentication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Role-based access control</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">Audit logs and monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Document Workflow?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of organizations who have already automated their document processing with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
