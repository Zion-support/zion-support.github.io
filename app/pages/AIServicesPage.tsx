import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CpuChipIcon, 
  ChatBubbleLeftRightIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  BoltIcon, 
  TargetIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, recommendation systems, and automation.',
      features: ['Custom model development', 'Data preprocessing', 'Model training', 'Deployment & monitoring']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI solutions for customer service and business automation.',
      features: ['Natural language processing', 'Multi-channel support', 'Integration capabilities', 'Analytics dashboard']
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting solutions for business intelligence.',
      features: ['Data modeling', 'Forecasting', 'Risk assessment', 'Real-time insights']
    },
    {
      icon: ShieldCheckIcon,
      title: 'AI Security',
      description: 'Advanced AI-powered security solutions to protect your digital assets.',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring']
    },
    {
      icon: BoltIcon,
      title: 'Process Automation',
      description: 'Intelligent automation solutions to streamline business processes.',
      features: ['Workflow automation', 'Document processing', 'Data extraction', 'Process optimization']
    },
    {
      icon: TargetIcon,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for automation and quality control.',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analysis']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Professional AI services including machine learning, chatbots, predictive analytics, and automation from Zion Tech Group." />
        <meta name="keywords" content="AI services, machine learning, chatbots, predictive analytics, automation, Zion Tech Group" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Professional AI services including machine learning, chatbots, predictive analytics, and automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Services
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Harness the power of artificial intelligence to transform your business operations. 
                Our comprehensive AI services help you automate processes, gain insights, and drive innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you implement cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
