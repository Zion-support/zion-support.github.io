'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Server, Zap, Shield, Brain, Globe, BarChart3, Cloud, Lock, Database } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DataCenterPage: React.FC = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Data Center Design & Build',
      description: 'Design and build state-of-the-art data centers with cutting-edge infrastructure and technology.',
      features: ['Infrastructure design', 'Power management', 'Cooling systems', 'Security implementation']
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Migration Services',
      description: 'Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum efficiency.',
      features: ['Cloud assessment', 'Migration planning', 'Data transfer', 'Performance optimization']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Data Center Security',
      description: 'Implement comprehensive security measures to protect your critical infrastructure and data.',
      features: ['Physical security', 'Network security', 'Access control', 'Monitoring systems']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Infrastructure Monitoring',
      description: 'Monitor and manage your data center infrastructure with advanced analytics and real-time insights.',
      features: ['Real-time monitoring', 'Performance analytics', 'Alert systems', 'Capacity planning']
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Power & Cooling Management',
      description: 'Optimize power consumption and cooling systems for maximum efficiency and cost savings.',
      features: ['Power optimization', 'Cooling efficiency', 'Energy management', 'Cost reduction']
    },
    {
      icon: <Lock className="w-8 h-8 text-indigo-500" />,
      title: 'Disaster Recovery',
      description: 'Ensure business continuity with comprehensive disaster recovery and backup solutions.',
      features: ['Backup strategies', 'Recovery planning', 'Business continuity', 'Testing procedures']
    }
  ]

  const infrastructureTypes = [
    'Tier III Data Centers',
    'Tier IV Data Centers',
    'Edge Computing',
    'Hybrid Cloud',
    'Private Cloud',
    'Colocation Services',
    'Managed Services',
    'Disaster Recovery'
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$999/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic monitoring',
        'Email support',
        'Standard security',
        'Basic backup',
        '10GB bandwidth'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Advanced monitoring',
        'Priority support',
        'Enhanced security',
        'Automated backup',
        '100GB bandwidth',
        'Performance optimization',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full monitoring suite',
        '24/7 dedicated support',
        'Enterprise security',
        'Custom backup strategies',
        'Unlimited bandwidth',
        'Full optimization',
        'SLA guarantee',
        'Custom solutions'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '99.99%', label: 'Uptime Guarantee' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Monitoring & Support' },
    { number: '100%', label: 'Security Compliance' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Data Center Services - Zion Tech Group</title>
        <meta name="description" content="Professional data center services including design, build, migration, and management. Enterprise-grade infrastructure solutions." />
        <meta name="keywords" content="data center services, data center design, cloud migration, infrastructure management, data center security, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Data Center
            </span>
            <br />
            <span className="text-white">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, manage, and optimize your data center infrastructure with our comprehensive services. 
            Enterprise-grade solutions for maximum performance and reliability.
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
              Our Data Center Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive data center solutions designed to optimize performance, ensure security, and drive business growth.
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

      {/* Infrastructure Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide solutions for all types of data center infrastructure needs.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {infrastructureTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300">{type}</p>
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
              Choose the plan that fits your data center needs. All plans include our core services.
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
                Ready to Optimize Your Data Center?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our data center experts help you design, build, and manage your infrastructure.
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

export default DataCenterPage