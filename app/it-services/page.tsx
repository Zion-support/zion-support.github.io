import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Database, Smartphone, DollarSign, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud migration services with ongoing management, optimization, and security for AWS, Azure, and Google Cloud.',
      features: [
        'Multi-cloud migration strategy',
        'Infrastructure as Code (IaC)',
        'Cost optimization',
        'Security compliance',
        '24/7 monitoring',
        'Disaster recovery planning'
      ],
      pricing: 'Starting at $2,500',
      popular: true,
      link: '/cloud-migration',
      category: 'Cloud'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat assessment, penetration testing, and security monitoring.',
      features: [
        'Security assessment & audit',
        'Penetration testing',
        'Threat monitoring',
        'Incident response',
        'Security training',
        'Compliance management'
      ],
      pricing: '$1,500/month',
      popular: true,
      link: '/cybersecurity-solutions',
      category: 'Security'
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies to meet your specific business requirements.',
      features: [
        'Web application development',
        'API development & integration',
        'Database design & optimization',
        'Legacy system modernization',
        'Microservices architecture',
        'Quality assurance & testing'
      ],
      pricing: 'Starting at $5,000',
      popular: false,
      link: '/custom-development',
      category: 'Development'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics, reporting, and business intelligence solutions.',
      features: [
        'Data warehousing',
        'ETL/ELT processes',
        'Real-time analytics',
        'Custom dashboards',
        'Predictive modeling',
        'Data visualization'
      ],
      pricing: '$2,000/month',
      popular: false,
      link: '/data-analytics',
      category: 'Analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-pink-500" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      features: [
        'iOS & Android development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Offline functionality'
      ],
      pricing: 'Starting at $8,000',
      popular: false,
      link: '/mobile-development',
      category: 'Mobile'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current IT infrastructure and identify areas for improvement and optimization.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our experts develop a comprehensive IT strategy tailored to your business goals and requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement solutions using industry best practices and cutting-edge technologies.'
    },
    {
      step: '04',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure optimal performance and security.'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-500" />,
      title: 'Cost Reduction',
      description: 'Reduce IT costs by up to 30% through optimization and automation.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: 'Faster Deployment',
      description: 'Accelerate time-to-market with our agile development approach.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Expert Team',
      description: 'Work with certified professionals and industry experts.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Enhanced Security',
      description: 'Protect your business with enterprise-grade security solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, and data analytics solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, custom development, data analytics, mobile development" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* IT Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the benefits of working with a trusted IT partner.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our IT Process</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A proven methodology for successful IT project delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Modernize Your IT?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can transform your business and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your IT Transformation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItServicesPage;