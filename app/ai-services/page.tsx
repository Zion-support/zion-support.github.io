import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Brain, Zap, Shield, Clock, Users, TrendingUp, Target, BarChart3 } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent automation.',
      icon: '🧠',
      price: '$2,500/month',
      features: [
        'Custom model development',
        'Data preprocessing & cleaning',
        'Model training & optimization',
        'Real-time inference APIs',
        'Model monitoring & maintenance',
        'A/B testing framework'
      ],
      popular: true,
      category: 'Core AI',
      benefits: ['Increase accuracy by 40%', 'Reduce manual work by 80%', 'Scale operations 10x'],
      marketPrice: '$5,000-15,000/month',
      useCases: ['Predictive maintenance', 'Customer churn prediction', 'Fraud detection', 'Demand forecasting']
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      icon: '💬',
      price: '$1,800/month',
      features: [
        'Sentiment analysis',
        'Text classification',
        'Named entity recognition',
        'Language translation',
        'Text summarization',
        'Chatbot development'
      ],
      popular: true,
      category: 'Language AI',
      benefits: ['Process 10,000+ documents/hour', '95% accuracy in sentiment analysis', 'Support 50+ languages'],
      marketPrice: '$3,000-10,000/month',
      useCases: ['Customer feedback analysis', 'Content moderation', 'Document processing', 'Multilingual support']
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis with object detection, facial recognition, and visual intelligence.',
      icon: '👁️',
      price: '$3,200/month',
      features: [
        'Object detection & recognition',
        'Facial recognition systems',
        'Image classification',
        'Video analysis',
        'OCR & document scanning',
        'Quality inspection automation'
      ],
      popular: false,
      category: 'Visual AI',
      benefits: ['Process 1M+ images daily', '99.5% accuracy in object detection', 'Real-time video analysis'],
      marketPrice: '$6,000-20,000/month',
      useCases: ['Quality control', 'Security monitoring', 'Medical imaging', 'Retail analytics']
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Advanced forecasting and predictive modeling for business intelligence and decision making.',
      icon: '📈',
      price: '$2,200/month',
      features: [
        'Time series forecasting',
        'Risk assessment models',
        'Customer lifetime value prediction',
        'Market trend analysis',
        'Anomaly detection',
        'Automated reporting'
      ],
      popular: true,
      category: 'Analytics AI',
      benefits: ['Improve forecast accuracy by 60%', 'Reduce risk exposure by 45%', 'Identify opportunities 3x faster'],
      marketPrice: '$4,000-12,000/month',
      useCases: ['Sales forecasting', 'Risk management', 'Inventory optimization', 'Market analysis']
    },
    {
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent conversational AI with natural language understanding and multi-channel support.',
      icon: '🤖',
      price: '$1,500/month',
      features: [
        'Natural language understanding',
        'Multi-channel deployment',
        'Integration with CRM/ERP',
        'Voice & text support',
        'Learning & adaptation',
        'Human handoff capabilities'
      ],
      popular: true,
      category: 'Conversational AI',
      benefits: ['Handle 80% of customer queries', 'Reduce response time by 90%', 'Available 24/7'],
      marketPrice: '$3,000-8,000/month',
      useCases: ['Customer support', 'Lead qualification', 'Internal helpdesk', 'Sales assistance']
    },
    {
      title: 'Recommendation Engine',
      description: 'Personalized recommendation systems for e-commerce, content, and product suggestions.',
      icon: '🎯',
      price: '$1,900/month',
      features: [
        'Collaborative filtering',
        'Content-based filtering',
        'Hybrid recommendation models',
        'Real-time personalization',
        'A/B testing framework',
        'Performance analytics'
      ],
      popular: false,
      category: 'Personalization AI',
      benefits: ['Increase conversion rates by 35%', 'Boost average order value by 25%', 'Improve user engagement'],
      marketPrice: '$3,500-10,000/month',
      useCases: ['E-commerce recommendations', 'Content personalization', 'Product suggestions', 'Cross-selling']
    },
    {
      title: 'AI-Powered Automation',
      description: 'Intelligent process automation with decision-making capabilities and exception handling.',
      icon: '⚙️',
      price: '$2,800/month',
      features: [
        'Workflow automation',
        'Decision tree automation',
        'Exception handling',
        'Process optimization',
        'Integration capabilities',
        'Performance monitoring'
      ],
      popular: true,
      category: 'Process AI',
      benefits: ['Automate 70% of repetitive tasks', 'Reduce processing time by 85%', 'Eliminate human errors'],
      marketPrice: '$5,000-15,000/month',
      useCases: ['Document processing', 'Invoice automation', 'Customer onboarding', 'Compliance monitoring']
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced data analysis with AI-powered insights, pattern recognition, and automated reporting.',
      icon: '📊',
      price: '$2,100/month',
      features: [
        'Automated data analysis',
        'Pattern recognition',
        'Anomaly detection',
        'Predictive insights',
        'Interactive dashboards',
        'Automated reporting'
      ],
      popular: false,
      category: 'Data AI',
      benefits: ['Process 100GB+ data daily', 'Generate insights 10x faster', 'Identify hidden patterns'],
      marketPrice: '$4,000-12,000/month',
      useCases: ['Business intelligence', 'Performance analysis', 'Trend identification', 'Data-driven decisions']
    },
    {
      title: 'AI Security Solutions',
      description: 'Intelligent cybersecurity with threat detection, fraud prevention, and security monitoring.',
      icon: '🛡️',
      price: '$3,500/month',
      features: [
        'Threat detection & prevention',
        'Fraud detection systems',
        'Behavioral analysis',
        'Real-time monitoring',
        'Incident response automation',
        'Compliance reporting'
      ],
      popular: true,
      category: 'Security AI',
      benefits: ['Detect threats 95% faster', 'Reduce false positives by 80%', 'Prevent 99% of attacks'],
      marketPrice: '$7,000-25,000/month',
      useCases: ['Network security', 'Fraud prevention', 'Access control', 'Compliance monitoring']
    },
    {
      title: 'AI Content Generation',
      description: 'Intelligent content creation with natural language generation and creative AI capabilities.',
      icon: '✍️',
      price: '$1,200/month',
      features: [
        'Natural language generation',
        'Content personalization',
        'Multi-format support',
        'Brand voice adaptation',
        'SEO optimization',
        'Quality assurance'
      ],
      popular: false,
      category: 'Content AI',
      benefits: ['Generate 1000+ articles daily', 'Maintain consistent brand voice', 'Optimize for SEO automatically'],
      marketPrice: '$2,500-8,000/month',
      useCases: ['Blog content', 'Product descriptions', 'Marketing copy', 'Social media posts']
    },
    {
      title: 'AI Voice Solutions',
      description: 'Advanced voice AI with speech recognition, text-to-speech, and voice analytics.',
      icon: '🎤',
      price: '$2,600/month',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support',
        'Real-time processing'
      ],
      popular: false,
      category: 'Voice AI',
      benefits: ['99% accuracy in speech recognition', 'Support 30+ languages', 'Process calls in real-time'],
      marketPrice: '$5,000-15,000/month',
      useCases: ['Call center automation', 'Voice assistants', 'Accessibility solutions', 'Voice analytics']
    },
    {
      title: 'AI Research & Development',
      description: 'Custom AI research and development services for cutting-edge solutions and innovation.',
      icon: '🔬',
      price: 'Custom Pricing',
      features: [
        'Custom algorithm development',
        'Research & experimentation',
        'Proof of concept development',
        'Technology consulting',
        'Innovation workshops',
        'Patent support'
      ],
      popular: false,
      category: 'R&D AI',
      benefits: ['Access to latest AI research', 'Custom solutions for unique needs', 'Competitive advantage'],
      marketPrice: '$10,000-50,000/project',
      useCases: ['Cutting-edge applications', 'Research projects', 'Innovation initiatives', 'Custom solutions']
    }
  ];

  const categories = [
    { name: 'All', count: aiServices.length },
    { name: 'Core AI', count: aiServices.filter(s => s.category === 'Core AI').length },
    { name: 'Language AI', count: aiServices.filter(s => s.category === 'Language AI').length },
    { name: 'Visual AI', count: aiServices.filter(s => s.category === 'Visual AI').length },
    { name: 'Analytics AI', count: aiServices.filter(s => s.category === 'Analytics AI').length },
    { name: 'Conversational AI', count: aiServices.filter(s => s.category === 'Conversational AI').length },
    { name: 'Personalization AI', count: aiServices.filter(s => s.category === 'Personalization AI').length },
    { name: 'Process AI', count: aiServices.filter(s => s.category === 'Process AI').length },
    { name: 'Data AI', count: aiServices.filter(s => s.category === 'Data AI').length },
    { name: 'Security AI', count: aiServices.filter(s => s.category === 'Security AI').length },
    { name: 'Content AI', count: aiServices.filter(s => s.category === 'Content AI').length },
    { name: 'Voice AI', count: aiServices.filter(s => s.category === 'Voice AI').length },
    { name: 'R&D AI', count: aiServices.filter(s => s.category === 'R&D AI').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Advanced artificial intelligence solutions designed to transform your business operations. 
              From machine learning to computer vision, we deliver cutting-edge AI capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Get AI Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">12+</div>
              <div className="text-gray-600">AI Service Categories</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">AI Models Deployed</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Model Accuracy</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive artificial intelligence solutions for every business need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative border-2 ${service.popular ? 'border-purple-500' : 'border-gray-100'}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-4xl mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                    {service.marketPrice !== 'Custom Pricing' && (
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    )}
                  </div>
                  {service.marketPrice !== 'Custom Pricing' && (
                    <div className="text-sm text-green-600 font-medium">
                      Save up to 50% vs market price
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    Get Started
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade AI solutions with proven results and expert support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert AI Team</h3>
              <p className="text-gray-600">PhD-level AI researchers and engineers with 10+ years experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Deployment</h3>
              <p className="text-gray-600">Deploy AI solutions in weeks, not months with our proven methodology.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Compliant</h3>
              <p className="text-gray-600">Bank-level security with GDPR, HIPAA, and SOC2 compliance.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven ROI</h3>
              <p className="text-gray-600">Average 300% ROI within 6 months of implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get a free AI consultation and discover how artificial intelligence can revolutionize your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-purple-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="mt-2">🌐 Visit us at <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;