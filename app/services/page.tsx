import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for your business needs',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics'
      ],
      href: '/ai-solutions'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      features: [
        'Cloud Migration',
        'Infrastructure Management',
        'Security & Compliance',
        'Cost Optimization'
      ],
      href: '/cloud-infrastructure'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response'
      ],
      href: '/cybersecurity'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'Real-time Analytics',
        'Custom Dashboards'
      ],
      href: '/analytics'
    },
    {
      icon: GlobeAltIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services for your organization',
      features: [
        'Process Automation',
        'Digital Strategy',
        'Technology Integration',
        'Change Management'
      ],
      href: '/digital-transformation'
    }
  ];

  const benefits = [
    '24/7 Expert Support',
    'Proactive Monitoring',
    'Scalable Solutions',
    'Cost Optimization',
    'Security Compliance',
    'Performance Optimization'
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, and digital transformation for modern businesses." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, digital transformation, IT services, data analytics" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
                and accelerate digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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
                    to={service.href}
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
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive technology solutions that keep your business running smoothly
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <StarIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit}</h3>
                  <p className="text-gray-300">
                    Professional services that ensure your systems are always running at peak performance.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you leverage the power of modern technology
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
      </div>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;