import React from 'react';
import { CheckCircle, ArrowRight, Cloud, Shield, Server, Database, Smartphone, Globe, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ITServicesPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      price: 'Starting at $2,500',
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security audit', 'Penetration testing', 'Compliance management', '24/7 monitoring'],
      price: 'Starting at $1,500/month',
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Server className="w-8 h-8 text-purple-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      features: ['CI/CD pipeline setup', 'Docker containerization', 'Kubernetes orchestration', 'Monitoring setup'],
      price: 'Starting at $3,000',
      link: '/devops-cicd'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Data warehousing', 'Business intelligence', 'Machine learning', 'Real-time dashboards'],
      price: 'Starting at $2,000/month',
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: 'Mobile Development',
      description: 'Create powerful mobile applications for iOS and Android platforms.',
      features: ['Native & cross-platform', 'UI/UX design', 'App store deployment', 'Maintenance & support'],
      price: 'Starting at $5,000',
      link: '/mobile-development'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Blockchain Solutions',
      description: 'Implement blockchain technology for secure, transparent, and decentralized applications.',
      features: ['Smart contracts', 'DApp development', 'Tokenization', 'Blockchain consulting'],
      price: 'Starting at $10,000',
      link: '/blockchain'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, mobile development, and blockchain solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              IT Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive digital transformation.
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

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              End-to-end IT services designed to modernize your technology stack and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Let's discuss how our IT services can transform your technology stack and drive business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                to="/ai-services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
