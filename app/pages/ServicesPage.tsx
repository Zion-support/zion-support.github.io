import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CogIcon,
  SignalIcon,
  ChartBarIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  EyeIcon,
  DatabaseIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const microSaaSServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool for blogs, social media, and marketing materials.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Plagiarism detection'],
      pricing: '$29/month',
      icon: DocumentTextIcon,
      href: '/ai-content-generator-pro'
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics and reporting dashboard with AI insights.',
      features: ['Custom dashboards', 'Automated reports', 'Data visualization', 'Mobile app'],
      pricing: '$49/month',
      icon: ChartBarIcon,
      href: '/smart-analytics-dashboard'
    },
    {
      name: 'Customer Support Bot',
      description: 'Intelligent chatbot solution for 24/7 customer support automation.',
      features: ['Multi-channel support', 'Natural language processing', 'Integration APIs', 'Analytics'],
      pricing: '$39/month',
      icon: QuestionMarkCircleIcon,
      href: '/customer-support-bot'
    },
    {
      name: 'Project Management AI',
      description: 'AI-powered project management tool with predictive analytics and resource optimization.',
      features: ['Task automation', 'Risk prediction', 'Resource allocation', 'Team collaboration'],
      pricing: '$59/month',
      icon: CogIcon,
      href: '/project-management-ai'
    },
    {
      name: 'Email Marketing Automation',
      description: 'Advanced email marketing platform with AI-driven personalization and optimization.',
      features: ['Behavioral triggers', 'A/B testing', 'Segmentation', 'Performance analytics'],
      pricing: '$79/month',
      icon: EnvelopeIcon,
      href: '/email-marketing-automation'
    },
    {
      name: 'Social Media Scheduler',
      description: 'AI-powered social media management tool with content optimization and scheduling.',
      features: ['Multi-platform posting', 'Optimal timing', 'Content suggestions', 'Engagement tracking'],
      pricing: '$34/month',
      icon: GlobeAltIcon,
      href: '/social-media-scheduler'
    }
  ];

  const aiServices = [
    {
      name: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, recommendation systems, and automation.',
      features: ['Custom model development', 'Data preprocessing', 'Model training', 'Deployment & monitoring'],
      pricing: 'Starting at $5,000',
      icon: CpuChipIcon,
      href: '/machine-learning-solutions'
    },
    {
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      features: ['Text classification', 'Sentiment analysis', 'Language translation', 'Chatbot development'],
      pricing: 'Starting at $3,500',
      icon: DocumentTextIcon,
      href: '/natural-language-processing'
    },
    {
      name: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions for object detection, recognition, and processing.',
      features: ['Object detection', 'Image classification', 'Facial recognition', 'Video analysis'],
      pricing: 'Starting at $4,500',
      icon: EyeIcon,
      href: '/computer-vision-solutions'
    },
    {
      name: 'AI Chatbot Development',
      description: 'Intelligent conversational AI solutions for customer service and business automation.',
      features: ['Multi-language support', 'Integration capabilities', 'Analytics dashboard', 'Custom training'],
      pricing: 'Starting at $2,500',
      icon: QuestionMarkCircleIcon,
      href: '/ai-chatbot-development'
    },
    {
      name: 'Predictive Analytics',
      description: 'Data-driven insights and forecasting solutions for business intelligence and decision making.',
      features: ['Data modeling', 'Forecasting', 'Risk assessment', 'Real-time insights'],
      pricing: 'Starting at $6,000',
      icon: ChartBarIcon,
      href: '/predictive-analytics'
    },
    {
      name: 'AI Process Automation',
      description: 'Intelligent automation solutions to streamline business processes and reduce manual work.',
      features: ['Workflow automation', 'Document processing', 'Data extraction', 'Process optimization'],
      pricing: 'Starting at $4,000',
      icon: CogIcon,
      href: '/ai-process-automation'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure Setup',
      description: 'Complete cloud infrastructure design, implementation, and management services.',
      features: ['AWS/Azure/GCP setup', 'Security configuration', 'Monitoring setup', '24/7 support'],
      pricing: 'Starting at $2,000',
      icon: CloudIcon,
      href: '/cloud-infrastructure-setup'
    },
    {
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      features: ['Security audit', 'Threat detection', 'Incident response', 'Compliance management'],
      pricing: 'Starting at $3,500',
      icon: ShieldCheckIcon,
      href: '/cybersecurity-solutions'
    },
    {
      name: 'Database Management',
      description: 'Database design, optimization, and management services for optimal performance.',
      features: ['Database design', 'Performance tuning', 'Backup strategies', 'Migration services'],
      pricing: 'Starting at $1,500',
      icon: DatabaseIcon,
      href: '/database-management'
    },
    {
      name: 'API Development & Integration',
      description: 'Custom API development and third-party integration services for seamless connectivity.',
      features: ['RESTful APIs', 'GraphQL APIs', 'Third-party integrations', 'API documentation'],
      pricing: 'Starting at $2,500',
      icon: CogIcon,
      href: '/api-development-integration'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android.',
      features: ['Native development', 'Cross-platform apps', 'UI/UX design', 'App store deployment'],
      pricing: 'Starting at $8,000',
      icon: DevicePhoneMobileIcon,
      href: '/mobile-app-development'
    },
    {
      name: 'Web Application Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['Responsive design', 'Performance optimization', 'Security implementation', 'SEO optimization'],
      pricing: 'Starting at $5,000',
      icon: GlobeAltIcon,
      href: '/web-application-development'
    }
  ];

  const additionalServices = [
    {
      name: 'Digital Transformation Consulting',
      description: 'Strategic consulting to modernize your business processes and technology stack.',
      pricing: 'Starting at $10,000',
      icon: RocketLaunchIcon,
      href: '/digital-transformation-consulting'
    },
    {
      name: '5G Network Solutions',
      description: 'Next-generation 5G infrastructure and application development services.',
      pricing: 'Starting at $15,000',
      icon: SignalIcon,
      href: '/5g-network-solutions'
    },
    {
      name: 'IoT Development',
      description: 'Internet of Things solutions for connected devices and smart systems.',
      pricing: 'Starting at $7,500',
      icon: CpuChipIcon,
      href: '/iot-development'
    },
    {
      name: 'Blockchain Solutions',
      description: 'Blockchain development and implementation for secure, decentralized applications.',
      pricing: 'Starting at $12,000',
      icon: ShieldCheckIcon,
      href: '/blockchain-solutions'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and Micro SaaS services from Zion Tech Group. Professional solutions for modern businesses with competitive pricing." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, cloud solutions, cybersecurity, digital transformation, Zion Tech Group" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI, IT, and Micro SaaS services from Zion Tech Group." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI, IT, and Micro SaaS solutions designed to accelerate your business growth and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/pricing"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SaaS Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Affordable, specialized software solutions designed to solve specific business challenges with minimal overhead.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-purple-400">{service.pricing}</div>
                    <div className="flex items-center text-yellow-400">
                      <StarIcon className="w-5 h-5 fill-current" />
                      <StarIcon className="w-5 h-5 fill-current" />
                      <StarIcon className="w-5 h-5 fill-current" />
                      <StarIcon className="w-5 h-5 fill-current" />
                      <StarIcon className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Services</span> & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced artificial intelligence solutions to transform your business operations and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-cyan-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Custom pricing available</div>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Quote
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span> & Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services to build, maintain, and optimize your technology infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-green-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Service Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-green-400">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Project-based pricing</div>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Project
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Additional</span> Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized services for cutting-edge technologies and emerging business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-yellow-500">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <div className="text-lg font-bold text-yellow-400 mb-4">{service.pricing}</div>
                  <Link
                    to={service.href}
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center text-sm"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our comprehensive services can accelerate your growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicesPage;
