import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, Cloud, Database, Users, BarChart3, Cog, Target, Rocket } from 'lucide-react';

const AISolutions: React.FC = () => {
  const aiSolutions = [
    {
      icon: Brain,
      title: 'Machine Learning & Deep Learning',
      description: 'Advanced ML models and neural networks for predictive analytics and pattern recognition',
      features: [
        'Custom Model Development',
        'Predictive Analytics',
        'Computer Vision',
        'Natural Language Processing',
        'Recommendation Systems',
        'Anomaly Detection'
      ],
      color: 'blue'
    },
    {
      icon: Zap,
      title: 'AI Automation & Workflows',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work',
      features: [
        'Process Automation',
        'Workflow Optimization',
        'RPA Integration',
        'Smart Document Processing',
        'Task Orchestration',
        'Decision Automation'
      ],
      color: 'green'
    },
    {
      icon: Shield,
      title: 'AI Security & Compliance',
      description: 'Enterprise-grade AI security solutions with built-in compliance and governance',
      features: [
        'AI Model Security',
        'Data Privacy Protection',
        'Compliance Monitoring',
        'Threat Detection',
        'Access Control',
        'Audit Trails'
      ],
      color: 'red'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native AI Platforms',
      description: 'Scalable AI infrastructure and platforms designed for cloud environments',
      features: [
        'Auto-scaling Infrastructure',
        'Multi-cloud Deployment',
        'Container Orchestration',
        'API Management',
        'Real-time Processing',
        'Edge Computing'
      ],
      color: 'purple'
    },
    {
      icon: Database,
      title: 'AI Data Management',
      description: 'Intelligent data processing, storage, and analytics solutions',
      features: [
        'Data Pipeline Automation',
        'Real-time Analytics',
        'Data Quality Management',
        'Feature Engineering',
        'Data Lake Solutions',
        'Stream Processing'
      ],
      color: 'orange'
    },
    {
      icon: Users,
      title: 'AI-Powered Customer Experience',
      description: 'Enhance customer interactions with intelligent chatbots, personalization, and support',
      features: [
        'Intelligent Chatbots',
        'Personalization Engines',
        'Customer Analytics',
        'Sentiment Analysis',
        'Predictive Support',
        'Omnichannel AI'
      ],
      color: 'teal'
    }
  ];

  const industrySolutions = [
    {
      title: 'Healthcare AI',
      description: 'AI solutions for medical diagnosis, drug discovery, and patient care optimization',
      icon: '🏥',
      benefits: ['Improved Diagnosis Accuracy', 'Faster Drug Discovery', 'Personalized Treatment']
    },
    {
      title: 'Financial AI',
      description: 'AI-powered fraud detection, risk assessment, and algorithmic trading solutions',
      icon: '💰',
      benefits: ['Fraud Prevention', 'Risk Management', 'Automated Trading']
    },
    {
      title: 'Manufacturing AI',
      description: 'Smart manufacturing with predictive maintenance and quality control',
      icon: '🏭',
      benefits: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization']
    },
    {
      title: 'Retail AI',
      description: 'Personalized shopping experiences and intelligent inventory management',
      icon: '🛍️',
      benefits: ['Personalized Recommendations', 'Inventory Optimization', 'Customer Insights']
    }
  ];

  const implementationProcess = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems, data, and business requirements to identify AI opportunities',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy with clear objectives, timelines, and success metrics',
      icon: BarChart3
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'Build and train custom AI models tailored to your specific business needs and data',
      icon: Cog
    },
    {
      step: '04',
      title: 'Deployment & Integration',
      description: 'Seamlessly integrate AI solutions into your existing systems and workflows',
      icon: Rocket
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuously monitor performance and optimize AI models for better results',
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Solutions Hub
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business. From machine learning 
              to automation, we provide the tools and expertise you need to succeed in the AI era.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI capabilities designed to address your most critical business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <div key={solution.title} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 rounded-lg bg-${solution.color}-100 flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 text-${solution.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <div className={`w-2 h-2 rounded-full bg-${solution.color}-500 mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`inline-flex items-center text-${solution.color}-600 hover:text-${solution.color}-700 font-semibold transition-colors`}
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored AI solutions designed for specific industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((solution) => (
              <div key={solution.title} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{solution.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for successful AI deployment and integration
            </p>
          </div>
          
          <div className="space-y-8">
            {implementationProcess.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600 mr-4" />
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our AI experts help you identify opportunities and implement solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your AI Journey
            </Link>
            <Link
              to="/case-studies"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutions;