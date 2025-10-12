import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Server, Shield, Zap, BarChart3, Globe, Database, Clock, Users } from 'lucide-react'

export default function DataCenterPage() {
  const features = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'High-Performance Servers',
      description: 'State-of-the-art server infrastructure with 99.9% uptime guarantee.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Multi-layered security with biometric access, 24/7 monitoring, and compliance standards.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Redundant Power',
      description: 'Uninterruptible power supply with backup generators and battery systems.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Real-time Monitoring',
      description: 'Advanced monitoring systems for performance, security, and environmental conditions.'
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'Global Connectivity',
      description: 'High-speed internet connections and direct peering with major networks worldwide.'
    },
    {
      icon: <Database className="w-8 h-8 text-indigo-500" />,
      title: 'Scalable Storage',
      description: 'Flexible storage solutions that grow with your business needs.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic Rack',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1U server space',
        '1 Gbps bandwidth',
        'Basic monitoring',
        'Email support',
        'Standard security',
        '99.9% uptime SLA',
        'Remote hands service'
      ],
      popular: false
    },
    {
      name: 'Professional Rack',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Half rack (20U)',
        '10 Gbps bandwidth',
        'Advanced monitoring',
        'Priority support',
        'Enhanced security',
        '99.95% uptime SLA',
        '24/7 remote hands',
        'Custom configurations'
      ],
      popular: true
    },
    {
      name: 'Enterprise Suite',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full rack (42U)',
        '100 Gbps bandwidth',
        'Premium monitoring',
        'Dedicated support',
        'Maximum security',
        '99.99% uptime SLA',
        'On-site technician',
        'Custom solutions'
      ],
      popular: false
    }
  ]

  const services = [
    'Colocation Services',
    'Dedicated Servers',
    'Cloud Infrastructure',
    'Backup & Recovery',
    'Disaster Recovery',
    'Network Services',
    'Security Services',
    'Managed Services'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Data Center Services - Zion Tech Group | Enterprise Data Center Solutions</title>
        <meta name="description" content="Professional data center services with enterprise-grade infrastructure, security, and 99.9% uptime guarantee. Colocation, dedicated servers, and cloud solutions." />
        <meta name="keywords" content="data center, colocation, dedicated servers, enterprise infrastructure, data center services, cloud hosting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Data Center Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade data center solutions with 99.9% uptime guarantee. 
              Secure, scalable, and reliable infrastructure for your critical business applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              State-of-the-art data center facilities designed for maximum reliability and performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Data Center Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the data center solution that fits your infrastructure needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-blue-500/20' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Data Center Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive data center solutions for all your infrastructure needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Host Your Infrastructure?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get enterprise-grade data center services with 99.9% uptime guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/it-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All IT Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}