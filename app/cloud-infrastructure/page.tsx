import React from 'react';
import Link from 'next/link';
import { Cloud, Server, Shield, Zap, CheckCircle, ArrowRight, Users, Globe, Database, Settings } from 'lucide-react';

const CloudInfrastructurePage = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Testing & Validation'],
    },
    {
      icon: Server,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure, and cost-effective cloud architectures.',
      features: ['Microservices Design', 'Auto-scaling', 'Load Balancing', 'High Availability'],
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions to protect your cloud infrastructure and data.',
      features: ['Identity Management', 'Data Encryption', 'Network Security', 'Compliance'],
    },
    {
      icon: Zap,
      title: 'Cloud Optimization',
      description: 'Optimize your cloud infrastructure for performance, cost, and efficiency.',
      features: ['Cost Optimization', 'Performance Tuning', 'Resource Management', 'Monitoring'],
    },
  ];

  const platforms = [
    {
      name: 'Amazon Web Services (AWS)',
      description: 'Comprehensive cloud platform with extensive services and global reach.',
      features: ['EC2', 'S3', 'Lambda', 'RDS', 'VPC'],
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise-grade cloud platform with strong integration capabilities.',
      features: ['Virtual Machines', 'Azure SQL', 'Functions', 'Storage', 'Networking'],
    },
    {
      name: 'Google Cloud Platform (GCP)',
      description: 'Advanced cloud platform with strong AI and data analytics capabilities.',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'Kubernetes', 'AI/ML'],
    },
  ];

  const benefits = [
    'Scalability',
    'Cost Efficiency',
    'Enhanced Security',
    'Global Reach',
    'High Availability',
    'Easy Maintenance',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud <span className="text-blue-600">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Build, deploy, and manage scalable cloud infrastructure solutions that grow with your business. 
              From migration to optimization, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <service.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
              We work with all major cloud platforms to provide the best solution for your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {platform.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {platform.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Cloud Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Cloud infrastructure provides numerous advantages for modern businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how cloud infrastructure can transform your business operations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Cloud Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructurePage;