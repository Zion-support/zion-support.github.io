'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Database, Zap, Shield, Brain, Globe, BarChart3, Cloud, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DatabaseServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8 text-blue-500" />,
      title: 'Database Design & Architecture',
      description: 'Design and implement scalable database architectures that support your business growth.',
      features: ['Schema design', 'Performance optimization', 'Scalability planning', 'Migration strategies']
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Database Migration',
      description: 'Seamlessly migrate your databases to the cloud with minimal downtime and maximum efficiency.',
      features: ['Cloud assessment', 'Migration planning', 'Data transfer', 'Performance tuning']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Database Security',
      description: 'Implement comprehensive security measures to protect your sensitive data and ensure compliance.',
      features: ['Access control', 'Encryption', 'Audit logging', 'Compliance management']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Database Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and reporting solutions.',
      features: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Performance monitoring']
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Performance Optimization',
      description: 'Optimize database performance for faster queries and improved user experience.',
      features: ['Query optimization', 'Index tuning', 'Resource monitoring', 'Capacity planning']
    },
    {
      icon: <Lock className="w-8 h-8 text-indigo-500" />,
      title: 'Backup & Recovery',
      description: 'Ensure data protection with comprehensive backup and disaster recovery solutions.',
      features: ['Automated backups', 'Point-in-time recovery', 'Disaster recovery', 'Business continuity']
    }
  ]

  const databaseTypes = [
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Oracle',
    'SQL Server',
    'Redis',
    'Elasticsearch',
    'Cassandra'
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$199/month',
      description: 'Perfect for small applications',
      features: [
        'Single database instance',
        'Basic monitoring',
        'Email support',
        'Standard backup',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Multiple database instances',
        'Advanced monitoring',
        'Priority support',
        'Automated backups',
        '50GB storage',
        'Performance optimization',
        'Security features'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited instances',
        'Real-time monitoring',
        '24/7 dedicated support',
        'Custom backup strategies',
        'Unlimited storage',
        'Full optimization',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50%', label: 'Performance Improvement' },
    { number: '24/7', label: 'Monitoring & Support' },
    { number: '100%', label: 'Data Security' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Database Services - Zion Tech Group</title>
        <meta name="description" content="Professional database services including design, migration, optimization, and security. Expert database solutions for your business." />
        <meta name="keywords" content="database services, database design, database migration, database optimization, database security, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Database
            </span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data management with our comprehensive database services. 
            Design, migrate, optimize, and secure your databases for peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
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
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Database Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive database solutions designed to optimize performance, ensure security, and drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Database Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major database technologies to provide the best solution for your needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {databaseTypes.map((dbType, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300">{dbType}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your database needs. All plans include our core services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-white/20'
              } hover:border-purple-500 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Database?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our database experts help you design, migrate, and optimize your database infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DatabaseServicesPage