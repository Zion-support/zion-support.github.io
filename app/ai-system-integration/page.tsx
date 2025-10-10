'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Settings, 
  Link, 
  Zap, 
  Shield, 
  Database, 
  CheckCircle, 
  ArrowRight,
  Cloud,
  Server,
  Cpu,
  Globe,
  Lock,
  Activity,
  Monitor,
  Code,
  Wrench
} from 'lucide-react';

const SystemIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: Link,
      title: 'Seamless Integration',
      description: 'Connect disparate systems and applications for unified data flow and operations'
    },
    {
      icon: Zap,
      title: 'Real-time Synchronization',
      description: 'Instant data synchronization across all integrated systems and platforms'
    },
    {
      icon: Shield,
      title: 'Secure Data Exchange',
      description: 'Enterprise-grade security protocols for safe data transmission between systems'
    },
    {
      icon: Database,
      title: 'Data Consolidation',
      description: 'Unified data management with intelligent data mapping and transformation'
    },
    {
      icon: Cloud,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud services and hybrid infrastructure'
    },
    {
      icon: Monitor,
      title: 'Centralized Monitoring',
      description: 'Real-time monitoring and management of all integrated systems'
    }
  ];

  const services = [
    {
      title: 'API Integration',
      description: 'Connect systems through RESTful APIs and microservices architecture',
      features: ['REST API development', 'GraphQL integration', 'Webhook implementation', 'API gateway setup']
    },
    {
      title: 'Database Integration',
      description: 'Unify data across multiple databases and data sources',
      features: ['Data migration', 'ETL processes', 'Data synchronization', 'Data warehousing']
    },
    {
      title: 'Cloud Integration',
      description: 'Integrate on-premise systems with cloud platforms and services',
      features: ['AWS integration', 'Azure connectivity', 'Google Cloud setup', 'Hybrid cloud solutions']
    },
    {
      title: 'Legacy System Integration',
      description: 'Modernize and integrate legacy systems with new technologies',
      features: ['Legacy modernization', 'System migration', 'Data transformation', 'Interface development']
    }
  ];

  const integrationTypes = [
    { name: 'API Integration', icon: Code, description: 'Connect systems via APIs' },
    { name: 'Database Integration', icon: Database, description: 'Unify data sources' },
    { name: 'Cloud Integration', icon: Cloud, description: 'Hybrid cloud solutions' },
    { name: 'Legacy Integration', icon: Wrench, description: 'Modernize old systems' },
    { name: 'Real-time Sync', icon: Activity, description: 'Live data synchronization' },
    { name: 'Security Integration', icon: Lock, description: 'Secure data exchange' }
  ];

  const technologies = [
    'REST APIs', 'GraphQL', 'WebSockets', 'Message Queues', 'Docker', 'Kubernetes',
    'AWS', 'Azure', 'Google Cloud', 'MongoDB', 'PostgreSQL', 'Redis',
    'Apache Kafka', 'RabbitMQ', 'Apache Airflow', 'Terraform', 'Ansible'
  ];

  return (
    <>
      <Helmet>
        <title>AI System Integration - Seamless System Connectivity | Zion Tech Group</title>
        <meta name="description" content="Connect and integrate your systems with our AI-powered integration solutions. Seamless data flow, real-time synchronization, and secure system connectivity." />
        <meta name="keywords" content="system integration, API integration, data integration, cloud integration, legacy system integration" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-system-integration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI System Integration
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Connect and unify your systems with intelligent integration solutions. 
                Seamless data flow, real-time synchronization, and secure connectivity across all platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Integration Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Integration Examples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Integration Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered integration solutions provide intelligent automation, 
                seamless connectivity, and robust data management across all your systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Integration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From API development to legacy system modernization, we provide complete integration solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Integration Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We specialize in various types of system integration to meet your specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrationTypes.map((type, index) => (
                <div key={index} className="text-center">
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{type.name}</h3>
                    <p className="text-sm text-gray-400">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technology Stack
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use industry-leading technologies and tools to ensure reliable and scalable integrations.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Integrate Your Systems?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI-powered integration solutions connect your systems for seamless operations and data flow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Integration Assessment
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Contact Integration Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SystemIntegrationPage;