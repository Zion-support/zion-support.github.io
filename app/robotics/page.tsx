'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Bot, Zap, Shield, Brain, Globe, BarChart3, Cloud, Lock, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const RoboticsPage: React.FC = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: 'Industrial Robotics',
      description: 'Design and implement industrial robotic solutions for manufacturing and automation.',
      features: ['Assembly automation', 'Quality control', 'Material handling', 'Process optimization']
    },
    {
      icon: <Brain className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered Robotics',
      description: 'Integrate artificial intelligence with robotics for intelligent automation and decision making.',
      features: ['Machine learning', 'Computer vision', 'Predictive maintenance', 'Adaptive control']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Safety Systems',
      description: 'Implement comprehensive safety systems to ensure safe operation of robotic systems.',
      features: ['Safety sensors', 'Emergency stops', 'Risk assessment', 'Compliance standards']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Performance Monitoring',
      description: 'Monitor and optimize robotic system performance with advanced analytics and insights.',
      features: ['Real-time monitoring', 'Performance analytics', 'Predictive maintenance', 'Efficiency optimization']
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Automation Solutions',
      description: 'Develop custom automation solutions to streamline your business processes.',
      features: ['Process automation', 'Workflow optimization', 'Integration services', 'Custom development']
    },
    {
      icon: <Lock className="w-8 h-8 text-indigo-500" />,
      title: 'Maintenance & Support',
      description: 'Comprehensive maintenance and support services to ensure optimal robotic system performance.',
      features: ['Preventive maintenance', 'Repair services', 'Software updates', 'Training programs']
    }
  ]

  const applications = [
    'Manufacturing',
    'Healthcare',
    'Agriculture',
    'Logistics',
    'Construction',
    'Retail',
    'Food Service',
    'Automotive'
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$2,999/month',
      description: 'Perfect for small operations',
      features: [
        'Basic robotic system',
        'Standard monitoring',
        'Email support',
        'Basic maintenance',
        'Training included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Advanced robotic system',
        'Real-time monitoring',
        'Priority support',
        'Comprehensive maintenance',
        'Advanced training',
        'Performance optimization',
        'Custom integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom robotic systems',
        'Full monitoring suite',
        '24/7 dedicated support',
        'Full maintenance package',
        'Custom training programs',
        'Full optimization',
        'SLA guarantee',
        'Custom solutions'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '99.9%', label: 'System Reliability' },
    { number: '60%', label: 'Efficiency Improvement' },
    { number: '24/7', label: 'Monitoring & Support' },
    { number: '100%', label: 'Safety Compliance' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Robotics Solutions - Zion Tech Group</title>
        <meta name="description" content="Professional robotics solutions including industrial automation, AI-powered robotics, and custom automation systems." />
        <meta name="keywords" content="robotics solutions, industrial automation, AI robotics, robotic systems, automation, Zion Tech Group" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Robotics
            </span>
            <br />
            <span className="text-white">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your operations with our advanced robotics solutions. 
            Industrial automation, AI-powered robotics, and custom systems for maximum efficiency.
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
              Our Robotics Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive robotics solutions designed to optimize operations, ensure safety, and drive business growth.
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

      {/* Applications Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our robotics solutions are designed for various industries and applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
                <p className="text-gray-300">{application}</p>
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
              Choose the plan that fits your robotics needs. All plans include our core services.
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
                Ready to Automate Your Operations?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our robotics experts help you design and implement the perfect automation solution.
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

export default RoboticsPage