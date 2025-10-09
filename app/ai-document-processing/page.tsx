'use client';
import React from 'react';
import { CheckCircle, Star, Zap, FileText, BarChart, Target, Shield } from 'lucide-react';

const AIDocumentProcessingPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      title: 'Intelligent OCR',
      description: 'Extract text from any document with 99.9% accuracy using advanced optical character recognition technology.'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: 'Smart Data Extraction',
      description: 'Automatically identify and extract key information like names, dates, amounts, and addresses from documents.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Document Classification',
      description: 'AI automatically categorizes documents by type, priority, and content for efficient organization.'
    },
    {
      icon: <BarChart className="w-6 h-6 text-purple-500" />,
      title: 'Workflow Automation',
      description: 'Automate document processing workflows with AI-powered decision making and routing.'
    }
  ];

  const capabilities = [
    'OCR for 50+ document types',
    'Intelligent data extraction',
    'Document classification and sorting',
    'Automated form processing',
    'Invoice and receipt processing',
    'Contract analysis and review',
    'Compliance checking',
    'Integration with 100+ systems',
    'Batch processing capabilities',
    'Real-time processing alerts'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 pages/month',
        'Basic OCR processing',
        '5 document types',
        'Email support',
        '5GB storage',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 pages/month',
        'Advanced AI features',
        'Unlimited document types',
        'Priority support',
        '100GB storage',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited pages',
        'Full AI suite',
        'Custom integrations',
        'Dedicated manager',
        'Unlimited storage',
        '24/7 support',
        'White-label options'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '95%',
      description: 'Reduction in manual data entry'
    },
    {
      metric: '99.9%',
      description: 'OCR accuracy rate'
    },
    {
      metric: '80%',
      description: 'Faster document processing'
    },
    {
      metric: '24/7',
      description: 'Automated processing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              AI Document Processing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Document Processing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate document processing with AI-powered OCR and data extraction. Reduce manual work by 95% 
              and process documents 80% faster with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-indigo-500 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200"
              >
                Get Free Demo
              </a>
            </div>
          </div>

          {/* Benefits Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-gray-300 text-sm">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI document processing platform uses machine learning to extract and organize information from any document
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Document Processing Suite
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to automate document processing with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Core Capabilities</h3>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.slice(0, 5).map((capability, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Advanced Features</h3>
              <div className="grid grid-cols-1 gap-4">
                {capabilities.slice(5).map((capability, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your document processing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-indigo-500 shadow-2xl shadow-indigo-500/20' 
                  : 'border-white/10 hover:border-indigo-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                      : 'border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Document Processing?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of businesses already using our AI document processing to eliminate manual work and improve efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              📞 Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
          <p className="text-indigo-200 text-sm mt-4">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIDocumentProcessingPage;