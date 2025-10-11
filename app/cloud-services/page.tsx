import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Zap, Globe, DollarSign, Star, Clock, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CloudServicesPage: React.FC = () => {
  const cloudServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration Services',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and enhanced security.',
      features: ['Zero-downtime migration', 'Cost optimization', 'Security compliance', 'Performance monitoring', 'Disaster recovery', '24/7 support'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      category: 'Migration',
      duration: '2-4 weeks'
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete cloud infrastructure design and implementation for scalable, secure, and cost-effective solutions.',
      features: ['Infrastructure design', 'Auto-scaling setup', 'Load balancing', 'Security configuration', 'Monitoring setup', 'Backup solutions'],
      pricing: 'Starting at $3,000',
      link: '/cloud-infrastructure',
      popular: false,
      category: 'Infrastructure',
      duration: '1-3 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Security Solutions',
      description: 'Comprehensive cloud security services including threat detection, compliance, and data protection.',
      features: ['Threat detection', 'Compliance management', 'Data encryption', 'Access control', 'Security audits', 'Incident response'],
      pricing: 'Starting at $1,200/month',
      link: '/cloud-security',
      popular: false,
      category: 'Security',
      duration: 'Ongoing'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Database Management',
      description: 'Managed database services with automated backups, scaling, and performance optimization.',
      features: ['Database optimization', 'Automated backups', 'Performance tuning', 'Scaling management', 'Security patches', 'Monitoring'],
      pricing: 'Starting at $800/month',
      link: '/cloud-database',
      popular: false,
      category: 'Database',
      duration: 'Ongoing'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Cloud Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with our intelligent optimization and resource management.',
      features: ['Cost analysis', 'Resource optimization', 'Reserved instances', 'Auto-scaling', 'Cost monitoring', 'Budget alerts'],
      pricing: 'Starting at $500/month',
      link: '/cloud-optimization',
      popular: true,
      category: 'Optimization',
      duration: '1-2 weeks'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement multi-cloud strategies for improved reliability and vendor independence.',
      features: ['Multi-cloud design', 'Vendor management', 'Disaster recovery', 'Load distribution', 'Cost optimization', 'Compliance'],
      pricing: 'Starting at $4,000',
      link: '/multi-cloud-strategy',
      popular: false,
      category: 'Strategy',
      duration: '4-8 weeks'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '99.9% Uptime',
      description: 'Guaranteed high availability with our robust cloud infrastructure and monitoring systems.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Cost Savings',
      description: 'Reduce IT costs by up to 40% with our cloud optimization and resource management strategies.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Scalability',
      description: 'Easily scale your infrastructure up or down based on your business needs and demand.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Security First',
      description: 'Enterprise-grade security with encryption, compliance, and advanced threat protection.'
    }
  ];

  const stats = [
    { number: '200+', label: 'Cloud Migrations' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Monitoring' }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services', icon: '☁️', description: 'Leading cloud platform with comprehensive services' },
    { name: 'Microsoft Azure', icon: '🔵', description: 'Enterprise-focused cloud solutions' },
    { name: 'Google Cloud Platform', icon: '🌐', description: 'AI and data analytics focused cloud' },
    { name: 'IBM Cloud', icon: '🔷', description: 'Hybrid cloud and enterprise solutions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud services including migration, infrastructure setup, security, and optimization. Transform your business with our cloud expertise." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, Google Cloud, cloud security, cloud optimization" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Cloud Services & Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Professional cloud services including migration, infrastructure setup, security, and optimization. 
              Transform your business with our cloud expertise and reduce costs by up to 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/it-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View IT Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Cloud Providers We Work With</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We're certified partners with all major cloud providers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{provider.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{provider.name}</h3>
                <p className="text-gray-300 text-sm">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive cloud solutions to power your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {cloudServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  <div className="text-sm text-gray-400">{service.duration}</div>
                </div>
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
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
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Cloud Services?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the benefits of professional cloud management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Get a free cloud assessment and discover how we can optimize your infrastructure and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Micro SAAS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServicesPage;
