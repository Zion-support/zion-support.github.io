import * as React from 'react';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { BarChart3,Database,RefreshCw,Server,Shield,Zap,CheckCircle,ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Database Design & Architecture',
    description: 'Custom database solutions designed for your specific business needs',
    features: ['Schema optimization', 'Performance tuning', 'Scalability planning', 'Data modeling']
  },
  {
    icon: Server,
    title: 'Database Migration',
    description: 'Seamless migration between database systems with zero downtime',
    features: ['Data integrity assurance', 'Automated migration tools', 'Rollback capabilities', 'Testing & validation']
  },
  {
    icon: Shield,
    title: 'Database Security',
    description: 'Comprehensive security solutions to protect your valuable data',
    features: ['Access control', 'Encryption at rest', 'Audit logging', 'Compliance monitoring']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimize your database performance for maximum efficiency',
    features: ['Query optimization', 'Index tuning', 'Resource monitoring', 'Capacity planning']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Transform your data into actionable business insights',
    features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Predictive analytics']
  },
  {
    icon: RefreshCw,
    title: 'Backup & Recovery',
    description: 'Reliable backup and disaster recovery solutions',
    features: ['Automated backups', 'Point-in-time recovery', 'Cross-region replication', 'Disaster recovery testing']
  }
];

const databaseTypes = [
  {
    name: 'PostgreSQL',
    description: 'Open-source relational database with advanced features',
    useCases: ['Web applications', 'Analytics', 'Geospatial data'],
    icon: '🐘'
  },
  {
    name: 'MySQL',
    description: 'Popular open-source database for web applications',
    useCases: ['E-commerce', 'Content management', 'Small to medium apps'],
    icon: '🐬'
  },
  {
    name: 'MongoDB',
    description: 'NoSQL document database for modern applications',
    useCases: ['Real-time analytics', 'Content management', 'Mobile apps'],
    icon: '🍃'
  },
  {
    name: 'Redis',
    description: 'In-memory data structure store for caching',
    useCases: ['Caching', 'Session storage', 'Real-time features'],
    icon: '🔴'
  },
  {
    name: 'Elasticsearch',
    description: 'Search and analytics engine for complex queries',
    useCases: ['Search functionality', 'Log analysis', 'Business intelligence'],
    icon: '🔍'
  },
  {
    name: 'ClickHouse',
    description: 'Columnar database for real-time analytics',
    useCases: ['Big data analytics', 'Time series data', 'OLAP workloads'],
    icon: '⚡'
  }
];

const pricingPlans = [
  {
    name: 'Consultation',
    price: '$150',
    period: '/hour',
    description: 'Database assessment and planning',
    features: [
      'Database audit',
      'Performance analysis',
      'Security review',
      'Optimization recommendations',
      'Migration planning'
    ]
  },
  {
    name: 'Implementation',
    price: '$5,000',
    period: '/project',
    description: 'Complete database setup and migration',
    features: [
      'Database design',
      'Migration execution',
      'Performance tuning',
      'Security configuration',
      'Documentation',
      'Training'
    ],
    popular: true
  },
  {
    name: 'Management',
    price: '$2,500',
    period: '/month',
    description: 'Ongoing database management and support',
    features: [
      '24/7 monitoring',
      'Performance optimization',
      'Security updates',
      'Backup management',
      'Incident response',
      'Monthly reports'
    ]
  }
];

export default function DatabaseSolutionsPage() {
  return (
    <MainLayout
      title="Database Solutions - Zion Tech Group"
      description="Expert database design, migration, optimization, and management services. Transform your data infrastructure with our comprehensive database solutions."
      keywords="database solutions, database migration, database optimization, PostgreSQL, MySQL, MongoDB, database management"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Database Solutions That{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Power Your Business
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Expert database design, migration, optimization, and management services. 
                Transform your data infrastructure with our comprehensive database solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Database Assessment
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Database Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From design to deployment, we provide end-to-end database solutions 
                that ensure optimal performance, security, and scalability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-green-600 mb-4">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Database Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Database Technologies We Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work with all major database systems to provide the best solution for your specific needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {databaseTypes.map((db, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{db.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{db.name}</h3>
                  <p className="text-gray-600 mb-4">{db.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {db.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="w-3 h-3 text-green-500 mr-2" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the service level that fits your needs. All plans include expert support and documentation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white p-8 rounded-lg shadow-lg ${
                    plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-500">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Optimize Your Database?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a free database assessment and discover how we can improve your data infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="text-center sm:text-left">
                  <p className="text-green-100 mb-1">📞 <strong>Call:</strong> +1 302 464 0950</p>
                  <p className="text-green-100">📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
                </div>
                <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Get Free Assessment
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}