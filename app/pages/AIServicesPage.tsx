import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  SparklesIcon,
  BeakerIcon,
  LockClosedIcon,
  EyeIcon,
  CommandLineIcon,
  DatabaseIcon,
  GlobeAltIcon,
  CpuIcon,
  ChatBubbleLeftRightIcon,
  DocumentMagnifyingGlassIcon,
  BoltIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      price: '$2,500/month',
      features: [
        'AI Readiness Assessment',
        'Technology Roadmap',
        'ROI Analysis',
        'Implementation Planning',
        'Change Management',
        'Training & Support'
      ],
      benefits: [
        'Clear AI implementation path',
        'Reduced implementation risks',
        'Faster time to value',
        'Expert guidance throughout'
      ],
      link: '/ai-strategy-consulting'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Conversational AI',
      description: 'Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.',
      price: '$1,800/month',
      features: [
        'Natural Language Processing',
        'Multi-channel Integration',
        'Sentiment Analysis',
        '24/7 Availability',
        'Custom Training',
        'Analytics & Reporting'
      ],
      benefits: [
        'Reduce support costs by 50%',
        'Improve customer satisfaction',
        '24/7 availability',
        'Scalable customer service'
      ],
      link: '/conversational-ai'
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to predict future trends, customer behavior, and business outcomes.',
      price: '$2,200/month',
      features: [
        'Machine Learning Models',
        'Data Visualization',
        'Real-time Predictions',
        'Custom Algorithms',
        'API Integration',
        'Performance Monitoring'
      ],
      benefits: [
        'Data-driven decision making',
        'Improved forecasting accuracy',
        'Competitive advantage',
        'Reduced business risks'
      ],
      link: '/predictive-analytics'
    },
    {
      icon: VideoCameraIcon,
      title: 'Computer Vision',
      description: 'Implement image and video analysis solutions for automation, quality control, and security.',
      price: '$2,800/month',
      features: [
        'Object Detection',
        'Image Classification',
        'Facial Recognition',
        'Video Analysis',
        'Real-time Processing',
        'Custom Model Training'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Process automation',
        'Improved accuracy'
      ],
      link: '/computer-vision'
    },
    {
      icon: SparklesIcon,
      title: 'AI Content Generation',
      description: 'Create high-quality content using AI for marketing, documentation, and creative purposes.',
      price: '$1,500/month',
      features: [
        'Text Generation',
        'Image Creation',
        'Video Production',
        'Content Optimization',
        'Brand Consistency',
        'Multi-format Support'
      ],
      benefits: [
        '10x faster content creation',
        'Consistent brand voice',
        'Cost-effective production',
        'Scalable content strategy'
      ],
      link: '/ai-content-generation'
    },
    {
      icon: LockClosedIcon,
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-powered security solutions for threat detection and prevention.',
      price: '$2,000/month',
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Automated Response',
        'Risk Assessment',
        'Compliance Monitoring',
        'Security Analytics'
      ],
      benefits: [
        'Enhanced security posture',
        'Reduced false positives',
        'Automated threat response',
        'Compliance ready'
      ],
      link: '/ai-security'
    }
  ];

  const stats = [
    { number: '99.5%', label: 'Accuracy Rate' },
    { number: '50+', label: 'AI Models Deployed' },
    { number: '24/7', label: 'Monitoring' },
    { number: '99.9%', label: 'Uptime SLA' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including strategy consulting, conversational AI, predictive analytics, computer vision, content generation, and security solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, conversational AI, predictive analytics, computer vision, AI consulting" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our advanced AI services and solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive AI services. From strategy consulting to implementation, 
                we deliver cutting-edge artificial intelligence solutions that drive real results.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to solve complex business challenges with proven technology and expert support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <ArrowRightIcon className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      to={service.link} 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link 
                      to="/contact" 
                      className="border border-blue-400 text-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-300">We use the latest AI frameworks and models to ensure optimal performance and accuracy.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Our AI specialists have years of experience in machine learning, deep learning, and data science.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">We deliver measurable business outcomes with our AI solutions, backed by real case studies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <BoltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300">Get your AI solutions up and running quickly with our streamlined deployment process.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <LockClosedIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Your data and AI models are protected with enterprise-grade security and compliance.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring to ensure your AI solutions run smoothly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free AI consultation and discover how our services can drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free AI Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
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