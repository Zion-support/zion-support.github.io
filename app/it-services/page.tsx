import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users, Server, Network, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      duration: '2-4 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats and data breaches.',
      features: ['Security assessment', 'Penetration testing', 'Compliance audit', '24/7 monitoring'],
      pricing: 'Starting at $1,800',
      link: '/cybersecurity',
      popular: true,
      duration: '1-3 weeks'
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your specific business requirements and workflows.',
      features: ['Web applications', 'Mobile apps', 'API development', 'Database design'],
      pricing: 'Starting at $3,500',
      link: '/custom-development',
      popular: false,
      duration: '4-12 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Optimize and maintain your databases for maximum performance and reliability.',
      features: ['Performance tuning', 'Backup strategies', 'Data migration', 'Security hardening'],
      pricing: 'Starting at $1,200',
      link: '/database-management',
      popular: false,
      duration: '1-2 weeks'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS development', 'Android development', 'Cross-platform', 'App store deployment'],
      pricing: 'Starting at $4,000',
      link: '/mobile-solutions',
      popular: false,
      duration: '6-16 weeks'
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-500" />,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for your organization.',
      features: ['Network design', 'Hardware installation', 'Security configuration', 'Performance monitoring'],
      pricing: 'Starting at $2,000',
      link: '/network-infrastructure',
      popular: false,
      duration: '2-6 weeks'
    }
  ];

  const benefits = [
    {
      title: 'Cost Savings',
      description: 'Reduce IT costs by up to 40% through efficient solutions and automation',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring services',
      icon: <Clock className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Expert Team',
      description: 'Certified professionals with years of industry experience',
      icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible solutions that grow with your business needs',
      icon: <Settings className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and network infrastructure solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, custom development, database management, mobile solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of IT services designed to address every aspect of your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">
                      {service.pricing}
                    </span>
                    <span className="text-sm text-gray-500">
                      {service.duration}
                    </span>
                  </div>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our proven track record and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already leveraging our IT services to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your IT Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;