import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Shield, Zap, Database, Globe } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const cloudSolutions = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Post-migration Support']
    },
    {
      icon: Server,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure, and cost-effective cloud architectures.',
      features: ['Architecture Design', 'Scalability Planning', 'Performance Optimization', 'Cost Management']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Security Assessment', 'Identity Management', 'Data Encryption', 'Compliance Monitoring']
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with cloud-native DevOps tools.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Automated Scaling']
    },
    {
      icon: Database,
      title: 'Cloud Databases',
      description: 'Managed database services with high availability, backup, and disaster recovery.',
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Leverage multiple cloud providers for optimal performance, cost, and reliability.',
      features: ['Multi-cloud Design', 'Vendor Management', 'Cost Optimization', 'Disaster Recovery']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure solutions including migration, architecture, security, and DevOps services." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud architecture, DevOps, cloud security, multi-cloud" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Cloud Infrastructure
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build, migrate, and optimize your cloud infrastructure with our comprehensive solutions. 
                Scale efficiently and securely in the cloud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </a>
                <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Solutions</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                End-to-end cloud infrastructure solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold ml-4">{solution.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{solution.description}</p>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                          {feature}
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you design and implement the perfect cloud infrastructure for your business.
            </p>
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-block">
              Start Your Cloud Journey
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;