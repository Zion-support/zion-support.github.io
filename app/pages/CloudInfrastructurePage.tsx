import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Server, Shield, Zap, Database, Globe } from 'lucide-react';

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
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure, and cost-effective cloud architectures.',
      features: ['Multi-cloud Strategy', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Monitoring']
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automated Testing']
    },
    {
      icon: Database,
      title: 'Cloud Databases',
      description: 'Managed database services with high availability, scalability, and performance.',
      features: ['Database Migration', 'Backup & Recovery', 'Performance Tuning', 'Security Hardening']
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Worldwide cloud infrastructure to ensure low latency and high availability.',
      features: ['CDN Setup', 'Edge Computing', 'Global Load Balancing', 'Multi-region Deployment']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, architecture design, security, and DevOps solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud architecture, DevOps, cloud security, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xlmd:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, migrate, and optimize your cloud infrastructure with our expert solutions. 
            Scale efficiently and securely in the cloud.
          </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8h-8 text-white" />
                  </div>
        </div>
                
                <h3 className="text-2xlfont-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300text-sm flex items-center">
                        <div className="w-2h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
        </div>

                <button className="w-fullbg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Learn More
                </button>
                </div>
            ))}
      </section>

      {/* CTA Section */}
      <section className="py-20bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xlmd:text-5xl font-bold text-white mb-6">
            Ready to Scale in the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our cloud infrastructure services can transform your business operations.
          </p>
          <div className="flexflex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-rfrom-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Start Your Cloud Journey
            </button>
            <button className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
              Schedule Consultation
            </button>
      </section>
  );
};

export default CloudInfrastructurePage;