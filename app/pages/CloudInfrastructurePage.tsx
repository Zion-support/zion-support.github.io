import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, StarIcon } from '@heroicons/react/24/outline';
import {
  CloudIcon,
  ServerIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  ClockIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const CloudInfrastructurePage: React.FC = () => {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation'],
      pricing: 'Starting at $2,500/month'
    },
    {
      icon: ServerIcon,
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning and management using modern DevOps practices.',
      features: ['Terraform Templates', 'CI/CD Pipelines', 'Version Control', 'Automated Deployments'],
      pricing: 'Starting at $1,800/month'
    },
    {
      icon: DatabaseIcon,
      title: 'Database Solutions',
      description: 'Optimize your database performance and scalability in the cloud environment.',
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring & Alerting'],
      pricing: 'Starting at $1,500/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security & Compliance',
      description: 'Implement robust security measures and ensure compliance with industry standards.',
      features: ['Identity & Access Management', 'Data Encryption', 'Compliance Audits', 'Security Monitoring'],
      pricing: 'Starting at $2,200/month'
    },
    {
      icon: BoltIcon,
      title: 'Auto-scaling',
      description: 'Automatically scale your resources based on demand to optimize costs and performance.',
      features: ['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring'],
      pricing: 'Starting at $1,200/month'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-cloud Strategy',
      description: 'Leverage multiple cloud providers for better resilience and vendor independence.',
      features: ['Cloud Strategy', 'Vendor Management', 'Disaster Recovery', 'Cost Optimization'],
      pricing: 'Starting at $3,000/month'
    }
  ];

  const benefits = [
    {
      title: '99.9% Uptime',
      description: 'Guaranteed high availability with redundant systems and failover mechanisms',
      icon: ClockIcon
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by up to 40% through intelligent resource management',
      icon: CurrencyDollarIcon
    },
    {
      title: 'Scalability',
      description: 'Scale resources automatically based on demand without manual intervention',
      icon: ChartBarIcon
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security with encryption, monitoring, and compliance features',
      icon: ShieldCheckIcon
    }
  ];

  const cloudProviders = ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'IBM Cloud', 'Oracle Cloud'];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group | Cloud Migration & Management</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, management, security, and optimization. Starting from $1,200/month." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, AWS, Azure, Google Cloud, cloud management, cloud security" />
        <meta property="og:title" content="Cloud Infrastructure - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive cloud infrastructure services including migration, management, security, and optimization." />
        <meta property="og:url" content="https://ziontechgroup.com/cloud-infrastructure" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Cloud Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with scalable, secure, and cost-effective cloud infrastructure solutions. 
            We help you migrate, manage, and optimize your cloud environment for maximum performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Cloud Assessment
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              View Cloud Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Cloud Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven cloud infrastructure solutions that deliver reliability, security, and cost savings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Cloud Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure services designed to meet your specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400">Includes setup, monitoring & support</div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    to="/contact" 
                    className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Quote
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <Link 
                    to="/demo" 
                    className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                  >
                    View Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cloud <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Providers</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud providers to give you the best solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                <span className="text-gray-300 font-medium text-lg">{provider}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss your cloud infrastructure needs and create a migration plan that works for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Get Free Cloud Assessment
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              Schedule Cloud Demo
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudInfrastructurePage;