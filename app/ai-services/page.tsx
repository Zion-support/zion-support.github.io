import React, { useState } from 'react';
import FuturisticHeader from '../components/FuturisticHeader';
import FuturisticFooter from '../components/FuturisticFooter';

interface AIService {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  icon: string;
  category: 'Machine Learning' | 'NLP' | 'Computer Vision' | 'Predictive Analytics' | 'Automation';
  popular?: boolean;
}

const aiServices: AIService[] = [
  {
    id: 'ml-models',
    name: 'Custom Machine Learning Models',
    description: 'Build and deploy custom ML models tailored to your specific business needs and data.',
    features: [
      'Custom model development',
      'Data preprocessing and cleaning',
      'Model training and optimization',
      'Real-time inference API',
      'Model monitoring and maintenance',
      'A/B testing framework'
    ],
    pricing: {
      monthly: 299,
      yearly: 2990,
      setup: 999
    },
    icon: '🧠',
    category: 'Machine Learning',
    popular: true
  },
  {
    id: 'nlp-processing',
    name: 'Natural Language Processing',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
    features: [
      'Sentiment analysis',
      'Text classification',
      'Named entity recognition',
      'Language translation',
      'Text summarization',
      'Chatbot integration'
    ],
    pricing: {
      monthly: 199,
      yearly: 1990,
      setup: 599
    },
    icon: '💬',
    category: 'NLP'
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision Solutions',
    description: 'Image and video analysis using state-of-the-art computer vision algorithms.',
    features: [
      'Object detection and recognition',
      'Image classification',
      'Facial recognition',
      'OCR and text extraction',
      'Video analysis',
      'Real-time processing'
    ],
    pricing: {
      monthly: 249,
      yearly: 2490,
      setup: 799
    },
    icon: '👁️',
    category: 'Computer Vision'
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics Platform',
    description: 'Forecast future trends and behaviors using advanced predictive modeling techniques.',
    features: [
      'Time series forecasting',
      'Customer behavior prediction',
      'Risk assessment models',
      'Demand forecasting',
      'Churn prediction',
      'Real-time predictions'
    ],
    pricing: {
      monthly: 399,
      yearly: 3990,
      setup: 1299
    },
    icon: '📊',
    category: 'Predictive Analytics',
    popular: true
  },
  {
    id: 'ai-automation',
    name: 'AI-Powered Process Automation',
    description: 'Automate complex business processes using AI and machine learning technologies.',
    features: [
      'Intelligent document processing',
      'Workflow automation',
      'Decision automation',
      'Data extraction and validation',
      'Process optimization',
      'Exception handling'
    ],
    pricing: {
      monthly: 349,
      yearly: 3490,
      setup: 1099
    },
    icon: '🤖',
    category: 'Automation'
  },
  {
    id: 'ai-content-generation',
    name: 'AI Content Generation Suite',
    description: 'Generate high-quality content using advanced AI models for marketing, documentation, and communication.',
    features: [
      'Article and blog writing',
      'Marketing copy generation',
      'Technical documentation',
      'Email templates',
      'Social media content',
      'Multi-language support'
    ],
    pricing: {
      monthly: 149,
      yearly: 1490,
      setup: 399
    },
    icon: '✍️',
    category: 'NLP'
  }
];

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics', 'Automation'];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleContactClick = (service: AIService) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'ai_service_inquiry', {
        event_category: 'engagement',
        event_label: service.name,
        value: service.pricing.monthly
      });
    }
  };

  return (
    <div className="min-h-screen relative">
      <FuturisticHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 holographic">
            AI Services
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your business with our cutting-edge AI solutions.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-6 py-3 bg-gray-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-600 text-white shadow-lg'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-cyan-500/20 border border-cyan-500/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`futuristic-card p-8 ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-cyan-400 mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="border-t border-cyan-500/30 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-3xl font-bold text-white">
                      ${service.pricing.monthly}
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="line-through">${service.pricing.monthly * 12}</span>
                    <span className="ml-2 text-green-400 font-medium">
                      ${service.pricing.yearly}/year (Save ${service.pricing.monthly * 12 - service.pricing.yearly})
                    </span>
                  </div>
                  {service.pricing.setup && (
                    <div className="text-sm text-gray-500 mt-1">
                      Setup fee: ${service.pricing.setup}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleContactClick(service)}
                    className="cyber-button px-6 py-3 rounded-lg text-center font-semibold transition-all duration-300"
                  >
                    Get Started
                  </button>
                  <a
                    href={`tel:+13024640950`}
                    className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg text-center font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                  >
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 holographic">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fast Implementation</h3>
              <p className="text-gray-300">Get your AI solutions up and running in weeks, not months</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">Tailored AI models designed specifically for your business needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all AI implementations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Track record of delivering measurable business impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 holographic">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our AI experts to discuss your specific needs and get a customized solution for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: (302) 464-0950
            </a>
            
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-lg"
            >
              <svg className="w-6 h-6 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-sm text-cyan-400">
            <p>✓ Free AI consultation and demo</p>
            <p>✓ Custom AI solution design</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ 24/7 AI support available</p>
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default AIServicesPage;