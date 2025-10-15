import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning'],
      price: 'Starting at $2,500/month'
    },
    {
      icon: ChartBarIcon,
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models and algorithms to solve complex business problems.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Model Training'],
      price: 'Starting at $3,500/month'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and conversational AI.',
      features: ['Text Analysis', 'Language Translation', 'Chatbot Development', 'Sentiment Analysis'],
      price: 'Starting at $2,800/month'
    },
    {
      icon: EyeIcon,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions using advanced computer vision technologies.',
      features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'OCR Processing'],
      price: 'Starting at $4,200/month'
    },
    {
      icon: CogIcon,
      title: 'AI Automation',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work.',
      features: ['Process Automation', 'Workflow Optimization', 'Intelligent Routing', 'Decision Automation'],
      price: 'Starting at $2,500/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'AI Security Solutions',
      description: 'Advanced AI-powered security solutions to protect your digital assets and data.',
      features: ['Threat Detection', 'Anomaly Detection', 'Fraud Prevention', 'Security Monitoring'],
      price: 'Starting at $3,000/month'
    }
  ];

  const features = [
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI implementations designed specifically for your business needs and requirements.',
      icon: CpuChipIcon
    },
    {
      title: 'Scalable Architecture',
      description: 'AI solutions that grow with your business and handle increasing data volumes and complexity.',
      icon: CloudIcon
    },
    {
      title: 'Real-time Processing',
      description: 'High-performance AI systems that process data in real-time for immediate insights and actions.',
      icon: RocketLaunchIcon
    },
    {
      title: 'Expert Support',
      description: 'Dedicated AI experts who provide ongoing support, monitoring, and optimization of your AI systems.',
      icon: UserGroupIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, NLP, computer vision, automation, and security solutions." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI automation, AI security, artificial intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI services. From machine learning to computer vision, 
              we deliver cutting-edge artificial intelligence solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our AI Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-purple-600 font-semibold">{service.price}</p>
                  </div>
                  <ul className="mb-4 space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="text-purple-600 hover:text-purple-700 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our AI Services?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our AI services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-600">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-600" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-600" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;