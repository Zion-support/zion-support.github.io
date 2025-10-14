import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Database, Shield, Zap, Globe } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['Zero-downtime Migration', 'Data Security', 'Cost Optimization', 'Performance Monitoring']
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Manage and provision cloud infrastructure using code for consistency and scalability.',
      features: ['Automated Provisioning', 'Version Control', 'Environment Consistency', 'Disaster Recovery']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and manage your databases in the cloud for maximum performance and reliability.',
      features: ['Performance Tuning', 'Backup & Recovery', 'Scaling', 'Security Hardening']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implement robust security measures and ensure compliance with industry standards.',
      features: ['Identity Management', 'Data Encryption', 'Compliance Auditing', 'Threat Detection']
    },
    {
      icon: Zap,
      title: 'Auto Scaling',
      description: 'Automatically scale your resources based on demand to optimize costs and performance.',
      features: ['Dynamic Scaling', 'Load Balancing', 'Cost Optimization', 'Performance Monitoring']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Leverage multiple cloud providers for redundancy, cost optimization, and vendor independence.',
      features: ['Vendor Independence', 'Risk Mitigation', 'Cost Optimization', 'Global Reach']
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Scale your infrastructure up or down based on demand without manual intervention.',
      icon: '📈'
    },
    {
      title: 'Cost Efficiency',
      description: 'Pay only for what you use with flexible pricing models and resource optimization.',
      icon: '💰'
    },
    {
      title: 'Reliability',
      description: 'Achieve high availability and disaster recovery with redundant systems and backups.',
      icon: '🛡️'
    },
    {
      title: 'Security',
      description: 'Implement enterprise-grade security measures and compliance standards.',
      icon: '🔒'
    },
    {
      title: 'Performance',
      description: 'Optimize performance with global CDN, caching, and load balancing.',
      icon: '⚡'
    },
    {
      title: 'Flexibility',
      description: 'Choose from various cloud providers and services to meet your specific needs.',
      icon: '🔧'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, management, security, and optimization." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, AWS, Azure, Google Cloud, cloud management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build, manage, and optimize your cloud infrastructure for maximum performance, security, and cost efficiency.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              From migration to ongoing management, we help you leverage the full power of cloud computing 
              to transform your business operations and drive growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Infrastructure</span> Services?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of modern cloud infrastructure designed for your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Infrastructure?</h2>
              <p className="text-gray-300 mb-6">
                Let's discuss how our cloud infrastructure expertise can optimize your operations and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Get Cloud Assessment
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;