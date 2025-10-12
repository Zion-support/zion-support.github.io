import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Link as LinkIcon, Database, Cloud, Shield, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SystemIntegrationPage() {
  const services = [
    {
      icon: <LinkIcon className="w-8 h-8 text-blue-500" />,
      title: 'API Integration',
      description: 'Connect disparate systems through robust API development and integration.',
      features: ['RESTful APIs', 'GraphQL endpoints', 'Webhook integration', 'Real-time sync']
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Database Integration',
      description: 'Seamlessly integrate multiple databases and data sources.',
      features: ['Data migration', 'ETL processes', 'Data synchronization', 'Schema mapping']
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Integration',
      description: 'Integrate on-premises systems with cloud platforms and services.',
      features: ['Hybrid cloud setup', 'Cloud migration', 'Multi-cloud integration', 'Service mesh']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Integration',
      description: 'Implement secure integration patterns and authentication systems.',
      features: ['SSO implementation', 'OAuth integration', 'Security protocols', 'Access management']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Real-time Integration',
      description: 'Enable real-time data flow and event-driven architectures.',
      features: ['Event streaming', 'Message queues', 'WebSocket connections', 'Live updates']
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-500" />,
      title: 'Legacy System Integration',
      description: 'Modernize and integrate legacy systems with modern applications.',
      features: ['Legacy modernization', 'Data transformation', 'System migration', 'Compatibility layers']
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Improved Efficiency',
      description: 'Eliminate manual processes and data silos with automated integration.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Enhanced Data Flow',
      description: 'Enable seamless data sharing between systems and applications.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Reduced Complexity',
      description: 'Simplify your IT landscape with unified system architecture.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
      description: 'Build integration solutions that grow with your business needs.'
    }
  ];

  const technologies = [
    'REST APIs', 'GraphQL', 'Webhooks', 'Message Queues', 'Microservices', 
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'MongoDB', 
    'PostgreSQL', 'Redis', 'Apache Kafka', 'RabbitMQ'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>System Integration Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive system integration services including API development, database integration, and cloud connectivity solutions." />
        <meta name="keywords" content="system integration, API development, database integration, cloud integration, microservices" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            System Integration
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect your systems, streamline workflows, and unlock the full potential of your technology stack 
            with our comprehensive integration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Integration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive integration solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern tools and technologies for robust integration solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our Integration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with seamless system integration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Connect Your Systems?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our integration experts help you build a connected, efficient technology ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Integration Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/it-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}