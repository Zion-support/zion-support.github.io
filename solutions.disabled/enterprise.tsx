import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Building2, Shield, Users, BarChart, Cloud, Database, Zap, Target, CheckCircle, Globe, Cpu, Layers } from 'lucide-react';

export default function EnterpriseSolutions() {
  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Architecture',
      description: 'Scalable, secure, and maintainable systems designed for large organizations'
    }, {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with SOC2, GDPR, and industry-specific compliance'
    }, {
      icon: Users,
      title: 'User Management',
      description: 'Advanced identity and access management with SSO and role-based permissions'
    }, {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Comprehensive analytics and reporting for data-driven decision making'
    }, {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Hybrid and multi-cloud solutions with high availability and disaster recovery'
    }, {
      icon: Database,
      title: 'Data Management',
      description: 'Enterprise data lakes, warehouses, and real-time processing systems'
    }
  ];

  const features = [
    {
      title: 'Scalability',
      description: 'Handle millions of users and transactions with auto-scaling infrastructure',
      benefits: ['Auto-scaling', 'Load balancing', 'Microservices architecture', 'Container orchestration']
    }, {
      title: 'Security',
      description: 'Bank-level security with comprehensive threat protection and monitoring',
      benefits: ['Zero-trust architecture', 'End-to-end encryption', 'Security monitoring', 'Compliance automation']
    }, {
      title: 'Integration',
      description: 'Seamless integration with existing enterprise systems and third-party services',
      benefits: ['API management', 'Legacy system integration', 'Real-time sync', 'Data transformation']
    }, {
      title: 'Support',
      description: '24/7 enterprise support with dedicated account management and SLA guarantees',
      benefits: ['Dedicated support team', 'SLA guarantees', 'Priority response', 'Custom training']
    }
  ];

  const industries = [
    { name: 'Financial Services', description: 'Banking, insurance, and fintech solutions with regulatory compliance' }, { name: 'Healthcare', description: 'HIPAA-compliant systems for hospitals, clinics, and health organizations' }, { name: 'Government', description: 'Secure, compliant solutions for federal, state, and local government agencies' }, { name: 'Manufacturing', description: 'IoT integration, supply chain management, and industrial automation' }, { name: 'Retail & E-commerce', description: 'Large-scale e-commerce platforms and retail management systems' }, { name: 'Education', description: 'Learning management systems and educational technology platforms' }
  ];

  const technologies = [
    { name: 'Kubernetes', description: 'Container orchestration and management' }, { name: 'Docker', description: 'Application containerization' }, { name: 'AWS/Azure/GCP', description: 'Cloud infrastructure and services' }, { name: 'Microservices', description: 'Scalable service architecture' }, { name: 'API Gateway', description: 'Centralized API management' }, { name: 'Redis/Memcached', description: 'High-performance caching' }, { name: 'PostgreSQL/MongoDB', description: 'Enterprise database solutions' }, { name: 'Elasticsearch', description: 'Search and analytics engine' }
  ];

  return (
    <>
      <Head>
        <title>Enterprise Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions with scalable architecture, security, and compliance. Built for large organizations with complex requirements." />
        <meta name="keywords" content="enterprise solutions, enterprise architecture, security compliance, scalable systems, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/enterprise" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Enterprise
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Scalable, secure, and compliant solutions designed for large organizations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Discuss Your Needs
                </Link>
                <Link href="/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise-Grade Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions built to handle the complexity and scale of enterprise operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Built-in capabilities that meet the demanding requirements of enterprise environments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise Industries
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized solutions for industries with complex compliance and security requirements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Enterprise Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven technologies and frameworks for enterprise-scale applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Enterprise Scale?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our enterprise solutions can support your organization's growth and requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Enterprise Pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )}
  );
};