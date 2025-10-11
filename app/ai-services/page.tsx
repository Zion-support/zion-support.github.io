import React from 'react';
import { CheckCircle, Brain, Zap, BarChart3, Users, Settings, ArrowRight, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, recommendation systems, and automation.',
      features: ['Custom model development', 'Data preprocessing', 'Model training', 'API integration'],
      pricing: 'Starting at $10,000/project',
      link: '/ai-services/machine-learning'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Process Automation',
      description: 'Intelligent automation solutions to streamline business processes and reduce manual work.',
      features: ['Workflow automation', 'RPA implementation', 'Integration services', 'Monitoring'],
      pricing: 'Starting at $3,000/month',
      link: '/ai-services/process-automation'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Advanced analytics solutions for forecasting, trend analysis, and business intelligence.',
      features: ['Forecasting models', 'Trend analysis', 'Risk assessment', 'Custom dashboards'],
      pricing: 'Starting at $5,000/month',
      link: '/ai-services/predictive-analytics'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Customer Experience AI',
      description: 'AI-powered customer service solutions with chatbots and sentiment analysis.',
      features: ['Chatbot development', 'Sentiment analysis', 'Customer insights', 'Support automation'],
      pricing: 'Starting at $2,500/month',
      link: '/ai-services/customer-experience'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, marketing materials, and technical documentation.',
      features: ['Content automation', 'SEO optimization', 'Brand voice training', 'Multi-language support'],
      pricing: 'Starting at $1,500/month',
      link: '/ai-services/content-generation'
    },
    {
      icon: <Brain className="w-8 h-8 text-red-500" />,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation.',
      features: ['Object detection', 'Image classification', 'Video analysis', 'Real-time processing'],
      pricing: 'Starting at $8,000/project',
      link: '/ai-services/computer-vision'
    }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'AI solutions for medical diagnosis, drug discovery, and patient care optimization.',
      examples: ['Medical imaging analysis', 'Predictive diagnostics', 'Treatment optimization', 'Drug discovery']
    },
    {
      title: 'Finance',
      description: 'AI-powered fraud detection, risk assessment, and algorithmic trading solutions.',
      examples: ['Fraud detection', 'Credit scoring', 'Algorithmic trading', 'Risk management']
    },
    {
      title: 'E-commerce',
      description: 'Personalized recommendations, demand forecasting, and customer behavior analysis.',
      examples: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer segmentation']
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization.',
      examples: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, data sources, and objectives to design the perfect AI solution.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a custom AI architecture tailored to your specific requirements and constraints.'
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'We develop and train AI models using your data, ensuring optimal performance and accuracy.'
    },
    {
      step: '04',
      title: 'Integration & Deployment',
      description: 'We integrate the AI solution into your existing systems and deploy it in your preferred environment.'
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'We provide ongoing monitoring, maintenance, and optimization to ensure peak performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI services including machine learning, process automation, predictive analytics, and computer vision. Transform your business with artificial intelligence." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, process automation, predictive analytics, computer vision" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Artificial Intelligence Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence. From machine learning to computer vision, we deliver AI solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* AI Services Grid */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-blue-400 font-semibold text-sm mb-4">{service.pricing}</div>
                  <Link 
                    to={service.link}
                    className="text-white text-sm hover:text-blue-400 transition-colors flex items-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Industries Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                AI solutions across diverse industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-semibold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our AI Development Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology for successful AI implementation
              </p>
            </div>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can transform your business. Get a free consultation and discover the possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServicesPage;