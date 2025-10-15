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
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business.',
      href: '/ai-solutions',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $1,500/month'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      href: '/cloud-infrastructure',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery'],
      price: 'Starting at $2,000/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets.',
      href: '/cybersecurity',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      price: 'Starting at $3,000/month'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business.',
      href: '/digital-transformation',
      features: ['Process Automation', 'Legacy Modernization', 'Change Management', 'Training'],
      price: 'Starting at $5,000/month'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Advanced data analytics and business intelligence solutions.',
      href: '/data-analytics',
      features: ['Real-time Dashboards', 'Predictive Modeling', 'Data Visualization', 'Custom Reports'],
      price: 'Starting at $2,500/month'
    },
    {
      icon: GlobeAltIcon,
      title: 'Web Development',
      description: 'Modern web applications and e-commerce solutions.',
      href: '/web-development',
      features: ['Responsive Design', 'E-commerce', 'CMS Development', 'API Integration'],
      price: 'Starting at $1,200/month'
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Custom Solutions',
    'Scalable Architecture',
    'Security First',
    'Performance Optimized',
    'Cost Effective'
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including cloud infrastructure, cybersecurity, digital transformation, and more." />
        <meta name="keywords" content="AI services, IT services, cloud infrastructure, cybersecurity, digital transformation, data analytics, web development" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We deliver comprehensive AI and IT solutions that drive growth, efficiency, and innovation 
              for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/pricing" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <p className="text-blue-600 font-semibold">{service.price}</p>
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
                    to={service.href}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
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
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-600">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
