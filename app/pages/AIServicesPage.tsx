import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BoltIcon,
  CommandLineIcon
} from '@heroicons/react/24/outline';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.',
      features: ['Natural Language Processing', 'Multi-channel Integration', 'Sentiment Analysis', '24/7 Availability']
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict trends, behaviors, and outcomes for better decision making.',
      features: ['Data Mining', 'Statistical Modeling', 'Real-time Predictions', 'Custom Dashboards']
    },
    {
      icon: ShieldCheckIcon,
      title: 'AI Security Solutions',
      description: 'Protect your AI systems and data with advanced security measures and compliance frameworks.',
      features: ['Threat Detection', 'Data Privacy', 'Model Security', 'Compliance Auditing']
    },
    {
      icon: BoltIcon,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows using AI to increase efficiency and reduce costs.',
      features: ['Workflow Automation', 'Document Processing', 'Data Entry Automation', 'Quality Control']
    },
    {
      icon: CommandLineIcon,
      title: 'Custom AI Development',
      description: 'Build bespoke AI solutions tailored to your specific business needs and requirements.',
      features: ['Custom Models', 'API Development', 'Integration Services', 'Ongoing Support']
    }
  ];

  const benefits = [
    'Increase operational efficiency by up to 60%',
    'Reduce manual errors and improve accuracy',
    'Enhance customer experience and satisfaction',
    'Enable data-driven decision making',
    'Scale operations without proportional cost increases',
    'Stay competitive in the digital marketplace'
  ];

  const stats = [
    { number: '50+', label: 'AI Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '60%', label: 'Average Efficiency Gain' },
    { number: '24/7', label: 'AI Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including strategy consulting, machine learning, predictive analytics, and custom AI development." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, predictive analytics, AI consulting, custom AI development" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From strategy to implementation, we help you harness the power of AI.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our AI Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our AI Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our AI services can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;