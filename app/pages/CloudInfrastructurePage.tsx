import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CloudIcon, 
  ServerIcon, 
  CircleStackIcon, 
  ShieldCheckIcon, 
  BoltIcon, 
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing infrastructure to the cloud with zero downtime.',
      features: ['AWS/Azure/GCP Migration', 'Data Transfer', 'Application Modernization', 'Performance Optimization']
    },
    {
      icon: ServerIcon,
      title: 'Server Management',
      description: 'Complete server setup, configuration, and ongoing management services.',
      features: ['Server Provisioning', 'OS Configuration', 'Security Hardening', '24/7 Monitoring']
    },
    {
      icon: CircleStackIcon,
      title: 'Database Solutions',
      description: 'Scalable database solutions for optimal performance and reliability.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'High Availability']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Implementation',
      description: 'Comprehensive security measures to protect your cloud infrastructure.',
      features: ['Access Control', 'Encryption', 'Threat Detection', 'Compliance Management']
    },
    {
      icon: BoltIcon,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      features: ['Resource Optimization', 'Cost Analysis', 'Auto-scaling', 'Load Balancing']
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Deployment',
      description: 'Deploy your applications globally with optimal performance and reliability.',
      features: ['CDN Setup', 'Multi-region Deployment', 'Edge Computing', 'Global Load Balancing']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure services including migration, management, and optimization from Zion Tech Group." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, server management, database solutions, Zion Tech Group" />
        <meta property="og:title" content="Cloud Infrastructure - Zion Tech Group" />
        <meta property="og:description" content="Professional cloud infrastructure services including migration, management, and optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cloud-infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Cloud Infrastructure
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Build, manage, and optimize your cloud infrastructure with our expert services. 
                From migration to ongoing management, we ensure your cloud environment is secure, scalable, and cost-effective.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you build a robust, scalable, and secure infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
              <a
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;
