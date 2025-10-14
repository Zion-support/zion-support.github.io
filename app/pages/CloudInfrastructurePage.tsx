import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ServerIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']
    },
    {
      icon: ServerIcon,
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning and management using modern DevOps practices.',
      features: ['Terraform Templates', 'CI/CD Pipelines', 'Version Control', 'Automated Deployments']
    },
    {
      icon: DatabaseIcon,
      title: 'Database Solutions',
      description: 'Optimize your database performance and scalability in the cloud environment.',
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring & Alerting']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Compliance',
      description: 'Implement robust security measures and ensure compliance with industry standards.',
      features: ['Identity & Access Management', 'Data Encryption', 'Compliance Audits', 'Security Monitoring']
    },
    {
      icon: BoltIcon,
      title: 'Auto-scaling',
      description: 'Automatically scale your resources based on demand to optimize costs and performance.',
      features: ['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring']
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-cloud Strategy',
      description: 'Leverage multiple cloud providers for better resilience and vendor independence.',
      features: ['Cloud Strategy', 'Vendor Management', 'Disaster Recovery', 'Cost Optimization']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure solutions including migration, automation, security, and optimization services." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, DevOps, infrastructure as code, cloud security, multi-cloud" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Infrastructure
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with scalable, secure, and efficient cloud infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our cloud infrastructure solutions can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;