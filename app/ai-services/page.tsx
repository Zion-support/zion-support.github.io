import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'machine-learning',
      title: 'Machine Learning Solutions',
      description: 'Build and deploy custom ML models that learn from your data and improve over time.',
      features: [
        'Custom model development',
        'Data preprocessing & feature engineering',
        'Model training & optimization',
        'Real-time inference APIs',
        'Model monitoring & maintenance',
        'A/B testing frameworks'
      ],
      pricing: 'Starting at $5,000/month',
      category: 'Core AI',
      icon: '🤖',
      useCases: ['Predictive analytics', 'Recommendation systems', 'Fraud detection', 'Demand forecasting']
    },
    {
      id: 'natural-language-processing',
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment detection, and language understanding.',
      features: [
        'Text classification & sentiment analysis',
        'Named entity recognition',
        'Language translation',
        'Chatbot development',
        'Document summarization',
        'Multi-language support'
      ],
      pricing: 'Starting at $3,500/month',
      category: 'Language AI',
      icon: '💬',
      useCases: ['Customer support automation', 'Content moderation', 'Market research', 'Document processing']
    },
    {
      id: 'computer-vision',
      title: 'Computer Vision',
      description: 'Extract insights from images and videos using state-of-the-art computer vision technology.',
      features: [
        'Object detection & recognition',
        'Image classification',
        'Facial recognition systems',
        'OCR & document scanning',
        'Video analysis',
        'Quality inspection automation'
      ],
      pricing: 'Starting at $4,500/month',
      category: 'Visual AI',
      icon: '👁️',
      useCases: ['Quality control', 'Security monitoring', 'Medical imaging', 'Retail analytics']
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Generate high-quality content using advanced AI models for marketing, documentation, and more.',
      features: [
        'Blog post & article generation',
        'Social media content creation',
        'Product descriptions',
        'Email marketing campaigns',
        'Technical documentation',
        'Creative writing assistance'
      ],
      pricing: 'Starting at $2,500/month',
      category: 'Content AI',
      icon: '✍️',
      useCases: ['Content marketing', 'Product catalogs', 'Technical writing', 'Social media management']
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced statistical models and machine learning.',
      features: [
        'Sales forecasting',
        'Customer churn prediction',
        'Risk assessment',
        'Demand planning',
        'Financial modeling',
        'Trend analysis'
      ],
      pricing: 'Starting at $6,000/month',
      category: 'Analytics AI',
      icon: '📊',
      useCases: ['Business forecasting', 'Risk management', 'Inventory optimization', 'Financial planning']
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Automate complex business processes using AI-powered decision making and workflow optimization.',
      features: [
        'Intelligent document processing',
        'Automated data entry',
        'Smart routing & prioritization',
        'Exception handling',
        'Process optimization',
        'Integration capabilities'
      ],
      pricing: 'Starting at $4,000/month',
      category: 'Automation AI',
      icon: '⚡',
      useCases: ['Document processing', 'Customer onboarding', 'Invoice processing', 'Workflow optimization']
    }
  ];

  const categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation solutions. Expert AI consulting and implementation." />
        <meta name="keywords" content="AI services, machine learning, natural language processing, computer vision, AI consulting, artificial intelligence solutions" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to computer vision, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get AI Consultation
              </a>
              <a href="/pricing" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Pricing
              </a>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              All AI Services
            </button>
            {categories.map(category => (
              <button key={category} className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-green-600">
                      {service.pricing}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Get Started
                    </a>
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Tools Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready-to-Use AI Tools
              </h2>
              <p className="text-xl text-gray-600">
                Get started immediately with our pre-built AI tools and micro SaaS solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/zion-ai-content-moderator" className="group">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Content Moderator</h3>
                  <p className="text-sm text-gray-600">Automated content filtering</p>
                </div>
              </Link>
              
              <Link to="/zion-ai-customer-churn-predictor" className="group">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Churn Predictor</h3>
                  <p className="text-sm text-gray-600">Predict customer churn</p>
                </div>
              </Link>
              
              <Link to="/zion-ai-document-analyzer" className="group">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">📄</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Document Analyzer</h3>
                  <p className="text-sm text-gray-600">AI document processing</p>
                </div>
              </Link>
              
              <Link to="/zion-ai-workflow-automator" className="group">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Workflow Automator</h3>
                  <p className="text-sm text-gray-600">Automate business processes</p>
                </div>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our AI experts help you identify opportunities and implement solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Schedule AI Consultation
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;