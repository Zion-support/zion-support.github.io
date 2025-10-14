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
      description: 'Ensure your cloud infrastructure meets security standards and compliance requirements.',
      features: ['Identity & Access Management', 'Data Encryption', 'Security Monitoring', 'Compliance Auditing']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Maximize your cloud infrastructure performance and cost efficiency.',
      features: ['Auto-scaling', 'Load Balancing', 'Caching Strategies', 'Cost Optimization']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement a robust multi-cloud architecture for maximum flexibility.',
      features: ['Cloud Provider Selection', 'Hybrid Cloud Solutions', 'Disaster Recovery', 'Vendor Management']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud infrastructure services including migration, automation, and optimization. Transform your business with scalable cloud solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, DevOps, AWS, Azure, GCP, cloud optimization" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cloud Infrastructure Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with scalable, secure, and cost-effective cloud infrastructure solutions. 
              Our experts help you migrate, optimize, and manage your cloud environment.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud infrastructure solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
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
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you design and implement the perfect cloud solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;