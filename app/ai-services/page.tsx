import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, recommendation systems, and automated decision-making.',
      features: ['Predictive modeling', 'Recommendation engines', 'Anomaly detection', 'Time series forecasting', 'Model deployment'],
      pricing: 'Starting at $2,500/month',
      icon: '🧠',
      link: '/ai-solutions'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, sentiment analysis, language translation, and conversational AI.',
      features: ['Sentiment analysis', 'Text classification', 'Language translation', 'Chatbot development', 'Document processing'],
      pricing: 'Starting at $1,800/month',
      icon: '💬',
      link: '/ai-content-generator'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis, object detection, facial recognition, and visual content moderation.',
      features: ['Object detection', 'Facial recognition', 'Image classification', 'Video analysis', 'Content moderation'],
      pricing: 'Starting at $2,200/month',
      icon: '👁️',
      link: '/zion-ai-content-moderator'
    },
    {
      title: 'AI Automation',
      description: 'Intelligent process automation, workflow optimization, and smart business process management.',
      features: ['Process automation', 'Workflow optimization', 'Task scheduling', 'Data processing', 'Integration APIs'],
      pricing: 'Starting at $1,500/month',
      icon: '⚡',
      link: '/zion-ai-workflow-automator'
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights, forecasting, and predictive modeling for business intelligence.',
      features: ['Sales forecasting', 'Customer churn prediction', 'Risk assessment', 'Market analysis', 'Trend prediction'],
      pricing: 'Starting at $3,000/month',
      icon: '📊',
      link: '/zion-ai-customer-churn-predictor'
    },
    {
      title: 'AI Consulting',
      description: 'Strategic AI planning, technology assessment, and implementation guidance for your business.',
      features: ['AI strategy planning', 'Technology assessment', 'Implementation roadmap', 'Team training', 'Ongoing support'],
      pricing: 'Starting at $200/hour',
      icon: '🎯',
      link: '/contact'
    }
  ];

  const industries = [
    'Healthcare & Medical',
    'Financial Services',
    'E-commerce & Retail',
    'Manufacturing',
    'Education',
    'Real Estate',
    'Marketing & Advertising',
    'Logistics & Supply Chain'
  ];

  const technologies = [
    'TensorFlow & PyTorch',
    'OpenAI GPT Models',
    'Google Cloud AI',
    'AWS Machine Learning',
    'Azure Cognitive Services',
    'IBM Watson',
    'Custom Neural Networks',
    'Edge AI Solutions'
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, and automation solutions. Expert AI consulting and implementation for modern businesses." />
        <meta name="keywords" content="ai services, machine learning, natural language processing, computer vision, ai consulting, predictive analytics, automation" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning to automation, we deliver AI that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Free AI Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Service Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Capabilities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.pricing}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      to={service.link}
                      className="flex-1 bg-purple-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Learn More
                    </Link>
                    <a 
                      href="https://ziontechgroup.com/contact"
                      className="flex-1 border border-purple-600 text-purple-600 text-center py-2 px-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our AI solutions are tailored to meet the unique challenges of various industries.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage the latest AI technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="font-semibold text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our AI Implementation Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful AI implementation and deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3>
                <p className="text-gray-300">Understand your business needs and data landscape</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategy & Planning</h3>
                <p className="text-gray-300">Develop AI strategy and implementation roadmap</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
                <p className="text-gray-300">Build, train, and test AI models and solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>
                <p className="text-gray-300">Deploy solutions and provide ongoing support</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI services can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                >
                  Call +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email kleber@ziontechgroup.com
                </a>
              </div>
              <div className="mt-8 text-sm text-purple-200">
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>Website: <a href="https://ziontechgroup.com" className="text-blue-300 hover:text-blue-200">https://ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;