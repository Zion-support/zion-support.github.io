import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, Code, Cpu } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with zero downtime.',
      features: ['Zero Downtime Migration', 'Data Integrity', 'Cost Optimization', 'Security Compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive cybersecurity solutions and threat monitoring.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      pricing: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['Automated Deployment', 'Continuous Integration', 'Infrastructure as Code', 'Monitoring'],
      pricing: 'Starting at $2,000/month',
      link: '/devops-cicd'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
      pricing: 'Starting at $2,000/month',
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: ['Native Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Optimization'],
      pricing: 'Starting at $5,000',
      link: '/mobile-development'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Blockchain Solutions',
      description: 'Leverage blockchain technology for secure, transparent, and decentralized applications.',
      features: ['Smart Contracts', 'DApp Development', 'Tokenization', 'DeFi Solutions'],
      pricing: 'Starting at $10,000',
      link: '/blockchain'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Proven Expertise',
      description: 'Our team has successfully delivered 500+ IT projects across various industries.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: 'Cutting-edge Technology',
      description: 'We use the latest technologies and best practices to deliver superior solutions.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security First',
      description: 'Security is built into every solution we deliver, ensuring your data is always protected.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, mobile development, and blockchain solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, mobile development, blockchain" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Comprehensive IT solutions to accelerate your digital transformation. 
              From cloud migration to cybersecurity, we provide end-to-end IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Choose Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We deliver reliable, scalable, and secure IT solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive IT solutions to meet all your technology needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {itServices.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
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
                <div className="flex items-center justify-between">
                  <span className="text-purple-300 font-semibold">{service.pricing}</span>
                  <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
