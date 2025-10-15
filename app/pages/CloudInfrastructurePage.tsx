import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Globe } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server management and optimization for peak performance.',
      features: ['Server Monitoring', 'Performance Optimization', 'Security Hardening', 'Backup & Recovery']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Scalable and secure database solutions for your business needs.',
      features: ['Database Design', 'Performance Tuning', 'Data Security', 'Backup Strategies']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions to protect your infrastructure.',
      features: ['Security Audits', 'Compliance Management', 'Threat Detection', 'Incident Response']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your infrastructure for maximum performance and efficiency.',
      features: ['Load Balancing', 'Caching Strategies', 'Resource Optimization', 'Monitoring & Analytics']
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwide infrastructure deployment and management services.',
      features: ['Multi-Region Deployment', 'CDN Configuration', 'Global Load Balancing', 'Disaster Recovery']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure solutions including migration, server management, database solutions, and security services." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, server management, database solutions, cloud security" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, manage, and optimize your cloud infrastructure with our comprehensive solutions
            designed for scalability, security, and performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our cloud infrastructure solutions can accelerate your business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Get Started Today
            </button>
            <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructurePage;
