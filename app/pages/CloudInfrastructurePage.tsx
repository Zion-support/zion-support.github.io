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
      features: ['Identity & Access Management', 'Data Encryption', 'Security Monitoring', 'Compliance Auditing']
    },
    {
      icon: Zap,
      title: 'Auto-scaling & Performance',
      description: 'Optimize performance and costs with intelligent auto-scaling solutions.',
      features: ['Load Balancing', 'Auto-scaling Groups', 'Performance Monitoring', 'Cost Optimization']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Leverage multiple cloud providers for better resilience and cost optimization.',
      features: ['Multi-Cloud Architecture', 'Cloud Provider Selection', 'Data Synchronization', 'Disaster Recovery']
    }
  ];

  const benefits = [
    'Reduced Infrastructure Costs',
    'Improved Scalability',
    'Enhanced Security',
    'Better Performance',
    'Increased Reliability',
    'Simplified Management',
    'Global Accessibility',
    'Disaster Recovery'
  ];

  const cloudProviders = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud Platform (GCP)',
    'IBM Cloud',
    'Oracle Cloud',
    'Alibaba Cloud'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Helmet>
        <title>Cloud Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, security, auto-scaling, and multi-cloud solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, AWS, Azure, GCP, cloud security, auto-scaling" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build, deploy, and manage scalable cloud infrastructure solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We help businesses leverage the power of cloud computing to improve scalability, 
              reduce costs, and enhance security while maintaining high performance and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Cloud Infrastructure Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
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

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Benefits of Cloud Infrastructure</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cloud computing advantages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/30 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Cloud Providers We Work With</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have expertise across all major cloud platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-slate-800/30 rounded-lg p-6 text-center hover:bg-slate-800/50 transition-colors">
                <h3 className="text-white font-semibold text-lg">{provider}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us help you design and implement the perfect cloud infrastructure for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Cloud Journey
              </a>
              <a
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-900 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructurePage;