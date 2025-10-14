import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Globe } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Post-Migration Support']
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server setup, configuration, and ongoing management for optimal performance.',
      features: ['Server Provisioning', 'Configuration Management', 'Performance Tuning', 'Monitoring & Maintenance']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Expert database design, optimization, and management for your critical data infrastructure.',
      features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Security Hardening']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Robust security measures and compliance management to protect your cloud infrastructure.',
      features: ['Security Audits', 'Compliance Management', 'Threat Detection', 'Incident Response']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      features: ['Performance Analysis', 'Cost Optimization', 'Auto-scaling', 'Load Balancing']
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Deploy your applications globally with our worldwide cloud infrastructure expertise.',
      features: ['Multi-region Setup', 'CDN Configuration', 'Global Load Balancing', 'Disaster Recovery']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Expert cloud infrastructure services including migration, management, and optimization for scalable and secure cloud solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, server management, database solutions, cloud security, performance optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build, manage, and optimize your cloud infrastructure for maximum performance and scalability
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From migration to ongoing management, our cloud experts help you leverage the full power 
              of cloud computing to drive business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-blue-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let our cloud experts help you build a robust, scalable, and secure cloud infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Cloud Consultation
              </a>
              <a
                href="/demo"
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructurePage;