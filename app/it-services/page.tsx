import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, Code, Cpu, DollarSign, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
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
      icon: <Server className="w-12 h-12 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development workflow with automated deployment, continuous integration, and infrastructure management.',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Performance monitoring',
        'Version control management',
        'Release automation'
      ],
      pricing: '$2,000/month',
      popular: false,
      link: '/devops-cicd',
      category: 'DevOps'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics, business intelligence, and data visualization.',
      features: [
        'Data warehouse design',
        'ETL/ELT processes',
        'Real-time analytics',
        'Custom dashboards',
        'Machine learning integration',
        'Data governance'
      ],
      pricing: '$2,000/month',
      popular: false,
      link: '/data-analytics',
      category: 'Analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern development practices.',
      features: [
        'Native iOS & Android apps',
        'Cross-platform solutions',
        'UI/UX design',
        'App store deployment',
        'Performance optimization',
        'Maintenance & support'
      ],
      pricing: 'Starting at $5,000',
      popular: false,
      link: '/mobile-development',
      category: 'Development'
    },
    {
      icon: <Globe className="w-12 h-12 text-cyan-500" />,
      title: 'Blockchain Solutions',
      description: 'Enterprise blockchain development, smart contracts, and decentralized application solutions.',
      features: [
        'Smart contract development',
        'DApp creation',
        'Blockchain integration',
        'Token development',
        'Security auditing',
        'DeFi solutions'
      ],
      pricing: '$3,500/month',
      popular: false,
      link: '/blockchain',
      category: 'Blockchain'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance and monitoring'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience'
    }
  ];

  const categories = ['All', 'Cloud', 'Security', 'DevOps', 'Analytics', 'Development', 'Blockchain'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, and mobile development solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              IT Services & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 text-green-500 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>

                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide enterprise-grade IT solutions with unmatched reliability and support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can modernize your infrastructure and accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;