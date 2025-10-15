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
      title: 'Cloud Architecture',
      description: 'Design scalable and resilient cloud architectures tailored to your business needs.',
      features: ['Infrastructure Design', 'Scalability Planning', 'Cost Optimization', 'Security Integration']
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Managed database solutions with high availability and performance optimization.',
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring & Maintenance']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Security Assessment', 'Access Control', 'Data Encryption', 'Compliance Management']
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Automated Scaling']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize your cloud strategy across multiple providers for maximum flexibility.',
      features: ['Provider Selection', 'Cost Optimization', 'Risk Mitigation', 'Unified Management']
    }
  ];

  const platforms = [
    { name: 'Amazon Web Services', description: 'Comprehensive cloud services and solutions' },
    { name: 'Microsoft Azure', description: 'Enterprise-grade cloud platform and services' },
    { name: 'Google Cloud Platform', description: 'Advanced data analytics and AI services' },
    { name: 'Hybrid Cloud', description: 'Seamless integration of on-premises and cloud resources' }
  ];

  const benefits = [
    { title: 'Scalability', description: 'Scale resources up or down based on demand' },
    { title: 'Cost Efficiency', description: 'Pay only for what you use with flexible pricing' },
    { title: 'Reliability', description: 'High availability and disaster recovery capabilities' },
    { title: 'Security', description: 'Advanced security features and compliance standards' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, architecture design, security, and DevOps solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, AWS, Azure, Google Cloud, DevOps, cloud security" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cloud Infrastructure
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Scalable, secure, and efficient cloud solutions for modern businesses
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete cloud infrastructure solutions designed to meet your business requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with all major cloud providers to deliver the best solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Cloud Infrastructure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with the power of cloud computing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let our experts help you design and implement the perfect cloud solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </a>
            <a
              href="/case-studies"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructurePage;