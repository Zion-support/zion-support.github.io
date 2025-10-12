import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Database, Shield, Zap, Globe, Clock, DollarSign, Star, Target, Award, Users, BarChart3, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DatabaseServicesPage: React.FC = () => {
  const databaseServices = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Database Design & Architecture',
      description: 'Custom database design and architecture solutions tailored to your business needs.',
      price: '$2,500/project',
      features: ['Schema design', 'Performance optimization', 'Scalability planning', 'Security implementation']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Database Security',
      description: 'Comprehensive security solutions to protect your data and ensure compliance.',
      price: '$1,200/month',
      features: ['Access control', 'Encryption', 'Audit logging', 'Compliance monitoring']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Performance Tuning',
      description: 'Optimize database performance for maximum speed and efficiency.',
      price: '$800/month',
      features: ['Query optimization', 'Index tuning', 'Resource monitoring', 'Performance analytics']
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Database Migration',
      description: 'Seamless migration between database platforms with zero downtime.',
      price: '$3,000/project',
      features: ['Data migration', 'Schema conversion', 'Testing & validation', 'Rollback planning']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics & Reporting',
      description: 'Transform your data into actionable insights with advanced analytics.',
      price: '$1,500/month',
      features: ['Custom reports', 'Data visualization', 'Real-time dashboards', 'Predictive analytics']
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-500" />,
      title: 'Database Administration',
      description: 'Complete database administration and maintenance services.',
      price: '$999/month',
      features: ['24/7 monitoring', 'Backup & recovery', 'Updates & patches', 'Performance tuning']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '50+', label: 'Database Projects', icon: <Database className="w-6 h-6 text-blue-400" /> },
    { number: '< 1s', label: 'Query Response Time', icon: <Zap className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const technologies = [
    { name: 'Relational Databases', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle'] },
    { name: 'NoSQL Databases', items: ['MongoDB', 'Redis', 'Cassandra', 'DynamoDB'] },
    { name: 'Cloud Databases', items: ['AWS RDS', 'Azure SQL', 'Google Cloud SQL', 'PlanetScale'] },
    { name: 'Analytics', items: ['BigQuery', 'Snowflake', 'Redshift', 'ClickHouse'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Database Services - Zion Tech Group</title>
        <meta name="description" content="Expert database services including design, migration, security, and performance optimization. Transform your data infrastructure with our database solutions." />
        <meta name="keywords" content="database services, database design, database migration, database security, performance tuning, data analytics" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Database
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Expert database services to optimize, secure, and scale your data infrastructure. 
              From design to migration, we handle all your database needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Database Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive database solutions designed to optimize your data infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {databaseServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Database Technologies</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We work with all major database platforms and technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">{tech.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Database?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our database services can improve your data infrastructure and performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DatabaseServicesPage;