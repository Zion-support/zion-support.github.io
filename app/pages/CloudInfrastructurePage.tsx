import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ServerIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with minimal downtime.",
      icon: CloudIcon,
      features: [
        "Zero-downtime migration",
        "Data security and compliance",
        "Performance optimization",
        "Cost reduction strategies",
        "Scalability planning",
        "24/7 support"
      ],
      price: "Starting at $2,500/month"
    },
    {
      title: "Server Management",
      description: "Comprehensive server management services for optimal performance and reliability.",
      icon: ServerIcon,
      features: [
        "24/7 monitoring",
        "Performance optimization",
        "Security updates",
        "Backup management",
        "Disaster recovery",
        "Capacity planning"
      ],
      price: "Starting at $1,500/month"
    },
    {
      title: "Database Solutions",
      description: "Expert database design, implementation, and management for all your data needs.",
      icon: CircleStackIcon,
      features: [
        "Database design",
        "Performance tuning",
        "Data migration",
        "Backup & recovery",
        "Security implementation",
        "Monitoring & maintenance"
      ],
      price: "Starting at $2,000/month"
    },
    {
      title: "Security Implementation",
      description: "Comprehensive security solutions to protect your cloud infrastructure and data.",
      icon: ShieldCheckIcon,
      features: [
        "Identity management",
        "Access control",
        "Data encryption",
        "Threat detection",
        "Compliance management",
        "Security monitoring"
      ],
      price: "Starting at $1,800/month"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your cloud infrastructure for maximum performance and efficiency.",
      icon: BoltIcon,
      features: [
        "Performance analysis",
        "Resource optimization",
        "Load balancing",
        "Caching strategies",
        "Monitoring & alerting",
        "Continuous improvement"
      ],
      price: "Starting at $1,200/month"
    },
    {
      title: "Global Deployment",
      description: "Deploy your applications globally with our worldwide infrastructure network.",
      icon: GlobeAltIcon,
      features: [
        "Multi-region deployment",
        "CDN integration",
        "Load balancing",
        "Latency optimization",
        "Compliance management",
        "24/7 monitoring"
      ],
      price: "Starting at $3,000/month"
    }
  ];

  const benefits = [
    "Scalable Infrastructure",
    "Cost Optimization",
    "Enhanced Security",
    "24/7 Monitoring",
    "Expert Support",
    "Global Reach"
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, server management, database solutions, and security implementation." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, server management, database solutions, cloud security, performance optimization" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build and manage scalable cloud infrastructure that grows with your business. 
              From migration to optimization, we provide comprehensive cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Cloud Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Cloud Infrastructure Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <p className="text-blue-400 font-semibold text-lg">{service.price}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Cloud Infrastructure?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cloud infrastructure services can help you scale and optimize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;
