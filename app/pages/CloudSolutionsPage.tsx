import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CloudIcon,
  ServerIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  CpuChipIcon,
  DocumentTextIcon,
  PhoneIcon,
  GlobeAltIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

const CloudSolutionsPage: React.FC = () => {
  const cloudServices = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.',
      features: ['Application Migration', 'Data Migration', 'Workload Optimization', 'Zero Downtime Migration']
    },
    {
      icon: ServerIcon,
      title: 'Infrastructure as Code',
      description: 'Automate and manage your cloud infrastructure using code and best practices.',
      features: ['Terraform Implementation', 'Ansible Automation', 'GitOps Workflows', 'Infrastructure Monitoring']
    },
    {
      icon: CircleStackIcon,
      title: 'Database Solutions',
      description: 'Managed database services and optimization for improved performance and reliability.',
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'High Availability Setup']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Identity & Access Management', 'Network Security', 'Data Encryption', 'Compliance Management']
    },
    {
      icon: ChartBarIcon,
      title: 'Cloud Monitoring',
      description: 'Advanced monitoring and analytics for your cloud infrastructure and applications.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Cost Optimization', 'Alert Management']
    },
    {
      icon: CogIcon,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development and deployment processes with cloud-native DevOps tools.',
      features: ['CI/CD Pipelines', 'Container Orchestration', 'Microservices Architecture', 'Automated Testing']
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      description: 'Comprehensive AWS solutions and services for scalable cloud infrastructure.',
      icon: '☁️',
      features: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudFormation']
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise-grade Azure solutions for hybrid and multi-cloud environments.',
      icon: '🔷',
      features: ['Virtual Machines', 'Azure SQL', 'Functions', 'DevOps', 'Active Directory']
    },
    {
      name: 'Google Cloud Platform',
      description: 'Advanced GCP solutions leveraging AI and machine learning capabilities.',
      icon: '🔵',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'Kubernetes', 'AI/ML Services']
    },
    {
      name: 'Multi-Cloud',
      description: 'Hybrid and multi-cloud strategies for maximum flexibility and resilience.',
      icon: '🌐',
      features: ['Cross-Cloud Management', 'Disaster Recovery', 'Cost Optimization', 'Vendor Lock-in Prevention']
    }
  ];

  const benefits = [
    'Scalability and Flexibility',
    'Cost Optimization',
    'Enhanced Security',
    'Improved Performance',
    'Disaster Recovery',
    '24/7 Monitoring and Support'
  ];

  const cloudStats = [
    { number: '99.99%', label: 'Uptime SLA' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '3x', label: 'Performance Improvement' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, infrastructure as code, security, and monitoring. Expert cloud consulting for AWS, Azure, and GCP." />
        <meta name="keywords" content="cloud solutions, cloud migration, AWS, Azure, GCP, infrastructure as code, cloud security, DevOps, cloud consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Cloud Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with scalable, secure, and cost-effective cloud solutions. From migration to optimization, we help you harness the power of the cloud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Cloud Assessment
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Stats */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cloud Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cloudServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Cloud <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Providers</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to deliver the best solution for your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 group">
                  <div className="text-4xl mb-4">{provider.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {provider.name}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {provider.description}
                  </p>
                  <div className="space-y-1">
                    {provider.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-gray-400">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Cloud Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cloud solutions deliver measurable results and provide a competitive advantage for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you design, migrate, and optimize your cloud infrastructure for maximum performance and cost efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Cloud Journey
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                See Cloud in Action
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudSolutionsPage;