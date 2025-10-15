import React from 'react';
import SEOHead from '../components/SEOHead';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models tailored to your specific business needs and data.',
      icon: '🧠',
      features: ['Custom model development', 'Data preprocessing', 'Model training & optimization', 'Real-time predictions'],
      benefits: ['Improved decision making', 'Automated processes', 'Predictive insights', 'Cost reduction'],
      pricing: { basic: 2999, professional: 7999, enterprise: 19999 },
      useCases: ['Predictive analytics', 'Recommendation systems', 'Fraud detection', 'Demand forecasting']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      icon: '💬',
      features: ['Sentiment analysis', 'Text classification', 'Language translation', 'Chatbot development'],
      benefits: ['Better customer insights', 'Automated content moderation', 'Multilingual support', 'Enhanced user experience'],
      pricing: { basic: 1999, professional: 4999, enterprise: 12999 },
      useCases: ['Customer feedback analysis', 'Content moderation', 'Language translation', 'Voice assistants']
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and processing.',
      icon: '👁️',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analysis'],
      benefits: ['Automated quality control', 'Enhanced security', 'Improved user experience', 'Process automation'],
      pricing: { basic: 2499, professional: 5999, enterprise: 14999 },
      useCases: ['Quality inspection', 'Security monitoring', 'Medical imaging', 'Retail analytics']
    },
    {
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI solutions for customer service and automation.',
      icon: '🤖',
      features: ['Natural conversations', 'Multi-platform deployment', 'Integration capabilities', 'Analytics dashboard'],
      benefits: ['24/7 customer support', 'Reduced response time', 'Cost savings', 'Improved satisfaction'],
      pricing: { basic: 999, professional: 2999, enterprise: 7999 },
      useCases: ['Customer support', 'Lead qualification', 'Internal helpdesk', 'E-commerce assistance']
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven predictions and forecasting using advanced AI algorithms.',
      icon: '📊',
      features: ['Time series forecasting', 'Risk assessment', 'Trend analysis', 'Custom dashboards'],
      benefits: ['Better planning', 'Risk mitigation', 'Competitive advantage', 'Data-driven decisions'],
      pricing: { basic: 1999, professional: 4999, enterprise: 12999 },
      useCases: ['Sales forecasting', 'Risk management', 'Inventory optimization', 'Market analysis']
    },
    {
      title: 'AI Consulting & Strategy',
      description: 'Strategic AI consulting to help you identify opportunities and plan your AI transformation.',
      icon: '🎯',
      features: ['AI strategy development', 'Technology assessment', 'Implementation planning', 'Training & support'],
      benefits: ['Clear AI roadmap', 'Technology alignment', 'Risk mitigation', 'Expert guidance'],
      pricing: { basic: 5000, professional: 15000, enterprise: 50000 },
      useCases: ['AI transformation', 'Technology selection', 'Process optimization', 'Team training']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      description: 'Perfect for small businesses getting started with AI',
      price: 'Starting at $999',
      features: [
        'Basic AI implementation',
        'Standard support',
        'Monthly reporting',
        'Basic integrations',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced AI needs',
      price: 'Starting at $4,999',
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Real-time monitoring',
        'Custom integrations',
        'Dedicated account manager',
        'Phone & email support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive AI solutions for large organizations',
      price: 'Starting at $12,999',
      features: [
        'Custom AI development',
        '24/7 support',
        'Advanced analytics',
        'White-label solutions',
        'Dedicated team',
        'On-premise deployment',
        'Custom training'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group"
        description="Comprehensive AI services including machine learning, NLP, computer vision, and custom AI solutions. Transform your business with cutting-edge artificial intelligence."
        keywords="AI services, machine learning, natural language processing, computer vision, AI consulting, artificial intelligence solutions"
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />
      
      <div className="min-h-screen futuristic-bg">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold neon-text mb-6 fade-in-up">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up">
                Transform your business with cutting-edge artificial intelligence solutions 
                designed for the modern digital world
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
                <button className="futuristic-btn">
                  Get Started
                </button>
                <button className="futuristic-btn futuristic-btn-secondary">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-blue mb-4">Our AI Solutions</h2>
              <p className="text-xl text-gray-300">Comprehensive AI services tailored to your business needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="futuristic-card futuristic-card-enter p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold neon-text-purple mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold neon-text-cyan mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold neon-text-pink mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-neon-pink rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold neon-text-green mb-2">Use Cases</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-neon-green rounded-full mr-2"></span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-lg font-bold neon-text-orange">${service.pricing.basic.toLocaleString()}</span>
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </div>
                  </div>

                  <button className="w-full futuristic-btn">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 futuristic-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold neon-text-pink mb-4">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the AI solution that fits your business needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`futuristic-card p-8 relative ${plan.popular ? 'ring-2 ring-neon-cyan' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-neon-cyan text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold neon-text mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-3xl font-bold neon-text-blue">{plan.price}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-neon-green mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full futuristic-btn ${plan.popular ? '' : 'futuristic-btn-secondary'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold neon-text mb-6">Ready to Harness the Power of AI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="futuristic-btn">
                Start Your AI Journey
              </button>
              <button className="futuristic-btn futuristic-btn-secondary">
                Schedule Consultation
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Free consultation • Custom AI solutions • Expert guidance
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;
