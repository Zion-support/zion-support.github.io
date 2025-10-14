import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: 'Machine Learning Models',
      description: 'Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.',
      icon: CpuChipIcon,
      features: [
        'Custom algorithm development',
        'Real-time data processing',
        'Model optimization',
        'Continuous learning'
      ]
    },
    {
      title: 'Computer Vision',
      description: 'Advanced image and video analysis solutions for object detection, recognition, and automated visual inspection.',
      icon: EyeIcon,
      features: [
        'Object detection',
        'Image classification',
        'Facial recognition',
        'Quality inspection'
      ]
    },
    {
      title: 'Natural Language Processing',
      description: 'Intelligent text analysis and language understanding for chatbots, sentiment analysis, and content generation.',
      icon: ChatBubbleLeftRightIcon,
      features: [
        'Sentiment analysis',
        'Text generation',
        'Language translation',
        'Content summarization'
      ]
    },
    {
      title: 'Document Intelligence',
      description: 'Automated document processing and analysis for data extraction, classification, and intelligent document management.',
      icon: DocumentTextIcon,
      features: [
        'Document classification',
        'Data extraction',
        'OCR processing',
        'Automated workflows'
      ]
    },
    {
      title: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting solutions to help you make informed business decisions and predict future trends.',
      icon: LightBulbIcon,
      features: [
        'Trend forecasting',
        'Risk assessment',
        'Demand prediction',
        'Performance optimization'
      ]
    },
    {
      title: 'AI Automation',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work through AI-powered workflows.',
      icon: SparklesIcon,
      features: [
        'Process automation',
        'Workflow optimization',
        'Task scheduling',
        'Intelligent routing'
      ]
    }
  ];

  const benefits = [
    'Increased Efficiency',
    'Cost Reduction',
    'Better Decision Making',
    'Enhanced Customer Experience',
    'Scalable Solutions',
    '24/7 Availability'
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, computer vision, NLP, and automation services for modern businesses." />
        <meta name="keywords" content="AI solutions, machine learning, computer vision, NLP, artificial intelligence, automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform Your Business with Artificial Intelligence
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Leverage the power of AI to automate processes, gain insights, and drive innovation 
              across your organization with our cutting-edge artificial intelligence solutions.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive AI solutions that keep your business ahead of the competition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                <p className="text-gray-300">
                  Professional AI services that ensure your business stays competitive and innovative.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Embrace AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you implement AI solutions that transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;