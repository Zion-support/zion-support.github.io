import React from 'react';
import { CheckCircle, Brain, Eye, MessageSquare, BarChart3, Shield, Zap, Globe, Database, Code, Smartphone, Cloud } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Machine Learning Solutions',
      description: 'Build intelligent systems that learn and adapt to your business needs.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Continuous Learning'],
      applications: ['Customer Behavior Analysis', 'Demand Forecasting', 'Risk Assessment', 'Process Optimization']
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Computer Vision',
      description: 'Enable machines to interpret and understand visual information from the world.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Control'],
      applications: ['Medical Imaging', 'Autonomous Vehicles', 'Security Systems', 'Manufacturing QC']
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      title: 'Natural Language Processing',
      description: 'Process and understand human language to enable intelligent communication.',
      features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis', 'Chatbots'],
      applications: ['Customer Support', 'Content Moderation', 'Document Processing', 'Voice Assistants']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced statistical models.',
      features: ['Time Series Analysis', 'Regression Models', 'Classification', 'Anomaly Detection'],
      applications: ['Sales Forecasting', 'Market Analysis', 'Fraud Detection', 'Maintenance Prediction']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Solutions',
      description: 'Protect your systems and data with AI-powered security measures.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Risk Assessment'],
      applications: ['Cybersecurity', 'Access Control', 'Network Monitoring', 'Data Protection']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions.',
      features: ['Workflow Automation', 'Document Processing', 'Data Entry', 'Task Scheduling'],
      applications: ['Administrative Tasks', 'Customer Onboarding', 'Invoice Processing', 'Inventory Management']
    }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'AI-powered diagnostics, drug discovery, and patient care optimization.',
      icon: <Brain className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Finance',
      description: 'Fraud detection, algorithmic trading, and risk management solutions.',
      icon: <BarChart3 className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Retail',
      description: 'Personalized recommendations, inventory management, and customer analytics.',
      icon: <Smartphone className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Transportation',
      description: 'Autonomous vehicles, route optimization, and traffic management.',
      icon: <Globe className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Education',
      description: 'Personalized learning, automated grading, and educational content generation.',
      icon: <MessageSquare className="w-6 h-6 text-indigo-500" />
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'AI Strategy & Assessment',
      description: 'We analyze your business processes and identify AI opportunities for maximum impact.'
    },
    {
      step: '02',
      title: 'Data Preparation & Analysis',
      description: 'Clean, structure, and prepare your data for AI model training and deployment.'
    },
    {
      step: '03',
      title: 'Model Development & Training',
      description: 'Build and train custom AI models tailored to your specific use cases and requirements.'
    },
    {
      step: '04',
      title: 'Integration & Deployment',
      description: 'Seamlessly integrate AI solutions into your existing systems and workflows.'
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'Continuously monitor performance and optimize models for better results over time.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions including machine learning, computer vision, NLP, and predictive analytics." />
        <meta name="keywords" content="AI services, machine learning, computer vision, NLP, predictive analytics, artificial intelligence, automation" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations, enhance decision-making, and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get AI Consultation
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* AI Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Solutions</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI services designed to solve complex business challenges and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Applications:</h4>
                    <ul className="space-y-1">
                      {service.applications.map((app, appIndex) => (
                        <li key={appIndex} className="text-xs text-gray-400">
                          • {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI solutions are tailored to meet the unique challenges and opportunities across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {industry.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{industry.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Development Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A systematic approach to delivering successful AI solutions that drive real business value.
              </p>
            </div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Embrace AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can transform your business and give you a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your AI Journey
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIServicesPage;