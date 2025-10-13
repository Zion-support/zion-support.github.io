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
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.',
      icon: CpuChipIcon,
      color: 'from-purple-500 to-pink-500',
      href: '/ai-solutions',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving threats.',
      icon: ShieldCheckIcon,
      color: 'from-cyan-500 to-blue-500',
      href: '/cybersecurity',
      features: ['Threat Detection', 'Security Audits', 'Data Protection', 'Compliance Management']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and infrastructure management to optimize performance and reduce operational costs.',
      icon: CloudIcon,
      color: 'from-green-500 to-emerald-500',
      href: '/cloud-infrastructure',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Cost Optimization', 'Disaster Recovery']
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic digital transformation services to modernize your business processes and enhance customer experiences.',
      icon: ChartBarIcon,
      color: 'from-orange-500 to-red-500',
      href: '/digital-transformation',
      features: ['Process Automation', 'Change Management', 'Digital Strategy', 'Innovation Consulting']
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Custom micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications.',
      icon: GlobeAltIcon,
      color: 'from-pink-500 to-rose-500',
      href: '/micro-saas-solutions',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Maintenance & Support']
    },
    {
      title: '5G Solutions',
      description: 'Next-generation 5G technology solutions for enhanced connectivity, IoT applications, and ultra-low latency services.',
      icon: RocketLaunchIcon,
      color: 'from-indigo-500 to-purple-500',
      href: '/5g-solutions',
      features: ['5G Implementation', 'IoT Solutions', 'Edge Computing', 'Network Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, cybersecurity, cloud infrastructure, digital transformation, and more." />
        <meta name="keywords" content="services, AI solutions, cybersecurity, cloud computing, digital transformation, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how our services can help transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;