import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Shield, Zap, BarChart, ArrowRight, CheckCircle, Server, Cloud } from 'lucide-react';

const DatabasePage: React.FC = () => {
  const services = [
    {
      title: 'Database Design & Architecture',
      description: 'Design scalable and efficient database architectures tailored to your business needs.',
      icon: Database,
      color: 'text-blue-400',
      features: [
        'Relational and NoSQL database design',
        'Performance optimization strategies',
        'Data modeling and normalization',
        'Scalability planning'
      ],
      pricing: 'Starting at $1,500/month'
    },
    {
      title: 'Database Migration',
      description: 'Seamless migration of your data to modern database platforms with zero downtime.',
      icon: Server,
      color: 'text-green-400',
      features: [
        'Zero-downtime migration strategies',
        'Data integrity verification',
        'Automated migration tools',
        'Rollback capabilities'
      ],
      pricing: 'Starting at $2,000/month'
    },
    {
      title: 'Database Security',
      description: 'Comprehensive security solutions to protect your sensitive data and ensure compliance.',
      icon: Shield,
      color: 'text-red-400',
      features: [
        'Access control and authentication',
        'Data encryption at rest and in transit',
        'Audit logging and monitoring',
        'Compliance with security standards'
      ],
      pricing: 'Starting at $1,200/month'
    },
    {
      title: 'Database Performance Optimization',
      description: 'Optimize your database performance for faster queries and better user experience.',
      icon: Zap,
      color: 'text-yellow-400',
      features: [
        'Query optimization and tuning',
        'Index optimization',
        'Performance monitoring',
        'Capacity planning'
      ],
      pricing: 'Starting at $999/month'
    }
  ];

  const databaseTypes = [
    { name: 'PostgreSQL', category: 'Relational', icon: '🐘' },
    { name: 'MySQL', category: 'Relational', icon: '🐬' },
    { name: 'MongoDB', category: 'NoSQL', icon: '🍃' },
    { name: 'Redis', category: 'In-Memory', icon: '🔴' },
    { name: 'Elasticsearch', category: 'Search', icon: '🔍' },
    { name: 'Cassandra', category: 'NoSQL', icon: '🌊' },
    { name: 'DynamoDB', category: 'NoSQL', icon: '⚡' },
    { name: 'Oracle', category: 'Relational', icon: '🏛️' }
  ];

  const benefits = [
    {
      title: 'Improved Performance',
      description: 'Faster queries and better response times',
      icon: Zap,
      metric: '10x faster'
    },
    {
      title: 'Enhanced Security',
      description: 'Protect your data with enterprise-grade security',
      icon: Shield,
      metric: '100% secure'
    },
    {
      title: 'Better Scalability',
      description: 'Scale your database to handle growing demands',
      icon: BarChart,
      metric: 'Unlimited scale'
    },
    {
      title: 'Cost Optimization',
      description: 'Reduce database costs through optimization',
      icon: Cloud,
      metric: '50% savings'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Database Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Optimize your data infrastructure with our comprehensive database services. 
            From design to migration, we help you build scalable, secure, and high-performance databases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Get Database Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/ai-data-analytics"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              AI Data Analytics
            </Link>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Database Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <service.icon className={`w-12 h-12 ${service.color} flex-shrink-0`} />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 text-lg mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-semibold text-lg">{service.pricing}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="cyber-button inline-flex items-center w-full justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Database Types */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
              Supported Database Types
            </h2>
            <p className="text-gray-300 text-center mb-8 text-lg">
              We work with all major database systems and can help you choose the right one for your needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {databaseTypes.map((db, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
                  <div className="text-4xl mb-3">{db.icon}</div>
                  <h3 className="text-white font-semibold mb-1">{db.name}</h3>
                  <p className="text-gray-400 text-sm">{db.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Database Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Database Process */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-8 neon-text">
              Our Database Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Analysis</h3>
                <p className="text-gray-300">Analyze your current database and data requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Design</h3>
                <p className="text-gray-300">Design optimal database architecture and schema</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Implement</h3>
                <p className="text-gray-300">Deploy and configure your database solution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Optimize</h3>
                <p className="text-gray-300">Monitor and optimize performance continuously</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cyber-card p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Optimize Your Database?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our database experts help you build a robust, scalable, and secure data infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Start Your Database Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/it-services"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              IT Services
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
};

export default DatabasePage;