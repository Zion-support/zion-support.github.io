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
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning and management using modern DevOps practices.',
      features: ['Terraform Templates', 'CI/CD Pipelines', 'Version Control', 'Automated Deployments']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Optimize your database performance and scalability in the cloud environment.',
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring & Alerting']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implement robust security measures and ensure compliance with industry standards.',
      features: ['Identity & Access Management', 'Data Encryption', 'Compliance Audits', 'Security Monitoring']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Maximize your cloud infrastructure performance and minimize costs.',
      features: ['Resource Optimization', 'Auto-scaling', 'Load Balancing', 'Cost Management']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Leverage multiple cloud providers for optimal performance and redundancy.',
      features: ['Multi-Cloud Architecture', 'Disaster Recovery', 'Vendor Management', 'Cost Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Expert cloud infrastructure services including migration, automation, security, and optimization for modern businesses." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, DevOps, infrastructure as code, cloud security" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, deploy, and manage scalable cloud infrastructure that grows with your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
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
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Scale Your Infrastructure?</h2>
            <p className="text-gray-300 mb-6">
              Let us help you build a robust, scalable cloud infrastructure that supports your business growth.
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructurePage;